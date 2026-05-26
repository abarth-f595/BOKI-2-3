import type { CalculatorProblem } from "../calculator";

export const grade3TbProblems: CalculatorProblem[] = [
  {
    id: "g3-tb-01",
    title: "残高試算表①（起業・3取引）",
    level: "3級",
    type: "残高試算表",
    description: "個人商店を開業した月の取引から仕訳を行い、月末の残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金500,000円を元入れして営業を開始した。",
        answer: [{ debit: "現金", debitAmount: 500000, credit: "資本金", creditAmount: 500000 }]
      },
      {
        id: "t2",
        date: "4月5日",
        text: "商品200,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 200000, credit: "買掛金", creditAmount: 200000 }]
      },
      {
        id: "t3",
        date: "4月10日",
        text: "商品350,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 350000, credit: "売上", creditAmount: 350000 }]
      }
    ],
    expectedAnswers: {
      "現金":   { debit: 850000 },
      "仕入":   { debit: 200000 },
      "買掛金": { credit: 200000 },
      "売上":   { credit: 350000 },
      "資本金": { credit: 500000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "すべての取引を仕訳する",
        description: "3件の取引をそれぞれ仕訳します。①現金↑/資本金↑ ②仕入↑/買掛金↑ ③現金↑/売上↑",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『現金』のT字勘定",
        description: "現金の借方：4/1に500,000・4/10に350,000 → 合計850,000。貸方：なし。残高は借方850,000円。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step3",
        title: "『買掛金』『売上』『資本金』のT字勘定",
        description: "買掛金：貸方200,000。売上：貸方350,000。資本金：貸方500,000。いずれも貸方残高。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "借方残高（現金・仕入）は試算表の借方欄へ、貸方残高（買掛金・売上・資本金）は貸方欄へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：850,000＋200,000＝1,050,000円。貸方合計：200,000＋350,000＋500,000＝1,050,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-tb-02",
    title: "残高試算表②（売掛金・給料を含む）",
    level: "3級",
    type: "残高試算表",
    description: "売掛取引と給料の支払を含む5件の取引から月末の残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金800,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 800000, credit: "資本金", creditAmount: 800000 }]
      },
      {
        id: "t2",
        date: "4月8日",
        text: "商品300,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 300000, credit: "買掛金", creditAmount: 300000 }]
      },
      {
        id: "t3",
        date: "4月15日",
        text: "商品300,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 300000, credit: "売上", creditAmount: 300000 }]
      },
      {
        id: "t4",
        date: "4月18日",
        text: "商品200,000円を売り上げ、代金は掛けとした。",
        answer: [{ debit: "売掛金", debitAmount: 200000, credit: "売上", creditAmount: 200000 }]
      },
      {
        id: "t5",
        date: "4月28日",
        text: "従業員の給料200,000円を現金で支払った。",
        answer: [{ debit: "給料", debitAmount: 200000, credit: "現金", creditAmount: 200000 }]
      }
    ],
    expectedAnswers: {
      "現金":   { debit: 900000 },
      "売掛金": { debit: 200000 },
      "仕入":   { debit: 300000 },
      "給料":   { debit: 200000 },
      "買掛金": { credit: 300000 },
      "売上":   { credit: 500000 },
      "資本金": { credit: 800000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "5件の取引を仕訳する",
        description: "売掛金が生じる取引と給料の支払に注意しながら5件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『現金』のT字勘定",
        description: "借方：4/1に800,000・4/15に300,000＝1,100,000。貸方：4/28に200,000。残高：借方900,000円。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step3",
        title: "『売上』のT字勘定",
        description: "売上の貸方：4/15に300,000・4/18に200,000＝500,000円。借方：なし。残高：貸方500,000円。",
        action: "t-account",
        targetAccount: "売上"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "各勘定の残高を試算表に転記します。借方残高：現金・売掛金・仕入・給料。貸方残高：買掛金・売上・資本金。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：900,000＋200,000＋300,000＋200,000＝1,600,000円。貸方合計：300,000＋500,000＋800,000＝1,600,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-tb-03",
    title: "残高試算表③（前期繰越残高あり）",
    level: "3級",
    type: "残高試算表",
    description: "前期繰越残高（開始残高）がある状態で5月の取引を行い、月末の残高試算表を作成してください。",
    initialBalances: {
      "現金":     500000,
      "繰越商品": 50000,
      "買掛金":   150000,
      "資本金":   400000
    },
    transactions: [
      {
        id: "t1",
        date: "5月3日",
        text: "商品400,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 400000, credit: "買掛金", creditAmount: 400000 }]
      },
      {
        id: "t2",
        date: "5月10日",
        text: "商品600,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 600000, credit: "売上", creditAmount: 600000 }]
      },
      {
        id: "t3",
        date: "5月20日",
        text: "事務所の家賃100,000円を現金で支払った。",
        answer: [{ debit: "支払家賃", debitAmount: 100000, credit: "現金", creditAmount: 100000 }]
      },
      {
        id: "t4",
        date: "5月25日",
        text: "買掛金のうち200,000円を現金で支払った。",
        answer: [{ debit: "買掛金", debitAmount: 200000, credit: "現金", creditAmount: 200000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 800000 },
      "繰越商品": { debit: 50000 },
      "仕入":     { debit: 400000 },
      "支払家賃": { debit: 100000 },
      "買掛金":   { credit: 350000 },
      "売上":     { credit: 600000 },
      "資本金":   { credit: 400000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "前期繰越残高を確認する",
        description: "期首残高として現金500,000・繰越商品50,000（借方）、買掛金150,000・資本金400,000（貸方）があります。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "当月の4件を仕訳する",
        description: "①仕入/買掛金 ②現金/売上 ③支払家賃/現金 ④買掛金/現金 の4件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『現金』のT字勘定（期首残高含む）",
        description: "借方：期首500,000＋5/10に600,000＝1,100,000。貸方：5/20に100,000＋5/25に200,000＝300,000。残高：借方800,000円。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step4",
        title: "『買掛金』のT字勘定（期首残高含む）",
        description: "貸方：期首150,000＋5/3に400,000＝550,000。借方：5/25に200,000。残高：貸方350,000円。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step5",
        title: "残高試算表への転記と確認",
        description: "借方合計：800,000＋50,000＋400,000＋100,000＝1,350,000円。貸方合計：350,000＋600,000＋400,000＝1,350,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-tb-04",
    title: "残高試算表④（当座預金・売掛金回収）",
    level: "3級",
    type: "残高試算表",
    description: "当座預金口座への預け入れと売掛金回収を含む5件の取引から残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金1,000,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 1000000, credit: "資本金", creditAmount: 1000000 }]
      },
      {
        id: "t2",
        date: "4月2日",
        text: "当座預金口座を開設し、現金600,000円を預け入れた。",
        answer: [{ debit: "当座預金", debitAmount: 600000, credit: "現金", creditAmount: 600000 }]
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
        text: "商品500,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 500000, credit: "売上", creditAmount: 500000 }]
      },
      {
        id: "t5",
        date: "4月22日",
        text: "売掛金400,000円が当座預金口座に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 400000, credit: "売掛金", creditAmount: 400000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 400000 },
      "当座預金": { debit: 1000000 },
      "売掛金":   { debit: 100000 },
      "仕入":     { debit: 400000 },
      "買掛金":   { credit: 400000 },
      "売上":     { credit: 500000 },
      "資本金":   { credit: 1000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "5件の取引を仕訳する",
        description: "当座預金への預け入れは「当座預金↑/現金↓」、売掛金の回収は「当座預金↑/売掛金↓」と仕訳します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『当座預金』のT字勘定",
        description: "借方：4/2に600,000＋4/22に400,000＝1,000,000。貸方：なし。残高：借方1,000,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step3",
        title: "『売掛金』のT字勘定",
        description: "借方：4/15に500,000。貸方：4/22に400,000（回収）。残高：借方100,000円。",
        action: "t-account",
        targetAccount: "売掛金"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "現金400,000・当座預金1,000,000・売掛金100,000・仕入400,000を借方へ、買掛金400,000・売上500,000・資本金1,000,000を貸方へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：400,000＋1,000,000＋100,000＋400,000＝1,900,000円。貸方合計：400,000＋500,000＋1,000,000＝1,900,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-tb-05",
    title: "残高試算表⑤（前期繰越・建物・借入金）",
    level: "3級",
    type: "残高試算表",
    description: "建物と借入金を持つ商店の6月取引を仕訳し、月末の残高試算表を作成してください。",
    initialBalances: {
      "現金":     200000,
      "当座預金": 500000,
      "売掛金":   300000,
      "繰越商品": 150000,
      "建物":     1000000,
      "買掛金":   250000,
      "借入金":   500000,
      "資本金":   1400000
    },
    transactions: [
      {
        id: "t1",
        date: "6月5日",
        text: "商品300,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 300000, credit: "買掛金", creditAmount: 300000 }]
      },
      {
        id: "t2",
        date: "6月10日",
        text: "商品400,000円を売り上げ、代金は現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 400000, credit: "売上", creditAmount: 400000 }]
      },
      {
        id: "t3",
        date: "6月18日",
        text: "買掛金200,000円を当座預金から支払った。",
        answer: [{ debit: "買掛金", debitAmount: 200000, credit: "当座預金", creditAmount: 200000 }]
      },
      {
        id: "t4",
        date: "6月28日",
        text: "給料150,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 150000, credit: "当座預金", creditAmount: 150000 }]
      }
    ],
    expectedAnswers: {
      "現金":     { debit: 600000 },
      "当座預金": { debit: 150000 },
      "売掛金":   { debit: 300000 },
      "繰越商品": { debit: 150000 },
      "建物":     { debit: 1000000 },
      "仕入":     { debit: 300000 },
      "給料":     { debit: 150000 },
      "買掛金":   { credit: 350000 },
      "借入金":   { credit: 500000 },
      "売上":     { credit: 400000 },
      "資本金":   { credit: 1400000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "期首残高を試算表に書き写す",
        description: "建物1,000,000・売掛金300,000など期首残高を借方欄へ、借入金500,000・資本金1,400,000などを貸方欄へ書き写します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "6月の4件を仕訳する",
        description: "仕入/買掛金・現金/売上・買掛金/当座預金・給料/当座預金 の4件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『買掛金』のT字勘定",
        description: "貸方：期首250,000＋6/5に300,000＝550,000。借方：6/18に200,000。残高：貸方350,000円。",
        action: "t-account",
        targetAccount: "買掛金"
      },
      {
        id: "step4",
        title: "『当座預金』のT字勘定",
        description: "借方：期首500,000。貸方：6/18に200,000＋6/28に150,000＝350,000。残高：借方150,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step5",
        title: "残高試算表完成・貸借確認",
        description: "借方合計：600,000＋150,000＋300,000＋150,000＋1,000,000＋300,000＋150,000＝2,650,000円。貸方合計：350,000＋500,000＋400,000＋1,400,000＝2,650,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g3-tb-06",
    title: "残高試算表⑥（手形・備品・借入金の総合問題）",
    level: "3級",
    type: "残高試算表",
    description: "受取手形・支払手形・備品購入・借入金など多様な勘定科目を含む取引から残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "現金2,000,000円を元入れして開業した。",
        answer: [{ debit: "現金", debitAmount: 2000000, credit: "資本金", creditAmount: 2000000 }]
      },
      {
        id: "t2",
        date: "4月2日",
        text: "銀行から500,000円を借り入れ、現金で受け取った。",
        answer: [{ debit: "現金", debitAmount: 500000, credit: "借入金", creditAmount: 500000 }]
      },
      {
        id: "t3",
        date: "4月3日",
        text: "当座預金口座に現金1,500,000円を預け入れた。",
        answer: [{ debit: "当座預金", debitAmount: 1500000, credit: "現金", creditAmount: 1500000 }]
      },
      {
        id: "t4",
        date: "4月5日",
        text: "備品1,000,000円を購入し、代金は当座預金から支払った。",
        answer: [{ debit: "備品", debitAmount: 1000000, credit: "当座預金", creditAmount: 1000000 }]
      },
      {
        id: "t5",
        date: "4月8日",
        text: "商品400,000円を仕入れ、代金は約束手形を振り出して支払った。",
        answer: [{ debit: "仕入", debitAmount: 400000, credit: "支払手形", creditAmount: 400000 }]
      },
      {
        id: "t6",
        date: "4月10日",
        text: "商品200,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 200000, credit: "買掛金", creditAmount: 200000 }]
      },
      {
        id: "t7",
        date: "4月15日",
        text: "商品150,000円を売り上げ、代金として約束手形を受け取った。",
        answer: [{ debit: "受取手形", debitAmount: 150000, credit: "売上", creditAmount: 150000 }]
      },
      {
        id: "t8",
        date: "4月18日",
        text: "商品650,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 650000, credit: "売上", creditAmount: 650000 }]
      },
      {
        id: "t9",
        date: "4月25日",
        text: "給料300,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 300000, credit: "当座預金", creditAmount: 300000 }]
      },
      {
        id: "t10",
        date: "4月28日",
        text: "出張旅費50,000円を現金で支払った。",
        answer: [{ debit: "旅費交通費", debitAmount: 50000, credit: "現金", creditAmount: 50000 }]
      }
    ],
    expectedAnswers: {
      "現金":       { debit: 950000 },
      "当座預金":   { debit: 200000 },
      "受取手形":   { debit: 150000 },
      "売掛金":     { debit: 650000 },
      "備品":       { debit: 1000000 },
      "仕入":       { debit: 600000 },
      "給料":       { debit: 300000 },
      "旅費交通費": { debit: 50000 },
      "支払手形":   { credit: 400000 },
      "買掛金":     { credit: 200000 },
      "借入金":     { credit: 500000 },
      "売上":       { credit: 800000 },
      "資本金":     { credit: 2000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "10件の取引を仕訳する",
        description: "手形の取引：商品を売って手形を受け取ると「受取手形↑/売上↑」、振り出すと「仕入↑/支払手形↑」となります。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "『現金』のT字勘定",
        description: "借方：4/1に2,000,000・4/2に500,000＝2,500,000。貸方：4/3に1,500,000・4/28に50,000＝1,550,000。残高：借方950,000円。",
        action: "t-account",
        targetAccount: "現金"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定",
        description: "借方：4/3に1,500,000。貸方：4/5に1,000,000・4/25に300,000＝1,300,000。残高：借方200,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "借方残高8科目（現金・当座預金・受取手形・売掛金・備品・仕入・給料・旅費交通費）と貸方残高5科目（支払手形・買掛金・借入金・売上・資本金）を記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：950,000＋200,000＋150,000＋650,000＋1,000,000＋600,000＋300,000＋50,000＝3,900,000円。貸方合計：400,000＋200,000＋500,000＋800,000＋2,000,000＝3,900,000円。一致！",
        action: "check"
      }
    ]
  }
];
