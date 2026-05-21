import { Quiz } from "@/types";

export type Difficulty = "easy" | "normal" | "hard" | "oni";

/** 問題テキストから難易度を自動判定 */
export function getQuizDifficulty(q: Quiz): Difficulty {
  const text = q.question;

  // 【応用】prefix → 鬼
  if (text.startsWith("【応用】")) return "oni";

  // truefalse 型 → やさしい
  if (q.type === "truefalse") return "easy";

  // 数値計算を要求する問い → むずかしい
  const calcPattern = /いくらか[。？]?$|何円か|金額は|合計は|差額は|計算/;
  if (calcPattern.test(text)) return "hard";

  // 短い定義確認問題 → やさしい
  if (text.length <= 32) return "easy";

  // 長い複合問題 → むずかしい
  if (text.length > 70) return "hard";

  return "normal";
}

export interface DifficultyConfig {
  label: string;
  short: string;
  desc: string;
  emoji: string;
  bg: string;
  border: string;
  text: string;
  target: number;
}

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  easy: {
    label: "やさしい",
    short: "easy",
    desc: "基本知識・用語の確認。初めての方や最初の復習に。",
    emoji: "😊",
    bg: "bg-emerald-900/30",
    border: "border-emerald-600",
    text: "text-emerald-300",
    target: 100,
  },
  normal: {
    label: "ふつう",
    short: "normal",
    desc: "標準的な仕訳・処理の問題。本試験の基本レベル。",
    emoji: "📝",
    bg: "bg-blue-900/30",
    border: "border-blue-600",
    text: "text-blue-300",
    target: 100,
  },
  hard: {
    label: "むずかしい",
    short: "hard",
    desc: "計算問題・複合処理。しっかり考える力が必要。",
    emoji: "🔥",
    bg: "bg-amber-900/30",
    border: "border-amber-600",
    text: "text-amber-300",
    target: 100,
  },
  oni: {
    label: "鬼",
    short: "oni",
    desc: "応用問題・複数知識の統合。本番試験を超えたレベル。",
    emoji: "👹",
    bg: "bg-red-900/30",
    border: "border-red-600",
    text: "text-red-300",
    target: 100,
  },
};
