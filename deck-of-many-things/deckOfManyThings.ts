import { CARD_EFFECT, NUMBER_OF_CARDS, isCardTypes } from "./models";

import * as dotenv from "dotenv"

import * as tmi from "tmi.js"

dotenv.config()

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const commands = {
  draw: {
    response: (user: string) => {
      let roll = Math.floor(Math.random() * NUMBER_OF_CARDS);
      if (isCardTypes(roll)) {
        return `${user} ${CARD_EFFECT[roll]}`;
      }
    },
  },
};

const option = {
  options: { debug: true },
  connection: {
    reconnect: true,
    secure: true,
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: ["Gautarra"],
};

const client = new tmi.client(option);

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.connect()["catch"](function (error) {
  return console.log(error);
});

function onMessageHandler(channel: string, tags: tmi.ChatUserstate, message: string, self: boolean) {
  if(tags.username === undefined) return
  const isNotBot =
    tags.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME;

  if (!isNotBot) return;

  let match = message.match(regexpCommand);

  if (match) {
    const [raw, command, argument] = match;

    const { response } = commands[command] || {};

    if (typeof response === "function") {
      client.action(channel, response(tags.username));
    }
  }
}

function onConnectedHandler(address:string, port: number) {
  console.log("* Connected to ".concat(address, ":").concat(port.toString()));
}
