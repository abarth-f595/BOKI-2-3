import { Quiz } from "@/types";

export const grade2Extra: Record<string, Quiz[]> = {
  // 商業簿記
  "g2-com-ch01-l01": [
    {
      id: "g2-com-ch01-l01-q02",
      question: "売上値引きをしたとき、仕訳の借方科目はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "売掛金" },
        { id: "b", label: "売上" },
        { id: "c", label: "仕入" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "b",
      explanation:
        "値引きは「売上を取り消す」処理だよ。売上（収益）が減るから借方に書くんだ。",
    },
    {
      id: "g2-com-ch01-l01-q03",
      question: "売上原価対立法で売上時に行う仕訳は何本ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "1本" },
        { id: "b", label: "2本" },
        { id: "c", label: "3本" },
        { id: "d", label: "4本" },
      ],
      correctAnswer: "b",
      explanation:
        "①売価で「売掛金/売上」②原価で「売上原価/商品」の2本を同時に書くよ。",
    },
    {
      id: "g2-com-ch01-l01-q04",
      question: "仕入割戻しを受けたとき、仕訳の貸方科目はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "買掛金" },
        { id: "b", label: "売上" },
        { id: "c", label: "仕入" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "c",
      explanation:
        "仕入割戻しは「仕入が安くなる」ことだから、仕入（費用）を減らす。減らすときは貸方に書くよ。",
    },
    {
      id: "g2-com-ch01-l01-q05",
      question: "三分法と売上原価対立法の大きな違いはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "売上原価対立法は期末に売上原価を計算しない" },
        { id: "b", label: "三分法は売るたびに売上原価を計算しない" },
        { id: "c", label: "どちらも売るたびに原価を計算する" },
        { id: "d", label: "違いはない" },
      ],
      correctAnswer: "b",
      explanation:
        "三分法は期末に売上原価を計算（しくり・くりし）するよ。売上原価対立法は売るたびに原価を記録するので、常に在庫の原価がわかる。",
    },
  ],

  "g2-com-ch01-l02": [
    {
      id: "g2-com-ch01-l02-q02",
      question: "委託販売で「積送品」はどこに分類されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "受託者の資産" },
        { id: "b", label: "委託者の資産" },
        { id: "c", label: "委託者の費用" },
        { id: "d", label: "受託者の負債" },
      ],
      correctAnswer: "b",
      explanation:
        "積送品はまだ売れていない在庫なので、発送した委託者の資産だよ。受託者の手元にあるけど所有権は委託者にある。",
    },
    {
      id: "g2-com-ch01-l02-q03",
      question: "受託者の立場で商品を販売したとき、収益として計上する科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "売上" },
        { id: "b", label: "受託販売" },
        { id: "c", label: "積送品売上" },
        { id: "d", label: "手数料収入" },
      ],
      correctAnswer: "b",
      explanation:
        "受託者は他人の商品を代わりに売るだけだから「売上」にはしないよ。「受託販売」（負債）を使って預かり金として管理する。",
    },
    {
      id: "g2-com-ch01-l02-q04",
      question: "委託者が売上を認識するのはいつですか？",
      type: "multiple",
      options: [
        { id: "a", label: "商品を受託者に発送したとき" },
        { id: "b", label: "受託者から売上計算書を受け取ったとき" },
        { id: "c", label: "代金が入金されたとき" },
        { id: "d", label: "委託契約を結んだとき" },
      ],
      correctAnswer: "b",
      explanation:
        "委託者は受託者から「売上計算書」をもらったタイミングで売上を計上するよ。発送時点ではまだ売れていない。",
    },
  ],

  "g2-com-ch02-l01": [
    {
      id: "g2-com-ch02-l01-q02",
      question: "定率法の1年目、取得価額1,000,000円・償却率20%のとき、減価償却費はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "100,000円" },
        { id: "b", label: "200,000円" },
        { id: "c", label: "800,000円" },
        { id: "d", label: "20,000円" },
      ],
      correctAnswer: "b",
      explanation:
        "定率法の1年目：1,000,000×20%＝200,000円だよ。2年目は（1,000,000－200,000）×20%＝160,000円と減っていく。",
    },
    {
      id: "g2-com-ch02-l01-q03",
      question: "期中（7月1日）に備品を取得した場合、その年度の減価償却費はどう計算しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "1年分全額計上する" },
        { id: "b", label: "月割計算で取得した月からの分を計上する" },
        { id: "c", label: "翌年度から計上する" },
        { id: "d", label: "計上しない" },
      ],
      correctAnswer: "b",
      explanation:
        "期中に取得したときは「月割り」で計算するよ。7月取得なら9か月分（4月決算なら）というように、使った期間分だけ計上する。",
    },
    {
      id: "g2-com-ch02-l01-q04",
      question: "定額法と定率法を比べたとき、初年度の減価償却費が大きいのはどちらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "定額法" },
        { id: "b", label: "定率法" },
        { id: "c", label: "どちらも同じ" },
        { id: "d", label: "耐用年数による" },
      ],
      correctAnswer: "b",
      explanation:
        "定率法は取得直後が一番高く、年々減っていくよ。新しい資産ほど価値が下がりやすいという考え方に基づいているんだ。",
    },
  ],

  "g2-com-ch02-l02": [
    {
      id: "g2-com-ch02-l02-q02",
      question: "固定資産を売却して「固定資産売却益」が出るのはどんな場合ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "売却価額＜帳簿価額のとき" },
        { id: "b", label: "売却価額＝帳簿価額のとき" },
        { id: "c", label: "売却価額＞帳簿価額のとき" },
        { id: "d", label: "売却できなかったとき" },
      ],
      correctAnswer: "c",
      explanation:
        "帳簿に載っている金額より高く売れたときに「売却益（収益）」が出るよ。安く売れた場合は「売却損（費用）」になる。",
    },
    {
      id: "g2-com-ch02-l02-q03",
      question: "資本的支出と収益的支出の違いはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "どちらも費用として計上する" },
        { id: "b", label: "資本的支出は資産計上、収益的支出は費用計上" },
        { id: "c", label: "資本的支出は費用計上、収益的支出は資産計上" },
        { id: "d", label: "どちらも資産に計上する" },
      ],
      correctAnswer: "b",
      explanation:
        "建物を改良して価値が上がった（資本的支出）→資産に加える。ただの修繕（収益的支出）→修繕費として費用にするよ。",
    },
    {
      id: "g2-com-ch02-l02-q04",
      question: "期中に固定資産を売却するとき、まず行う処理は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "すぐに売却益・損を計算する" },
        { id: "b", label: "当期分の減価償却費を月割計算してから売却処理する" },
        { id: "c", label: "何も処理しない" },
        { id: "d", label: "取得価額をそのまま使う" },
      ],
      correctAnswer: "b",
      explanation:
        "売却時点まで使った分の減価償却費を先に計上して帳簿価額を更新してから、売却益・損を計算するよ。",
    },
  ],

  "g2-com-ch03-l01": [
    {
      id: "g2-com-ch03-l01-q02",
      question: "「その他有価証券」の期末評価差額はどこに計上しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "損益計算書（損益）" },
        { id: "b", label: "貸借対照表の純資産（その他有価証券評価差額金）" },
        { id: "c", label: "負債" },
        { id: "d", label: "資産" },
      ],
      correctAnswer: "b",
      explanation:
        "その他有価証券の評価差額は損益にはせず、純資産の「その他有価証券評価差額金」に計上するよ。売るまでは確定した損益ではないからだ。",
    },
    {
      id: "g2-com-ch03-l01-q03",
      question: "満期保有目的債券を取得価額より低い価格で取得した場合、何を計上しますか（償却原価法）？",
      type: "multiple",
      options: [
        { id: "a", label: "有価証券評価損" },
        { id: "b", label: "有価証券利息（額面まで毎期少しずつ加算）" },
        { id: "c", label: "配当金" },
        { id: "d", label: "売却益" },
      ],
      correctAnswer: "b",
      explanation:
        "割引取得した債券は満期まで毎期「有価証券利息」として差額を加算していくよ（償却原価法）。",
    },
    {
      id: "g2-com-ch03-l01-q04",
      question: "子会社株式の期末評価はどのように行いますか？",
      type: "multiple",
      options: [
        { id: "a", label: "時価に評価替えして差額を損益計上" },
        { id: "b", label: "原価法（取得価額のまま）" },
        { id: "c", label: "時価に評価替えして純資産に計上" },
        { id: "d", label: "毎期償却する" },
      ],
      correctAnswer: "b",
      explanation:
        "子会社株式は支配目的だから時価評価しないよ。取得したときの価格（原価法）のまま計上するんだ。",
    },
  ],

  "g2-com-ch04-l01": [
    {
      id: "g2-com-ch04-l01-q02",
      question: "引当金を計上するための4つの条件として誤っているものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "将来の費用・損失であること" },
        { id: "b", label: "発生の可能性が高いこと" },
        { id: "c", label: "原因が当期に発生していること" },
        { id: "d", label: "必ず金額が確定していること" },
      ],
      correctAnswer: "d",
      explanation:
        "引当金は金額が「合理的に見積もれる」ならOKで、確定している必要はないよ。見積もりでよいんだ。",
    },
    {
      id: "g2-com-ch04-l01-q03",
      question: "貸倒懸念債権に対して適用する評価方法はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "貸倒実績率法" },
        { id: "b", label: "財務内容評価法" },
        { id: "c", label: "時価評価法" },
        { id: "d", label: "原価法" },
      ],
      correctAnswer: "b",
      explanation:
        "回収が危うい債権（貸倒懸念債権）には財務内容評価法を使うよ。担保や保証を差し引いて回収できない部分を引当計上する。",
    },
    {
      id: "g2-com-ch04-l01-q04",
      question: "商品保証引当金を使って修理費用を支払ったとき、借方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "商品保証引当金繰入" },
        { id: "b", label: "修繕費" },
        { id: "c", label: "商品保証引当金" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "c",
      explanation:
        "引当金を取り崩すとき（実際に使うとき）は「商品保証引当金（負債）」を借方に書いて減らすよ。",
    },
  ],

  "g2-com-ch04-l02": [
    {
      id: "g2-com-ch04-l02-q02",
      question: "繰延税金資産が計上されるのはどんな場合ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "将来の税金が増える場合" },
        { id: "b", label: "将来の税金が減る場合" },
        { id: "c", label: "当期の税金が確定した場合" },
        { id: "d", label: "配当を支払った場合" },
      ],
      correctAnswer: "b",
      explanation:
        "繰延税金資産は「将来、税金が少なく済む権利（資産）」だよ。今は費用にできなくても将来税金で取り戻せるイメージ。",
    },
    {
      id: "g2-com-ch04-l02-q03",
      question: "税効果会計で使う「法人税等調整額」はどの財務諸表に表示されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "貸借対照表" },
        { id: "b", label: "損益計算書" },
        { id: "c", label: "株主資本等変動計算書" },
        { id: "d", label: "キャッシュフロー計算書" },
      ],
      correctAnswer: "b",
      explanation:
        "法人税等調整額は「法人税等」の調整項目として損益計算書（P/L）に表示されるよ。",
    },
    {
      id: "g2-com-ch04-l02-q04",
      question: "一時差異100,000円、実効税率30%のとき、繰延税金資産はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "100,000円" },
        { id: "b", label: "70,000円" },
        { id: "c", label: "30,000円" },
        { id: "d", label: "130,000円" },
      ],
      correctAnswer: "c",
      explanation:
        "繰延税金資産＝一時差異×実効税率＝100,000×30%＝30,000円だよ。",
    },
  ],

  "g2-com-ch05-l01": [
    {
      id: "g2-com-ch05-l01-q02",
      question: "株式を発行したとき、資本準備金に計上できる最大額はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "払込金額の全額" },
        { id: "b", label: "払込金額の1/2以下" },
        { id: "c", label: "払込金額の1/4以下" },
        { id: "d", label: "0円" },
      ],
      correctAnswer: "b",
      explanation:
        "資本金にしなくてよい部分（払込金額の1/2まで）が資本準備金にできるよ。残りは必ず資本金にしなければならないんだ。",
    },
    {
      id: "g2-com-ch05-l01-q03",
      question: "資本準備金と利益準備金をまとめて何と呼びますか？",
      type: "multiple",
      options: [
        { id: "a", label: "任意積立金" },
        { id: "b", label: "法定準備金" },
        { id: "c", label: "繰越利益剰余金" },
        { id: "d", label: "その他資本剰余金" },
      ],
      correctAnswer: "b",
      explanation:
        "会社法で積み立てが義務付けられた準備金が「法定準備金」だよ。資本準備金（資本剰余金）と利益準備金（利益剰余金）の2つだ。",
    },
    {
      id: "g2-com-ch05-l01-q04",
      question: "新株発行の費用（株式交付費）はどのように処理しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "資産として計上する" },
        { id: "b", label: "費用として計上する（または繰延資産）" },
        { id: "c", label: "資本金から差し引く" },
        { id: "d", label: "負債として計上する" },
      ],
      correctAnswer: "b",
      explanation:
        "株式交付費は原則として費用（営業外費用）に計上するよ。繰延資産として計上して数年で均等償却することもできる。",
    },
  ],

  "g2-com-ch05-l02": [
    {
      id: "g2-com-ch05-l02-q02",
      question: "配当時に利益準備金を積み立てる割合は配当金額のどれくらいですか？",
      type: "multiple",
      options: [
        { id: "a", label: "1/20" },
        { id: "b", label: "1/10" },
        { id: "c", label: "1/4" },
        { id: "d", label: "1/2" },
      ],
      correctAnswer: "b",
      explanation:
        "配当金額の1/10を利益準備金として積み立てるルールだよ（資本準備金と合計が資本金の1/4に達するまで）。",
    },
    {
      id: "g2-com-ch05-l02-q03",
      question: "自己株式を処分（売却）したとき、売却価額が帳簿価額より高い場合の差額はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "固定資産売却益として損益計上" },
        { id: "b", label: "その他資本剰余金として純資産に計上" },
        { id: "c", label: "繰越利益剰余金に加算" },
        { id: "d", label: "資本金に加算" },
      ],
      correctAnswer: "b",
      explanation:
        "自己株式の処分差益は「その他資本剰余金（純資産）」に計上するよ。損益（利益）にはならないんだ。",
    },
    {
      id: "g2-com-ch05-l02-q04",
      question: "自己株式を取得したとき、貸借対照表のどこに表示されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "資産の部（投資有価証券）" },
        { id: "b", label: "負債の部" },
        { id: "c", label: "純資産の部（マイナス表示）" },
        { id: "d", label: "資産の部（現金同等物）" },
      ],
      correctAnswer: "c",
      explanation:
        "自己株式は「株主が出したお金を返した」ようなものだから純資産のマイナスとして表示するよ。資産じゃないんだ。",
    },
  ],

  "g2-com-ch06-l01": [
    {
      id: "g2-com-ch06-l01-q02",
      question: "支店が本店から現金を受け取ったとき、支店側の仕訳の貸方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "支店" },
        { id: "b", label: "本店" },
        { id: "c", label: "現金" },
        { id: "d", label: "売掛金" },
      ],
      correctAnswer: "b",
      explanation:
        "支店が本店から受け取るとき、借方：現金 / 貸方：本店（負債）と仕訳するよ。「本店」勘定は本店への返済義務を表す。",
    },
    {
      id: "g2-com-ch06-l01-q03",
      question: "本支店合併財務諸表を作るとき「内部取引の消去」が必要な理由は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "税金を少なくするため" },
        { id: "b", label: "本支店間の取引を二重計上しないため" },
        { id: "c", label: "支店の利益を増やすため" },
        { id: "d", label: "本店の費用を減らすため" },
      ],
      correctAnswer: "b",
      explanation:
        "本支店は同じ会社なのに、それぞれ独立して記録しているから合算すると取引が2回計上されてしまうよ。消去して正しい金額にするんだ。",
    },
    {
      id: "g2-com-ch06-l01-q04",
      question: "本店勘定と支店勘定の残高が一致しない原因として考えられることは？",
      type: "multiple",
      options: [
        { id: "a", label: "利益が出ているため" },
        { id: "b", label: "送金中（未達取引）があるため" },
        { id: "c", label: "売上が多いため" },
        { id: "d", label: "仕入が多いため" },
      ],
      correctAnswer: "b",
      explanation:
        "本店が送金したのに支店にまだ届いていない（未達取引）があると残高が一致しないよ。合併前に修正仕訳が必要だ。",
    },
  ],

  "g2-com-ch06-l02": [
    {
      id: "g2-com-ch06-l02-q02",
      question: "連結財務諸表の作成において「内部取引の消去」が必要な理由は？",
      type: "multiple",
      options: [
        { id: "a", label: "グループ内の取引は外部との取引ではないため" },
        { id: "b", label: "親会社の利益を増やすため" },
        { id: "c", label: "税金を減らすため" },
        { id: "d", label: "子会社の資産を減らすため" },
      ],
      correctAnswer: "a",
      explanation:
        "グループ内（親子間）で売買しても、外部の人とは取引していないよ。「一体の企業」として見ると内部取引は消さなければならないんだ。",
    },
    {
      id: "g2-com-ch06-l02-q03",
      question: "のれんが発生しない場合とはどんなときですか？",
      type: "multiple",
      options: [
        { id: "a", label: "子会社株式の取得価額＞子会社純資産のとき" },
        { id: "b", label: "子会社株式の取得価額＝子会社純資産のとき" },
        { id: "c", label: "子会社株式の取得価額＜子会社純資産のとき" },
        { id: "d", label: "常に発生する" },
      ],
      correctAnswer: "b",
      explanation:
        "取得価額＝子会社純資産なら差額がゼロだからのれんは発生しないよ。差額がプラスなら「のれん（資産）」、マイナスなら「負ののれん」だ。",
    },
    {
      id: "g2-com-ch06-l02-q04",
      question: "「非支配株主持分」とは何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "親会社が持っている子会社の株式" },
        { id: "b", label: "親会社以外の株主が持っている子会社の持分" },
        { id: "c", label: "子会社が持っている親会社の株式" },
        { id: "d", label: "連結外の会社の持分" },
      ],
      correctAnswer: "b",
      explanation:
        "親会社が60%出資している場合、残り40%の持分が「非支配株主持分」だよ。連結B/Sの純資産に含まれる。",
    },
  ],

  // 工業簿記
  "g2-mfg-ch01-l01": [
    {
      id: "g2-mfg-ch01-l01-q03",
      question: "工業簿記と商業簿記の大きな違いはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "工業簿記は仕訳をしない" },
        { id: "b", label: "工業簿記は製造原価の計算まで行う" },
        { id: "c", label: "商業簿記は決算をしない" },
        { id: "d", label: "違いはない" },
      ],
      correctAnswer: "b",
      explanation:
        "商業簿記は仕入れた商品をそのまま売るだけだけど、工業簿記は材料を加工して製品を作る過程の原価も計算するよ。",
    },
    {
      id: "g2-mfg-ch01-l01-q04",
      question: "製造原価の勘定の流れとして正しい順番はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "製品→仕掛品→材料→売上原価" },
        { id: "b", label: "材料→仕掛品→製品→売上原価" },
        { id: "c", label: "売上原価→製品→仕掛品→材料" },
        { id: "d", label: "仕掛品→材料→製品→売上原価" },
      ],
      correctAnswer: "b",
      explanation:
        "「材料を買う→加工中（仕掛品）→完成（製品）→売れた（売上原価）」の流れだよ。工場のラインをイメージしよう！",
    },
    {
      id: "g2-mfg-ch01-l01-q05",
      question: "「直接費」の説明として正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "複数の製品に共通してかかる費用" },
        { id: "b", label: "特定の製品に直接紐づく費用" },
        { id: "c", label: "販売にかかる費用" },
        { id: "d", label: "本社の事務費用" },
      ],
      correctAnswer: "b",
      explanation:
        "直接費は「この製品を作るためだけにかかった費用」だよ。例えば製品Aだけに使った材料は直接材料費だ。",
    },
  ],

  "g2-mfg-ch02-l01": [
    {
      id: "g2-mfg-ch02-l01-q02",
      question: "材料を購入したとき、借方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "仕掛品" },
        { id: "b", label: "材料" },
        { id: "c", label: "製品" },
        { id: "d", label: "仕入" },
      ],
      correctAnswer: "b",
      explanation:
        "材料を買ったときは「材料（資産）」を借方に書くよ。工場で使うための在庫だから資産として管理するんだ。",
    },
    {
      id: "g2-mfg-ch02-l01-q03",
      question: "棚卸計算法で材料の消費量を求める式は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "期首在庫＋当期購入＋期末在庫" },
        { id: "b", label: "期首在庫＋当期購入－期末在庫" },
        { id: "c", label: "当期購入－期首在庫" },
        { id: "d", label: "期末在庫－期首在庫" },
      ],
      correctAnswer: "b",
      explanation:
        "消費量＝期首＋仕入－期末だよ。「あった量＋買った量－残った量＝使った量」とシンプルに考えよう！",
    },
    {
      id: "g2-mfg-ch02-l01-q04",
      question: "移動平均法で材料の消費単価を計算するのはいつですか？",
      type: "multiple",
      options: [
        { id: "a", label: "期末にまとめて計算" },
        { id: "b", label: "払出のたびに平均単価を計算" },
        { id: "c", label: "期首に一度だけ計算" },
        { id: "d", label: "仕入のたびに計算" },
      ],
      correctAnswer: "b",
      explanation:
        "移動平均法は材料を払い出すたびに「（残高＋新たな仕入）÷（残量＋仕入量）」で平均単価を計算するよ。",
    },
  ],

  "g2-mfg-ch02-l02": [
    {
      id: "g2-mfg-ch02-l02-q02",
      question: "直接作業時間200時間、賃率1,200円/時間のとき、直接労務費はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "120,000円" },
        { id: "b", label: "200,000円" },
        { id: "c", label: "240,000円" },
        { id: "d", label: "1,200円" },
      ],
      correctAnswer: "c",
      explanation:
        "直接労務費＝直接作業時間×賃率＝200時間×1,200円＝240,000円だよ。",
    },
    {
      id: "g2-mfg-ch02-l02-q03",
      question: "外注加工費（外注業者に製品の一部加工を依頼した費用）はどの科目ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "製造間接費" },
        { id: "b", label: "直接経費（仕掛品に直接計上）" },
        { id: "c", label: "労務費" },
        { id: "d", label: "販管費" },
      ],
      correctAnswer: "b",
      explanation:
        "外注加工費は特定の製品に直接かかる経費（直接経費）だから仕掛品に直接計上するよ。",
    },
    {
      id: "g2-mfg-ch02-l02-q04",
      question: "工場の水道光熱費は何に分類されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "直接材料費" },
        { id: "b", label: "直接労務費" },
        { id: "c", label: "製造間接費（間接経費）" },
        { id: "d", label: "販売費" },
      ],
      correctAnswer: "c",
      explanation:
        "水道光熱費はどの製品がどれだけ使ったか特定できないから間接費（製造間接費）だよ。",
    },
  ],

  "g2-mfg-ch03-l01": [
    {
      id: "g2-mfg-ch03-l01-q02",
      question: "予定配賦率の計算式はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "実際発生額÷実際操業度" },
        { id: "b", label: "予算額÷予定操業度" },
        { id: "c", label: "実際発生額÷予定操業度" },
        { id: "d", label: "予算額÷実際操業度" },
      ],
      correctAnswer: "b",
      explanation:
        "予定配賦率＝製造間接費予算÷予定操業度だよ。期首に計算しておいて、毎月の配賦に使う。",
    },
    {
      id: "g2-mfg-ch03-l01-q03",
      question: "配賦差異が「不利差異（借方差異）」とはどういう意味ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "予定より実際費用が少なかった" },
        { id: "b", label: "予定より実際費用が多かった（コスト超過）" },
        { id: "c", label: "利益が出た" },
        { id: "d", label: "予定通りだった" },
      ],
      correctAnswer: "b",
      explanation:
        "不利差異は「思ったよりお金がかかった」という意味だよ。予定配賦額より実際の費用が多かった場合に発生する。",
    },
    {
      id: "g2-mfg-ch03-l01-q04",
      question: "予定配賦率500円/時間、実際作業時間150時間のとき、製造間接費の予定配賦額はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "500円" },
        { id: "b", label: "150,000円" },
        { id: "c", label: "75,000円" },
        { id: "d", label: "650円" },
      ],
      correctAnswer: "b",
      explanation:
        "予定配賦額＝予定配賦率×実際操業度＝500円×150時間＝75,000円…あ、500×150＝75,000だよ。",
    },
  ],

  "g2-mfg-ch04-l01": [
    {
      id: "g2-mfg-ch04-l01-q02",
      question: "個別原価計算で製品が完成したとき、どの仕訳をしますか？",
      type: "multiple",
      options: [
        { id: "a", label: "借方：材料 / 貸方：製品" },
        { id: "b", label: "借方：製品 / 貸方：仕掛品" },
        { id: "c", label: "借方：売上原価 / 貸方：製品" },
        { id: "d", label: "借方：仕掛品 / 貸方：材料" },
      ],
      correctAnswer: "b",
      explanation:
        "製品が完成したら「仕掛品（製造中）→製品（完成品）」に振り替えるよ。借方：製品 / 貸方：仕掛品だ。",
    },
    {
      id: "g2-mfg-ch04-l01-q03",
      question: "製造指図書ごとに原価を集計する帳票を何といいますか？",
      type: "multiple",
      options: [
        { id: "a", label: "試算表" },
        { id: "b", label: "原価計算表" },
        { id: "c", label: "損益計算書" },
        { id: "d", label: "製品勘定" },
      ],
      correctAnswer: "b",
      explanation:
        "個別原価計算では製造指図書ごとに「原価計算表」を作成して材料費・労務費・経費を集計するよ。",
    },
    {
      id: "g2-mfg-ch04-l01-q04",
      question: "期末に完成していない製品の原価はどこに残りますか？",
      type: "multiple",
      options: [
        { id: "a", label: "製品勘定" },
        { id: "b", label: "売上原価" },
        { id: "c", label: "仕掛品勘定" },
        { id: "d", label: "材料勘定" },
      ],
      correctAnswer: "c",
      explanation:
        "まだ完成していない分は「仕掛品（資産）」に残るよ。次期に完成した時点で製品勘定に振り替えられるんだ。",
    },
  ],

  "g2-mfg-ch05-l01": [
    {
      id: "g2-mfg-ch05-l01-q02",
      question: "総合原価計算に適している生産形態はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "受注ごとに異なる仕様で製品を作る" },
        { id: "b", label: "同じ製品を大量に連続して作る" },
        { id: "c", label: "農業" },
        { id: "d", label: "サービス業" },
      ],
      correctAnswer: "b",
      explanation:
        "総合原価計算は飲料・食品・化学品などの「大量生産型」に使うよ。全部同じ製品だから1個あたりの原価を平均で計算するんだ。",
    },
    {
      id: "g2-mfg-ch05-l01-q03",
      question: "平均法で月末仕掛品原価を計算するときに使う「完成品換算量」の意味は？",
      type: "multiple",
      options: [
        { id: "a", label: "完成品の数量" },
        { id: "b", label: "仕掛品を完成品に換算した場合の数量" },
        { id: "c", label: "仕掛品の実際数量" },
        { id: "d", label: "月初仕掛品の数量" },
      ],
      correctAnswer: "b",
      explanation:
        "「半分しかできていない仕掛品100個」は「完成品50個分」に相当するよ。これが完成品換算量（100個×50%＝50個）だ。",
    },
    {
      id: "g2-mfg-ch05-l01-q04",
      question: "材料を工程の最初に全量投入する場合、月末仕掛品の材料費換算量はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "進捗度で換算する" },
        { id: "b", label: "仕掛品の実際数量（進捗度関係なし）" },
        { id: "c", label: "ゼロになる" },
        { id: "d", label: "完成品と同じ数量" },
      ],
      correctAnswer: "b",
      explanation:
        "最初に全量投入する材料は、仕掛品にすでに全部入っているから進捗度で換算しないよ。実際の数量がそのまま換算量になる。",
    },
  ],

  "g2-mfg-ch06-l01": [
    {
      id: "g2-mfg-ch06-l01-q02",
      question: "標準原価計算の目的として正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "過去の原価をそのまま記録する" },
        { id: "b", label: "原価の目標値を設定してコスト管理を行う" },
        { id: "c", label: "税金を計算する" },
        { id: "d", label: "在庫数量を管理する" },
      ],
      correctAnswer: "b",
      explanation:
        "標準原価計算は「目標のコスト」を先に決めておき、実際コストと比較して「どこでムダが出たか」を分析するための仕組みだよ。",
    },
    {
      id: "g2-mfg-ch06-l01-q03",
      question: "直接材料費の数量差異の計算式はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "（標準価格－実際価格）×実際消費量" },
        { id: "b", label: "標準価格×（標準消費量－実際消費量）" },
        { id: "c", label: "実際価格×（標準消費量－実際消費量）" },
        { id: "d", label: "（標準価格－実際価格）×標準消費量" },
      ],
      correctAnswer: "b",
      explanation:
        "数量差異＝標準価格×（標準消費量－実際消費量）だよ。「価格は標準で固定して、使いすぎたかどうか」を見る差異だ。",
    },
    {
      id: "g2-mfg-ch06-l01-q04",
      question: "実際消費量が標準消費量より少なかった場合、数量差異はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "不利差異（コスト超過）" },
        { id: "b", label: "有利差異（コスト節約）" },
        { id: "c", label: "差異なし" },
        { id: "d", label: "価格差異" },
      ],
      correctAnswer: "b",
      explanation:
        "実際消費量＜標準消費量は「材料を節約できた」ということ。だから有利差異（いい意味の差異）になるよ。",
    },
  ],

  "g2-mfg-ch07-l01": [
    {
      id: "g2-mfg-ch07-l01-q03",
      question: "変動費と固定費の違いとして正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "変動費は生産量に比例して増減し、固定費は生産量に関係なく一定" },
        { id: "b", label: "変動費は一定で、固定費は生産量に比例する" },
        { id: "c", label: "どちらも生産量に比例する" },
        { id: "d", label: "どちらも一定" },
      ],
      correctAnswer: "a",
      explanation:
        "材料費は作れば作るほど増える（変動費）。家賃・減価償却費は作る量に関係なく毎期一定（固定費）だよ。",
    },
    {
      id: "g2-mfg-ch07-l01-q04",
      question: "損益分岐点とは何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "利益が最大になる売上高" },
        { id: "b", label: "利益がちょうどゼロ（赤字でも黒字でもない）になる売上高" },
        { id: "c", label: "費用が最大になる売上高" },
        { id: "d", label: "売上高と変動費が等しくなる点" },
      ],
      correctAnswer: "b",
      explanation:
        "損益分岐点は「これより売上が多ければ黒字、少なければ赤字」の境界線になる売上高だよ。",
    },
    {
      id: "g2-mfg-ch07-l01-q05",
      question: "貢献利益率が40%、固定費が200万円のとき、損益分岐点売上高はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "200万円" },
        { id: "b", label: "400万円" },
        { id: "c", label: "500万円" },
        { id: "d", label: "80万円" },
      ],
      correctAnswer: "c",
      explanation:
        "損益分岐点＝固定費÷貢献利益率＝200万円÷40%＝500万円だよ。この売上を超えれば黒字だ！",
    },
  ],
};
