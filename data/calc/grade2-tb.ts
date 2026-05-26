import type { CalculatorProblem } from "../calculator";

export const grade2TbProblems: CalculatorProblem[] = [
  {
    id: "g2-tb-01",
    title: "残高試算表①（株式会社設立・資本準備金）",
    level: "2級",
    type: "残高試算表",
    description: "株式会社を設立し当月の取引から残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "株式10,000株を1株@300円で発行し、払込金3,000,000円が当座預金に振り込まれた。払込金の2分の1を資本準備金に組み入れた。",
        answer: [
          { debit: "当座預金", debitAmount: 1500000, credit: "資本金", creditAmount: 1500000 },
          { debit: "当座預金", debitAmount: 1500000, credit: "資本準備金", creditAmount: 1500000 }
        ]
      },
      {
        id: "t2",
        date: "4月5日",
        text: "商品400,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 400000, credit: "買掛金", creditAmount: 400000 }]
      },
      {
        id: "t3",
        date: "4月12日",
        text: "商品800,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 800000, credit: "売上", creditAmount: 800000 }]
      },
      {
        id: "t4",
        date: "4月20日",
        text: "売掛金600,000円が当座預金に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 600000, credit: "売掛金", creditAmount: 600000 }]
      },
      {
        id: "t5",
        date: "4月28日",
        text: "従業員の給料300,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 300000, credit: "当座預金", creditAmount: 300000 }]
      }
    ],
    expectedAnswers: {
      "当座預金":   { debit: 3300000 },
      "売掛金":     { debit: 200000 },
      "仕入":       { debit: 400000 },
      "給料":       { debit: 300000 },
      "買掛金":     { credit: 400000 },
      "売上":       { credit: 800000 },
      "資本金":     { credit: 1500000 },
      "資本準備金": { credit: 1500000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "株式発行の仕訳（資本金と資本準備金）",
        description: "払込金額のうち会社法の規定により2分の1以上を資本金とし、残りを資本準備金へ組み入れることができます。「当座預金3,000,000/資本金1,500,000・資本準備金1,500,000」",
        action: "journalize"
      },
      {
        id: "step2",
        title: "残り4件を仕訳する",
        description: "仕入/買掛金・売掛金/売上・当座預金/売掛金・給料/当座預金 の4件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定",
        description: "借方：4/1に3,000,000・4/20に600,000＝3,600,000。貸方：4/28に300,000。残高：借方3,300,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "借方残高4科目（当座預金・売掛金・仕入・給料）と貸方残高4科目（買掛金・売上・資本金・資本準備金）を記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：3,300,000＋200,000＋400,000＋300,000＝4,200,000円。貸方合計：400,000＋800,000＋1,500,000＋1,500,000＝4,200,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g2-tb-02",
    title: "残高試算表②（売買目的有価証券・売却益）",
    level: "2級",
    type: "残高試算表",
    description: "売買目的有価証券の購入・売却を含む6件の取引から残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "株式2,000,000円を出資し、当座預金に払い込み会社を設立した。",
        answer: [{ debit: "当座預金", debitAmount: 2000000, credit: "資本金", creditAmount: 2000000 }]
      },
      {
        id: "t2",
        date: "4月10日",
        text: "売買目的で株式600,000円を購入し、代金は当座預金から支払った。",
        answer: [{ debit: "売買目的有価証券", debitAmount: 600000, credit: "当座預金", creditAmount: 600000 }]
      },
      {
        id: "t3",
        date: "4月15日",
        text: "商品350,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 350000, credit: "買掛金", creditAmount: 350000 }]
      },
      {
        id: "t4",
        date: "4月18日",
        text: "商品700,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 700000, credit: "売上", creditAmount: 700000 }]
      },
      {
        id: "t5",
        date: "4月22日",
        text: "売買目的有価証券（帳簿価額250,000円）を300,000円で売却し、代金は当座預金に入金された。",
        answer: [
          { debit: "当座預金", debitAmount: 250000, credit: "売買目的有価証券", creditAmount: 250000 },
          { debit: "当座預金", debitAmount: 50000, credit: "有価証券売却益", creditAmount: 50000 }
        ]
      },
      {
        id: "t6",
        date: "4月28日",
        text: "給料200,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 200000, credit: "当座預金", creditAmount: 200000 }]
      }
    ],
    expectedAnswers: {
      "当座預金":           { debit: 1500000 },
      "売買目的有価証券":   { debit: 350000 },
      "売掛金":             { debit: 700000 },
      "仕入":               { debit: 350000 },
      "給料":               { debit: 200000 },
      "買掛金":             { credit: 350000 },
      "売上":               { credit: 700000 },
      "有価証券売却益":     { credit: 50000 },
      "資本金":             { credit: 2000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "売買目的有価証券の仕訳",
        description: "購入時：「売買目的有価証券/当座預金」。売却時（売却益あり）：「当座預金/売買目的有価証券（帳簿価額）＋有価証券売却益（差額）」。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "有価証券売却益の計算",
        description: "売却益＝売却価額300,000－帳簿価額250,000＝50,000円。帳簿価額と異なる金額で売れた場合は差額を有価証券売却益（貸方）または有価証券売却損（借方）で処理します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『売買目的有価証券』のT字勘定",
        description: "借方：4/10に600,000（購入）。貸方：4/22に250,000（売却・帳簿価額）。残高：借方350,000円（残り保有分）。",
        action: "t-account",
        targetAccount: "売買目的有価証券"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "当座預金（2,000,000-600,000+300,000-200,000）＝1,500,000円を含め9科目を転記します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：1,500,000＋350,000＋700,000＋350,000＋200,000＝3,100,000円。貸方合計：350,000＋700,000＋50,000＋2,000,000＝3,100,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g2-tb-03",
    title: "残高試算表③（社債発行・社債利息）",
    level: "2級",
    type: "残高試算表",
    description: "社債の発行と利息支払を含む7件の取引から残高試算表を作成してください。",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "株式2,000,000円を出資し、当座預金に払い込み会社を設立した。",
        answer: [{ debit: "当座預金", debitAmount: 2000000, credit: "資本金", creditAmount: 2000000 }]
      },
      {
        id: "t2",
        date: "4月1日",
        text: "社債1,000,000円を額面で発行し、払込金が当座預金に入金された。",
        answer: [{ debit: "当座預金", debitAmount: 1000000, credit: "社債", creditAmount: 1000000 }]
      },
      {
        id: "t3",
        date: "4月10日",
        text: "商品500,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 500000, credit: "買掛金", creditAmount: 500000 }]
      },
      {
        id: "t4",
        date: "4月15日",
        text: "商品900,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 900000, credit: "売上", creditAmount: 900000 }]
      },
      {
        id: "t5",
        date: "4月22日",
        text: "売掛金700,000円が当座預金に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 700000, credit: "売掛金", creditAmount: 700000 }]
      },
      {
        id: "t6",
        date: "4月28日",
        text: "給料300,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 300000, credit: "当座預金", creditAmount: 300000 }]
      },
      {
        id: "t7",
        date: "4月30日",
        text: "社債の利息25,000円を当座預金から支払った。",
        answer: [{ debit: "社債利息", debitAmount: 25000, credit: "当座預金", creditAmount: 25000 }]
      }
    ],
    expectedAnswers: {
      "当座預金": { debit: 3375000 },
      "売掛金":   { debit: 200000 },
      "仕入":     { debit: 500000 },
      "給料":     { debit: 300000 },
      "社債利息": { debit: 25000 },
      "買掛金":   { credit: 500000 },
      "売上":     { credit: 900000 },
      "社債":     { credit: 1000000 },
      "資本金":   { credit: 2000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "社債の仕訳",
        description: "社債発行：「当座預金/社債」。社債利息の支払：「社債利息/当座預金」。社債は固定負債、社債利息は営業外費用です。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "7件の取引をすべて仕訳する",
        description: "設立・社債発行・仕入・売上・売掛金回収・給料・社債利息の7件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定",
        description: "借方：4/1に2,000,000（設立）＋4/1に1,000,000（社債）＋4/22に700,000（回収）＝3,700,000。貸方：4/28に300,000＋4/30に25,000＝325,000。残高：3,375,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "借方残高5科目と貸方残高4科目（買掛金・売上・社債・資本金）を試算表へ記入します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：3,375,000＋200,000＋500,000＋300,000＋25,000＝4,400,000円。貸方合計：500,000＋900,000＋1,000,000＋2,000,000＝4,400,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g2-tb-04",
    title: "残高試算表④（消費税の税抜き処理）",
    level: "2級",
    type: "残高試算表",
    description: "税抜き方式で消費税を処理する5件の取引から残高試算表を作成してください。（消費税率10%）",
    transactions: [
      {
        id: "t1",
        date: "4月1日",
        text: "株式2,000,000円を出資し、当座預金に払い込み会社を設立した。",
        answer: [{ debit: "当座預金", debitAmount: 2000000, credit: "資本金", creditAmount: 2000000 }]
      },
      {
        id: "t2",
        date: "4月8日",
        text: "商品400,000円（税抜き）を仕入れ、消費税40,000円とあわせて買掛金440,000円とした。",
        answer: [
          { debit: "仕入", debitAmount: 400000, credit: "買掛金", creditAmount: 400000 },
          { debit: "仮払消費税", debitAmount: 40000, credit: "買掛金", creditAmount: 40000 }
        ]
      },
      {
        id: "t3",
        date: "4月15日",
        text: "商品600,000円（税抜き）を掛けで売り上げ、消費税60,000円とあわせて売掛金660,000円とした。",
        answer: [
          { debit: "売掛金", debitAmount: 600000, credit: "売上", creditAmount: 600000 },
          { debit: "売掛金", debitAmount: 60000, credit: "仮受消費税", creditAmount: 60000 }
        ]
      },
      {
        id: "t4",
        date: "4月22日",
        text: "売掛金500,000円が当座預金に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 500000, credit: "売掛金", creditAmount: 500000 }]
      },
      {
        id: "t5",
        date: "4月28日",
        text: "給料250,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 250000, credit: "当座預金", creditAmount: 250000 }]
      }
    ],
    expectedAnswers: {
      "当座預金":   { debit: 2250000 },
      "売掛金":     { debit: 160000 },
      "仕入":       { debit: 400000 },
      "仮払消費税": { debit: 40000 },
      "給料":       { debit: 250000 },
      "買掛金":     { credit: 440000 },
      "売上":       { credit: 600000 },
      "仮受消費税": { credit: 60000 },
      "資本金":     { credit: 2000000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "税抜き方式での消費税処理",
        description: "税抜き方式では消費税を仮払消費税（資産）・仮受消費税（負債）として処理します。仕入時：「仕入＋仮払消費税/買掛金（税込額）」、売上時：「売掛金（税込額）/売上＋仮受消費税」",
        action: "journalize"
      },
      {
        id: "step2",
        title: "消費税が含まれる仕入・売上の仕訳",
        description: "仕入：仕入400,000＋仮払消費税40,000/買掛金440,000。売上：売掛金660,000/売上600,000＋仮受消費税60,000。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "仮払・仮受消費税のT字勘定",
        description: "仮払消費税：借方40,000（仕入時）。仮受消費税：貸方60,000（売上時）。決算時に相殺して未払消費税20,000円として確定します（今回は期中なので試算表に残ります）。",
        action: "t-account",
        targetAccount: "仮払消費税"
      },
      {
        id: "step4",
        title: "残高試算表への転記",
        description: "売掛金残高：660,000-500,000＝160,000円。当座預金：2,000,000+500,000-250,000＝2,250,000円。9科目を転記します。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：2,250,000＋160,000＋400,000＋40,000＋250,000＝3,100,000円。貸方合計：440,000＋600,000＋60,000＋2,000,000＝3,100,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g2-tb-05",
    title: "残高試算表⑤（前期繰越・固定資産・有価証券）",
    level: "2級",
    type: "残高試算表",
    description: "固定資産・有価証券・社債を持つ株式会社の6月取引から残高試算表を作成してください。",
    initialBalances: {
      "現金":                   100000,
      "当座預金":               800000,
      "売掛金":                 400000,
      "繰越商品":               150000,
      "売買目的有価証券":       300000,
      "建物":                   2000000,
      "備品":                   600000,
      "減価償却累計額（建物）": 400000,
      "減価償却累計額（備品）": 120000,
      "買掛金":                 250000,
      "社債":                   500000,
      "資本金":                 2000000,
      "資本準備金":             500000,
      "繰越利益剰余金":         580000
    },
    transactions: [
      {
        id: "t1",
        date: "6月5日",
        text: "商品500,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 500000, credit: "買掛金", creditAmount: 500000 }]
      },
      {
        id: "t2",
        date: "6月10日",
        text: "商品700,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 700000, credit: "売上", creditAmount: 700000 }]
      },
      {
        id: "t3",
        date: "6月15日",
        text: "売掛金600,000円が当座預金に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 600000, credit: "売掛金", creditAmount: 600000 }]
      },
      {
        id: "t4",
        date: "6月20日",
        text: "買掛金300,000円を当座預金から支払った。",
        answer: [{ debit: "買掛金", debitAmount: 300000, credit: "当座預金", creditAmount: 300000 }]
      },
      {
        id: "t5",
        date: "6月25日",
        text: "給料250,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 250000, credit: "当座預金", creditAmount: 250000 }]
      },
      {
        id: "t6",
        date: "6月30日",
        text: "社債の利息25,000円を当座預金から支払った。",
        answer: [{ debit: "社債利息", debitAmount: 25000, credit: "当座預金", creditAmount: 25000 }]
      }
    ],
    expectedAnswers: {
      "現金":                   { debit: 100000 },
      "当座預金":               { debit: 825000 },
      "売掛金":                 { debit: 500000 },
      "繰越商品":               { debit: 150000 },
      "売買目的有価証券":       { debit: 300000 },
      "建物":                   { debit: 2000000 },
      "備品":                   { debit: 600000 },
      "仕入":                   { debit: 500000 },
      "給料":                   { debit: 250000 },
      "社債利息":               { debit: 25000 },
      "減価償却累計額（建物）": { credit: 400000 },
      "減価償却累計額（備品）": { credit: 120000 },
      "買掛金":                 { credit: 450000 },
      "社債":                   { credit: 500000 },
      "売上":                   { credit: 700000 },
      "資本金":                 { credit: 2000000 },
      "資本準備金":             { credit: 500000 },
      "繰越利益剰余金":         { credit: 580000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "前期繰越残高を試算表へ書き移す",
        description: "期首残高：借方（現金・当座預金・売掛金・繰越商品・有価証券・建物・備品）と貸方（累計額・買掛金・社債・資本金・資本準備金・繰越利益剰余金）を確認します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "6件の取引を仕訳する",
        description: "仕入/買掛金・売掛金/売上・当座預金/売掛金・買掛金/当座預金・給料/当座預金・社債利息/当座預金 の6件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定（期首残高含む）",
        description: "借方：期首800,000＋6/15に600,000＝1,400,000。貸方：6/20に300,000＋6/25に250,000＋6/30に25,000＝575,000。残高：825,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "株式会社固有の純資産科目に注目",
        description: "繰越利益剰余金580,000円は前期から繰り越された利益の累積です。資本金・資本準備金とともに純資産の部に表示されます。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：100,000＋825,000＋500,000＋150,000＋300,000＋2,000,000＋600,000＋500,000＋250,000＋25,000＝5,250,000円。貸方合計も5,250,000円。一致！",
        action: "check"
      }
    ]
  },
  {
    id: "g2-tb-06",
    title: "残高試算表⑥（株式・有価証券・社債・受取配当金の総合）",
    level: "2級",
    type: "残高試算表",
    description: "株式会社の各種資産・負債・純資産を含む総合的な残高試算表を作成してください。",
    initialBalances: {
      "現金":                   200000,
      "当座預金":               1000000,
      "売掛金":                 600000,
      "繰越商品":               200000,
      "売買目的有価証券":       400000,
      "建物":                   3000000,
      "備品":                   800000,
      "減価償却累計額（建物）": 300000,
      "減価償却累計額（備品）": 160000,
      "買掛金":                 300000,
      "短期借入金":             500000,
      "社債":                   1000000,
      "資本金":                 2000000,
      "資本準備金":             500000,
      "繰越利益剰余金":         1440000
    },
    transactions: [
      {
        id: "t1",
        date: "7月5日",
        text: "商品600,000円を仕入れ、代金は掛けとした。",
        answer: [{ debit: "仕入", debitAmount: 600000, credit: "買掛金", creditAmount: 600000 }]
      },
      {
        id: "t2",
        date: "7月10日",
        text: "商品1,000,000円を掛けで売り上げた。",
        answer: [{ debit: "売掛金", debitAmount: 1000000, credit: "売上", creditAmount: 1000000 }]
      },
      {
        id: "t3",
        date: "7月15日",
        text: "売掛金800,000円が当座預金に振り込まれた。",
        answer: [{ debit: "当座預金", debitAmount: 800000, credit: "売掛金", creditAmount: 800000 }]
      },
      {
        id: "t4",
        date: "7月20日",
        text: "買掛金500,000円を当座預金から支払った。",
        answer: [{ debit: "買掛金", debitAmount: 500000, credit: "当座預金", creditAmount: 500000 }]
      },
      {
        id: "t5",
        date: "7月25日",
        text: "給料350,000円を当座預金から支払った。",
        answer: [{ debit: "給料", debitAmount: 350000, credit: "当座預金", creditAmount: 350000 }]
      },
      {
        id: "t6",
        date: "7月28日",
        text: "社債の利息50,000円を当座預金から支払った。",
        answer: [{ debit: "社債利息", debitAmount: 50000, credit: "当座預金", creditAmount: 50000 }]
      },
      {
        id: "t7",
        date: "7月30日",
        text: "売買目的で保有している株式の配当金30,000円が当座預金に入金された。",
        answer: [{ debit: "当座預金", debitAmount: 30000, credit: "受取配当金", creditAmount: 30000 }]
      }
    ],
    expectedAnswers: {
      "現金":                   { debit: 200000 },
      "当座預金":               { debit: 930000 },
      "売掛金":                 { debit: 800000 },
      "繰越商品":               { debit: 200000 },
      "売買目的有価証券":       { debit: 400000 },
      "建物":                   { debit: 3000000 },
      "備品":                   { debit: 800000 },
      "仕入":                   { debit: 600000 },
      "給料":                   { debit: 350000 },
      "社債利息":               { debit: 50000 },
      "減価償却累計額（建物）": { credit: 300000 },
      "減価償却累計額（備品）": { credit: 160000 },
      "買掛金":                 { credit: 400000 },
      "短期借入金":             { credit: 500000 },
      "社債":                   { credit: 1000000 },
      "売上":                   { credit: 1000000 },
      "受取配当金":             { credit: 30000 },
      "資本金":                 { credit: 2000000 },
      "資本準備金":             { credit: 500000 },
      "繰越利益剰余金":         { credit: 1440000 }
    },
    explanationSteps: [
      {
        id: "step1",
        title: "前期繰越残高と当月取引を整理する",
        description: "期首残高：借方合計＝貸方合計＝6,200,000円（確認）。当月取引7件を仕訳します。",
        action: "journalize"
      },
      {
        id: "step2",
        title: "受取配当金の仕訳",
        description: "売買目的有価証券から配当金を受け取った場合：「当座預金/受取配当金」。受取配当金は営業外収益（損益計算書の貸方）に計上します。",
        action: "journalize"
      },
      {
        id: "step3",
        title: "『当座預金』のT字勘定（期首残高含む）",
        description: "借方：期首1,000,000＋7/15に800,000＋7/30に30,000＝1,830,000。貸方：7/20に500,000＋7/25に350,000＋7/28に50,000＝900,000。残高：930,000円。",
        action: "t-account",
        targetAccount: "当座預金"
      },
      {
        id: "step4",
        title: "純資産の3区分を確認する",
        description: "純資産の部：資本金2,000,000＋資本準備金500,000＋繰越利益剰余金1,440,000。これらは期中に変動しないため、前期繰越残高のままです（配当や増資がない限り）。",
        action: "transfer"
      },
      {
        id: "step5",
        title: "貸借合計の一致確認",
        description: "借方合計：200,000＋930,000＋800,000＋200,000＋400,000＋3,000,000＋800,000＋600,000＋350,000＋50,000＝7,330,000円。貸方合計も7,330,000円。一致！",
        action: "check"
      }
    ]
  }
];
