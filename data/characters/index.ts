import { asakusaMidori } from "./asakusa-midori";
import { kanamoriSayaka } from "./kanamori-sayaka";
import { mizusakiTsubame } from "./mizusaki-tsubame";
import { domekiSensei } from "./domeki-sensei";
import { roboKen } from "./robo-ken";
import type { Character } from "@/types/character";

export { asakusaMidori } from "./asakusa-midori";
export { kanamoriSayaka } from "./kanamori-sayaka";
export { mizusakiTsubame } from "./mizusaki-tsubame";
export { domekiSensei } from "./domeki-sensei";
export { roboKen } from "./robo-ken";
export type { Character } from "@/types/character";

export const ALL_CHARACTERS: Character[] = [
  asakusaMidori,
  kanamoriSayaka,
  mizusakiTsubame,
  domekiSensei,
  roboKen,
];
