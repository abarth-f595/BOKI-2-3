export type CalcStep = {
  id: string;
  title: string;
  description: string;
  action: "journalize" | "t-account" | "transfer" | "check";
  targetAccount?: string;
};

export type CalculatorProblem = {
  id: string;
  title: string;
  level: "3級" | "2級";
  type: "残高試算表" | "合計試算表" | "精算表" | "財務諸表" | "決算整理";
  description: string;
  transactions: {
    id: string;
    date: string;
    text: string;
    answer: { debit: string; debitAmount: number; credit: string; creditAmount: number }[];
  }[];
  initialBalances?: Record<string, number>;
  expectedAnswers: Record<string, { debit?: number; credit?: number }>;
  explanationSteps: CalcStep[];
};

export const calculatorProblems: CalculatorProblem[] = [
  {
    id: "trial-balance-01",
    title: "残高試算表の作成（基礎）",
    level: "3級",
    type: "残高試算表",
    description: "期中の取引から仕訳を行い、月末の残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金1,000,000円を元入れして営業を開始した。",
        answer: [{ debit: "現金", debitAmount: 1000000, credit: "資本金", creditAmount: 1000000 }]
      },
      {
        id: "t2",
        date: "4月5日",
        text: "商品300,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 300000, credit: "買掛金", creditAmount: 300000 }]
      },
      {
        id: "t3",
        date: "4月10日",
        text: "商品500,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 500000, credit: "売上", creditAmount: 500000 }]
      }
    ],
    expectedAnswers: {
      "現金": { debit: 1500000 },
      "仕入": { debit: 300000 },
      "買掛金": { credit: 300000 },
      "売上": { credit: 500000 },
      "資本金": { credit: 1000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "すべての取引を仕訳する",
        description: "まずは問題文のすべての取引を仕訳に変換します。取引が正しく仕訳できているか確認しましょう。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『現金』の集計（T字勘定）",
        description: "仕訳の中から『現金』を探して集計します。4/1の借方に1,000,000円、4/10の借方に500,000円あります。合計は1,500,000円です。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step3",
        title: "試算表への転記",
        description: "集計した各勘定科目の残高を試算表に転記します。現金は借方残高なので左側に記入します。",
        action: "transfer"
      },
      {
        id: "step4",
        title: "貸借の合計の一致確認",
        description: "最後に、試算表の借方合計と貸方合計を計算し、一致するか確認します。一致していれば完成です！",
        action: "check"
      }
    ]
  }
];
