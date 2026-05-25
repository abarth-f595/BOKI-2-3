import type { Character } from "@/types/character";

export const domekiSensei: Character = {
  id: "domeki-sensei",
  name: "domeki-sensei",
  displayName: "百目鬼先生",
  imagePath: "/characters/domeki-sensei.png",
  themeColor: "#6366f1",
  correctLines: [
    "…正解。",
    "ふむ。良い音だ。",
    "…悪くない。",
    "ピン、と来てるな。",
    "カチッ、ハマったか。",
    "…才能、感じる。",
    "ふ。よくやった。",
    "ドン、と決めたな。",
    "…合格点だ。",
    "キレ味、上々。",
  ],
  incorrectLines: [
    "…惜しい。",
    "ふむ、雑音だな。",
    "…ピントがずれてる。",
    "もう一度。集中。",
    "…音が走った。",
    "ふ。次だ。",
    "…落ち着け。",
    "タイミング、ズレた。",
    "…基礎に戻れ。",
    "焦るな。聴け。",
  ],
};
