export type CharacterId = "asagusa" | "mizusaki" | "kanamori";

export interface EizoukenCharacter {
  id: CharacterId;
  name: string;
  /** /public/characters/ に配置する画像ファイル名 */
  imagePath: string;
  color: string;
  bgColor: string;
  /** 頭文字（画像が読めない時のフォールバック） */
  initial: string;
  /** セリフ: 講義開始時 */
  lectureLines: string[];
  /** セリフ: 正解時 */
  correctLines: string[];
  /** セリフ: 不正解時 */
  wrongLines: string[];
}

export const EIZOUKEN_CHARACTERS: Record<CharacterId, EizoukenCharacter> = {
  asagusa: {
    id: "asagusa",
    name: "浅草みどり",
    imagePath: "/characters/asakusa-midori.png",
    color: "#4caf50",
    bgColor: "rgba(76,175,80,0.15)",
    initial: "浅",
    lectureLines: [
      "理想の簿記の世界では……すべての取引が完璧に記録されてるんだ！まずはこの概念の本質を掴もう！",
      "わーすごい！簿記って実は壮大なストーリーなんだよ！お金の流れを「映像」として思い描いて学んでみて！",
      "この章、めちゃくちゃ面白い分野なんだよ！現実のビジネスがどう動いてるか、一緒に「理想の映像」で描いてみよう！",
    ],
    correctLines: [
      "すごい！完璧じゃん！簿記の理想の世界に一歩近づいたね！",
      "正解！やっぱりそういうことなんだよ……！私の理想通りの答えだ！",
      "やったー！この調子で「簿記の世界」を完成させていこう！",
    ],
    wrongLines: [
      "うーん……惜しい！理想の世界ではそうじゃないんだよ。解説をよく読んでみて！",
      "あれ？ちょっと待って……解説を見れば、なんで違うか分かるはずだよ！",
      "ここが難しいんだよね。でも理解すれば景色が変わる！もう一度考えてみよう。",
    ],
  },
  mizusaki: {
    id: "mizusaki",
    name: "水崎ツバメ",
    imagePath: "/characters/mizusaki-tsubame.png",
    color: "#42a5f5",
    bgColor: "rgba(66,165,245,0.15)",
    initial: "水",
    lectureLines: [
      "この分野はすごく細かいところが大事なんです。一つひとつ丁寧に確認していきましょうね。",
      "簿記って「記録の芸術」みたいなものだと思うんです。正確に、美しく仕訳できるようになりましょう！",
      "難しそうに見えても、構造を掴めばスムーズに解けます。一緒に丁寧に見ていきましょう。",
    ],
    correctLines: [
      "正解です！丁寧に考えてくれたんですね。この積み重ねが実力になります！",
      "完璧！細かいところまでちゃんと理解できてますね。素晴らしいです！",
      "やった！この調子で次も丁寧に解いていきましょう！",
    ],
    wrongLines: [
      "惜しかったです。でも間違えた場所こそ、一番大切な学びポイントです。解説を読んでみてください。",
      "ここは多くの人が間違えやすい部分なんです。解説を一緒に確認しましょう。",
      "大丈夫です！間違えることで確実に力がつきます。解説をよく読んでみてください。",
    ],
  },
  kanamori: {
    id: "kanamori",
    name: "金森さやか",
    imagePath: "/characters/kanamori-sayaka.png",
    color: "#ff9800",
    bgColor: "rgba(255,152,0,0.15)",
    initial: "金",
    lectureLines: [
      "この章、ちゃんと理解しないと試験で点を落とす。それは損だ。しっかり読め。",
      "簿記の知識は金になる。この章をマスターすれば、実務でもすぐ使える。投資対効果は高い。",
      "これは重要単元だ。ここを押さえておけば関連問題がすべて楽になる。効率的に学べ。",
    ],
    correctLines: [
      "正解。合格への投資が実を結んでいる。この調子だ。",
      "当然だ。理解できてれば解ける問題だからな。次も確実に取れ。",
      "いい判断だ。こういう問題は確実に正解しないとダメだ。続けろ。",
    ],
    wrongLines: [
      "不正解。損失だ。でもここで立て直せばまだ間に合う。解説を読め。",
      "惜しい、じゃなくて不正解は不正解だ。解説を読んで原因を把握しろ。",
      "こういうところで落とすと試験で痛い目を見る。今のうちに潰しておけ。",
    ],
  },
};

/**
 * 章IDからキャラクターを決定する（3キャラクターをローテーション）
 * 例: g3-ch01 → 浅草, g3-ch02 → 水崎, g3-ch03 → 金森, g3-ch04 → 浅草...
 */
export function getCharacterForChapter(chapterId: string): EizoukenCharacter {
  const match = chapterId.match(/ch(\d+)/);
  const num = match ? parseInt(match[1], 10) : 1;
  const order: CharacterId[] = ["asagusa", "mizusaki", "kanamori"];
  return EIZOUKEN_CHARACTERS[order[(num - 1) % 3]];
}

/** lectureLines / correctLines / wrongLines からランダムに1つ選ぶ */
export function pickLine(lines: string[]): string {
  return lines[Math.floor(Math.random() * lines.length)];
}
