import type { Character } from "@/types/character";

export const roboKen: Character = {
  id: "robo-ken",
  name: "robo-ken",
  displayName: "ロボ研さん",
  imagePath: "/characters/robo-ken.png",
  themeColor: "#6b7280",
  correctLines: [
    "正解率100%、達成である！",
    "演算結果、正解と判定",
    "素晴らしい論理展開である",
    "データ的に完璧である",
    "精度99.9%、お見事",
    "アルゴリズム、適切に作動",
    "計算精度、高評価である",
    "論理回路、正常稼働中",
    "思考プロセス、最適化済み",
    "結論、賞賛に値する",
  ],
  incorrectLines: [
    "エラー検出、再計算を要する",
    "論理に矛盾があるようだ",
    "データ照合、不一致である",
    "再起動、推奨である",
    "演算プロセス、見直しが必要",
    "次回試行、頑張ろう",
    "バグ発生、デバッグ開始",
    "想定外の結果、興味深い",
    "学習データ、追加が必要",
    "リトライ推奨、心配無用",
  ],
};
