import type { CalculatorProblem } from "../calculator";

export const grade3CtProblems: CalculatorProblem[] = [
  {
    id: "g3-ct-01",
    title: "合計試算表①（基本・両側合計）",
    level: "3級",
    type: "合計試算表",
    description: "4件の取引から仕訳を行い、各勘定の借方合計・貸方合計を集計して合計試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金600,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 600000, credit: "資本金", creditAmount: 600000 }]
      },
      {
        id: "t2",
        date: "4月6日",
        text: "商品250,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 250000, credit: "買掛金", creditAmount: 250000 }]
      },
      {
        id: "t3",
        date: "4月12日",
        text: "商品400,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 400000, credit: "売上", creditAmount: 400000 }]
      },
      {
        id: "t4",
        date: "4月28日",
        text: "給料150,000円を現金で支払った。",
        answer: [{ debit: "給料", debitAmount: 150000, credit: "現金", creditAmount: 150000 }]
      }
    ],
    expectedAnswers: {
      "現金":   { debit: 1000000, credit: 150000 },
      "仕入":   { debit: 250000 },
      "給料":   { debit: 150000 },
      "買掛金": { credit: 250000 },
      "売上":   { credit: 400000 },
      "資本金": { credit: 600000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "4件の取引を仕訳する",
        description: "仕訳を完成させます。現金は借方にも貸方にも登場することに注意しましょう。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "合計試算表の特徴を確認する",
        description: "残高試算表が「純残高」を記入するのに対し、合計試算表は「借方の合計金額」と「貸方の合計金額」の両方を記入します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『現金』のT字勘定（両側を集計）",
        description: "現金の借方：4/1に600,000＋4/12に400,000＝1,000,000。貸方：4/28に150,000。合計試算表には両方の金額を記入します。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step4",
        title: "残り5科目を集計して転記",
        description: "仕入250,000（借方のみ）・給料150,000（借方）・買掛金250,000（貸方）・売上400,000（貸方）・資本金600,000（貸方）を合計試算表へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：1,000,000＋250,000＋150,000＝1,400,000円。貸方合計：150,000＋250,000＋400,000＋600,000＝1,400,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-ct-02",
    title: "合計試算表②（買掛金の一部返済）",
    level: "3級",
    type: "合計試算表",
    description: "売掛金の発生や買掛金の一部返済を含む5件の取引から合計試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金1,000,000円を元入れして開業した。",
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
        text: "商品500,000円を現金で売り上げた。",
        answer: [{ debit: "現金", debitAmount: 500000, credit: "売上", creditAmount: 500000 }]
      },
      {
        id: "t4",
        date: "4月15日",
        text: "商品200,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 200000, credit: "売上", creditAmount: 200000 }]
      },
      {
        id: "t5",
        date: "4月25日",
        text: "買掛金のうち100,000円を現金で支払った。",
        answer: [{ debit: "買掛金", debitAmount: 100000, credit: "現金", creditAmount: 100000 }]
      }
    ],
    expectedAnswers: {
      "現金":   { debit: 1500000, credit: 100000 },
      "売掛金": { debit: 200000 },
      "仕入":   { debit: 300000 },
      "買掛金": { debit: 100000, credit: 300000 },
      "売上":   { credit: 700000 },
      "資本金": { credit: 1000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "5件の取引を仕訳する",
        description: "買掛金の返済（買掛金↓/現金↓）では買掛金が借方に来ることに注意します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『現金』のT字勘定",
        description: "借方：4/1に1,000,000＋4/10に500,000＝1,500,000。貸方：4/25に100,000。合計試算表には「借方1,500,000・貸方100,000」と記入。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step3",
        title: "『買掛金』のT字勘定",
        description: "貸方：4/5に300,000（発生）。借方：4/25に100,000（返済）。合計試算表には「借方100,000・貸方300,000」と記入。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step4",
        title: "残り4科目を集計して転記",
        description: "売掛金200,000（借方）・仕入300,000（借方）・売上700,000（貸方）・資本金1,000,000（貸方）を合計試算表へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：1,500,000＋200,000＋300,000＋100,000＝2,100,000円。貸方合計：100,000＋300,000＋700,000＋1,000,000＝2,100,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-ct-03",
    title: "合計試算表③（前期繰越残高あり）",
    level: "3級",
    type: "合計試算表",
    description: "期首残高がある商店の5月の取引から合計試算表を作成してください。期首残高も合計に含めます。",
    initialBalances: {
      "現金":   400000,
      "売掛金": 200000,
      "買掛金": 100000,
      "資本金": 500000
    },
    transactions: [
      {
        id: "t1",
        date: "5月3日",
        text: "商品300,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 300000, credit: "買掛金", creditAmount: 300000 }]
      },
      {
        id: "t2",
        date: "5月10日",
        text: "商品500,000円を現金で売り上げた。",
        answer: [{ debit: "現金", debitAmount: 500000, credit: "売上", creditAmount: 500000 }]
      },
      {
        id: "t3",
        date: "5月15日",
        text: "商品200,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 200000, credit: "売上", creditAmount: 200000 }]
      },
      {
        id: "t4",
        date: "5月20日",
        text: "売掛金200,000円を現金で回収した。",
        answer: [{ debit: "現金", debitAmount: 200000, credit: "売掛金", creditAmount: 200000 }]
      },
      {
        id: "t5",
        date: "5月25日",
        text: "買掛金150,000円を現金で支払った。",
        answer: [{ debit: "買掛金", debitAmount: 150000, credit: "現金", creditAmount: 150000 }]
      }
    ],
    expectedAnswers: {
      "現金":   { debit: 1100000, credit: 150000 },
      "売掛金": { debit: 400000,  credit: 200000 },
      "仕入":   { debit: 300000 },
      "買掛金": { debit: 150000,  credit: 400000 },
      "売上":   { credit: 700000 },
      "資本金": { credit: 500000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "期首残高を確認する",
        description: "合計試算表では期首残高（開始仕訳）も集計に含めます。現金400,000・売掛金200,000が借方期首、買掛金100,000・資本金500,000が貸方期首です。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "5月の5件を仕訳する",
        description: "仕入/買掛金・現金/売上・売掛金/売上・現金/売掛金・買掛金/現金 の5件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『現金』のT字勘定（期首残高含む）",
        description: "借方：期首400,000＋5/10に500,000＋5/20に200,000＝1,100,000。貸方：5/25に150,000。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step4",
        title: "『買掛金』のT字勘定（期首残高含む）",
        description: "貸方：期首100,000＋5/3に300,000＝400,000。借方：5/25に150,000。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：1,100,000＋400,000＋300,000＋150,000＝1,950,000円。貸方合計：150,000＋200,000＋400,000＋700,000＋500,000＝1,950,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-ct-04",
    title: "合計試算表④（当座預金・売掛金回収）",
    level: "3級",
    type: "合計試算表",
    description: "当座預金口座の開設・売掛金の回収・給料支払を含む6件の取引から合計試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金1,200,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 1200000, credit: "資本金", creditAmount: 1200000 }]
      },
      {
        id: "t2",
        date: "4月2日",
        text: "当座預金口座を開設し、現金800,000円を預け入れた。",
        answer: [{ debit: "当座預金", debitAmount: 800000, credit: "現金", creditAmount: 800000 }]
      },
      {
        id: "t3",
        date: "4月8日",
        text: "商品400,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 400000, credit: "買掛金", creditAmount: 400000 }]
      },
      {
        id: "t4",
        date: "4月15日",
        text: "商品600,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 600000, credit: "売上", creditAmount: 600000 }]
      },
      {
        id: "t5",
        date: "4月20日",
        text: "売掛金600,000円が当座預金口座に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 600000, credit: "売掛金", creditAmount: 600000 }]
      },
      {
        id: "t6",
        date: "4月28日",
        text: "給料200,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 200000, credit: "当座預金", creditAmount: 200000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 1200000, credit: 800000 },
      "当座預金": { debit: 1400000, credit: 200000 },
      "売掛金":   { debit: 600000,  credit: 600000 },
      "仕入":     { debit: 400000 },
      "給料":     { debit: 200000 },
      "買掛金":   { credit: 400000 },
      "売上":     { credit: 600000 },
      "資本金":   { credit: 1200000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "6件の取引を仕訳する",
        description: "売掛金の回収（当座預金↑/売掛金↓）では売掛金が貸方に来ます。合計試算表では借方・貸方の両方を記録します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『売掛金』のT字勘定",
        description: "借方：4/15に600,000（発生）。貸方：4/20に600,000（回収）。合計試算表には「借方600,000・貸方600,000」の両方を記入します（残高0）。",
        action: "t-account",
        targetAccount: "売掛金"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定",
        description: "借方：4/2に800,000＋4/20に600,000＝1,400,000。貸方：4/28に200,000。合計試算表には「借方1,400,000・貸方200,000」を記入。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "残り6科目を転記",
        description: "現金（借方1,200,000・貸方800,000）・仕入400,000・給料200,000・買掛金400,000・売上600,000・資本金1,200,000 を記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：1,200,000＋1,400,000＋600,000＋400,000＋200,000＝3,800,000円。貸方合計：800,000＋200,000＋600,000＋400,000＋600,000＋1,200,000＝3,800,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-ct-05",
    title: "合計試算表⑤（前期繰越・借入金・支払利息）",
    level: "3級",
    type: "合計試算表",
    description: "借入金と利息の支払を含む期中取引から合計試算表を作成してください。",
    initialBalances: {
      "現金":     300000,
      "当座預金": 400000,
      "繰越商品": 80000,
      "買掛金":   200000,
      "借入金":   200000,
      "資本金":   380000
    },
    transactions: [
      {
        id: "t1",
        date: "6月5日",
        text: "商品350,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 350000, credit: "買掛金", creditAmount: 350000 }]
      },
      {
        id: "t2",
        date: "6月10日",
        text: "商品400,000円を現金で売り上げた。",
        answer: [{ debit: "現金", debitAmount: 400000, credit: "売上", creditAmount: 400000 }]
      },
      {
        id: "t3",
        date: "6月15日",
        text: "商品300,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 300000, credit: "売上", creditAmount: 300000 }]
      },
      {
        id: "t4",
        date: "6月20日",
        text: "買掛金200,000円を当座預金から支払った。",
        answer: [{ debit: "買掛金", debitAmount: 200000, credit: "当座預金", creditAmount: 200000 }]
      },
      {
        id: "t5",
        date: "6月28日",
        text: "借入金の利息10,000円を現金で支払った。",
        answer: [{ debit: "支払利息", debitAmount: 10000, credit: "現金", creditAmount: 10000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 700000,  credit: 10000 },
      "当座預金": { debit: 400000,  credit: 200000 },
      "繰越商品": { debit: 80000 },
      "売掛金":   { debit: 300000 },
      "仕入":     { debit: 350000 },
      "支払利息": { debit: 10000 },
      "買掛金":   { debit: 200000,  credit: 550000 },
      "借入金":   { credit: 200000 },
      "売上":     { credit: 700000 },
      "資本金":   { credit: 380000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "期首残高と当月取引を確認する",
        description: "期首残高（借方：現金300,000・当座預金400,000・繰越商品80,000、貸方：買掛金200,000・借入金200,000・資本金380,000）を合計試算表の初期値とします。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "5件を仕訳する",
        description: "仕入/買掛金・現金/売上・売掛金/売上・買掛金/当座預金・支払利息/現金 の5件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『買掛金』のT字勘定（期首残高含む）",
        description: "貸方：期首200,000＋6/5に350,000＝550,000。借方：6/20に200,000（支払）。合計試算表に「借方200,000・貸方550,000」を記入。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step4",
        title: "残り科目を転記する",
        description: "現金（借方700,000・貸方10,000）・当座預金（借方400,000・貸方200,000）・その他を合計試算表へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：700,000＋400,000＋80,000＋300,000＋350,000＋10,000＋200,000＝2,040,000円。貸方合計：10,000＋200,000＋550,000＋200,000＋700,000＋380,000＝2,040,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-ct-06",
    title: "合計試算表⑥（手形・備品の総合問題）",
    level: "3級",
    type: "合計試算表",
    description: "受取手形・支払手形・備品購入・手形の決済を含む10件の取引から合計試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金1,500,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 1500000, credit: "資本金", creditAmount: 1500000 }]
      },
      {
        id: "t2",
        date: "4月2日",
        text: "当座預金口座を開設し、現金1,000,000円を預け入れた。",
        answer: [{ debit: "当座預金", debitAmount: 1000000, credit: "現金", creditAmount: 1000000 }]
      },
      {
        id: "t3",
        date: "4月5日",
        text: "備品600,000円を購入し、代金は当座預金から支払った。",
        answer: [{ debit: "備品", debitAmount: 600000, credit: "当座預金", creditAmount: 600000 }]
      },
      {
        id: "t4",
        date: "4月8日",
        text: "商品400,000円を仕入れ、代金として約束手形を振り出した。",
        answer: [{ debit: "仕入", debitAmount: 400000, credit: "支払手形", creditAmount: 400000 }]
      },
      {
        id: "t5",
        date: "4月10日",
        text: "商品200,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 200000, credit: "買掛金", creditAmount: 200000 }]
      },
      {
        id: "t6",
        date: "4月15日",
        text: "商品300,000円を売り上げ、代金として約束手形を受け取った。",
        answer: [{ debit: "受取手形", debitAmount: 300000, credit: "売上", creditAmount: 300000 }]
      },
      {
        id: "t7",
        date: "4月18日",
        text: "商品500,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 500000, credit: "売上", creditAmount: 500000 }]
      },
      {
        id: "t8",
        date: "4月20日",
        text: "売掛金300,000円を現金で回収した。",
        answer: [{ debit: "現金", debitAmount: 300000, credit: "売掛金", creditAmount: 300000 }]
      },
      {
        id: "t9",
        date: "4月22日",
        text: "支払手形200,000円が当座預金から引き落とされた（決済）。",
        answer: [{ debit: "支払手形", debitAmount: 200000, credit: "当座預金", creditAmount: 200000 }]
      },
      {
        id: "t10",
        date: "4月28日",
        text: "給料250,000円を現金で支払った。",
        answer: [{ debit: "給料", debitAmount: 250000, credit: "現金", creditAmount: 250000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 1800000, credit: 1250000 },
      "当座預金": { debit: 1000000, credit: 800000 },
      "受取手形": { debit: 300000 },
      "売掛金":   { debit: 500000,  credit: 300000 },
      "備品":     { debit: 600000 },
      "仕入":     { debit: 600000 },
      "給料":     { debit: 250000 },
      "支払手形": { debit: 200000,  credit: 400000 },
      "買掛金":   { credit: 200000 },
      "売上":     { credit: 800000 },
      "資本金":   { credit: 1500000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "10件の取引を仕訳する",
        description: "手形の決済（支払手形↓/当座預金↓）は支払手形が借方に来ます。合計試算表では「決済前に発生した400,000」と「決済した200,000」が両方記録されます。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『支払手形』のT字勘定",
        description: "貸方：4/8に400,000（振り出し）。借方：4/22に200,000（決済）。合計試算表に「借方200,000・貸方400,000」と記入。残高は200,000円（貸方）。",
        action: "t-account",
        targetAccount: "支払手形"
      },
      {
        id: "step3",
        title: "『現金』のT字勘定",
        description: "借方：4/1に1,500,000＋4/20に300,000＝1,800,000。貸方：4/2に1,000,000＋4/28に250,000＝1,250,000。合計試算表に両方記入。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step4",
        title: "残り9科目を転記",
        description: "当座預金・受取手形・売掛金・備品・仕入・給料・買掛金・売上・資本金を各T字勘定から集計して合計試算表へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "借方合計・貸方合計の一致確認",
        description: "借方合計：1,800,000＋1,000,000＋300,000＋500,000＋600,000＋600,000＋250,000＋200,000＝5,250,000円。貸方合計：1,250,000＋800,000＋300,000＋400,000＋200,000＋800,000＋1,500,000＝5,250,000円。一致！",
        action: "check"
      }
    ]
  }
];
