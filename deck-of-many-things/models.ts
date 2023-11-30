export const NUMBER_OF_CARDS: number = 13;

export enum CARD_TYPES {
  SUN = 1,
  MOON = 2,
  STAR = 3,
  THRONE = 4,
  KEY = 5,
  KNIGH = 6,
  THE_VOID = 7,
  FLAMES = 8,
  SKULL = 9,
  RUIN = 10,
  EURYALE = 11,
  ROGUE = 12,
  JESTER = 13,
};

export function isCardTypes(candidate: number): candidate is CARD_TYPES {
  return Object.values(CARD_TYPES).includes(candidate)
}

export const CARD_EFFECT:Record<CARD_TYPES, string> = {
  [CARD_TYPES.SUN]:
    "¿Desde cuando llevas este canal? ¡Tienes muy pocos puntos! Toma 50k",
  [CARD_TYPES.MOON]:
    "eres el jefe de los mods. Pideles lo que quieras " +
    (Math.floor(Math.random() * 3 + 1) + "veces. Pero no te pases..."),
  [CARD_TYPES.STAR]:
    "pero que persona más importante. ¡Que alguien lo haga vip!",
  [CARD_TYPES.THRONE]: "por definir... este lo tenemos que probar",
  [CARD_TYPES.KEY]: "¿Tenemos nuevo mod? Podría ser...",
  [CARD_TYPES.KNIGH]: "¡Tienes a los mods a tu servicio! Pobrecitos",
  [CARD_TYPES.THE_VOID]: "De la misma forma que vino, se marcho. F",
  [CARD_TYPES.FLAMES]: "¡Hasta mañana!",
  [CARD_TYPES.SKULL]: "piedra, papel, tijera o te vas afuera",
  [CARD_TYPES.RUIN]: "creo que tenías un agujero en tu bosla de puntos",
  [CARD_TYPES.EURYALE]: "has encontrado otra cosa que está sin acabar. ¿Ideas?",
  [CARD_TYPES.ROGUE]:
    "te has topado con el mod revelde. Hazed lo que querais con el",
  [CARD_TYPES.JESTER]: " se la juega con todo. ¡Toma 10k puntos y robas 2!",
};

