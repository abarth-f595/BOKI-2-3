import { Quiz } from "@/types";

export const grade3ExtraCh0610: Record<string, Quiz[]> = {
  "g3-ch06-l01": [
    {
      id: "g3-ch06-l01-q02",
      question: "約束手形を受け取った側の勘定科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "支払手形" },
        { id: "b", label: "受取手形" },
        { id: "c", label: "売掛金" },
        { id: "d", label: "買掛金" },
      ],
      correctAnswer: "b",
      explanation:
        "手形を受け取った側は後でお金をもらえる権利があるから「受取手形（資産）」だよ。振り出した側は「支払手形（負債）」になる。",
    },
    {
      id: "g3-ch06-l01-q03",
      question: "手形の満期日に受取手形が決済された。借方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "受取手形" },
        { id: "b", label: "支払手形" },
        { id: "c", label: "当座預金" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "c",
      explanation:
        "満期日になると当座預金に入金されるよ。だから「当座預金（資産↑）借方 / 受取手形（資産↓）貸方」と仕訳する。",
    },
    {
      id: "g3-ch06-l01-q04",
      question: "受取手形を裏書きして仕入代金の支払いに使った。貸方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "支払手形" },
        { id: "b", label: "受取手形" },
        { id: "c", label: "現金" },
        { id: "d", label: "当座預金" },
      ],
      correctAnswer: "b",
      explanation:
        "裏書きで手形を譲り渡すと受取手形（資産）が減るから貸方に書くよ。借方は仕入だ。",
    },
    {
      id: "g3-ch06-l01-q05",
      question: "支払手形の満期日に決済された。借方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "当座預金" },
        { id: "b", label: "受取手形" },
        { id: "c", label: "支払手形" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "c",
      explanation:
        "満期日に支払義務（支払手形）が消えるから、支払手形（負債↓）を借方に書くよ。当座預金（資産↓）が貸方だ。",
    },
  ],

  "g3-ch06-l02": [
    {
      id: "g3-ch06-l02-q02",
      question: "電子記録債権が決済された（入金された）。借方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "電子記録債権" },
        { id: "b", label: "電子記録債務" },
        { id: "c", label: "当座預金" },
        { id: "d", label: "売掛金" },
      ],
      correctAnswer: "c",
      explanation:
        "電子記録債権が決済されると当座預金に入金されるよ。借方：当座預金 / 貸方：電子記録債権 だ。",
    },
    {
      id: "g3-ch06-l02-q03",
      question: "電子記録債権と電子記録債務、それぞれどちらに分類されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "両方とも資産" },
        { id: "b", label: "両方とも負債" },
        { id: "c", label: "電子記録債権は資産、電子記録債務は負債" },
        { id: "d", label: "電子記録債権は負債、電子記録債務は資産" },
      ],
      correctAnswer: "c",
      explanation:
        "「債権」は「もらえる権利（資産）」、「債務」は「払う義務（負債）」だよ。名前の最後の文字で判断しよう。",
    },
    {
      id: "g3-ch06-l02-q04",
      question: "電子記録債務の発生記録をした。この取引で増えた科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "電子記録債権" },
        { id: "b", label: "買掛金" },
        { id: "c", label: "売掛金" },
        { id: "d", label: "電子記録債務" },
      ],
      correctAnswer: "d",
      explanation:
        "発生記録をすると電子記録債務（負債）が増えるよ。同時に買掛金（負債）が減る。",
    },
  ],

  "g3-ch07-l01": [
    {
      id: "g3-ch07-l01-q02",
      question: "固定資産を購入したとき、付随費用（送料・設置費）はどう処理しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "費用（修繕費）として計上する" },
        { id: "b", label: "取得価額に含めて資産に計上する" },
        { id: "c", label: "純資産から差し引く" },
        { id: "d", label: "負債に計上する" },
      ],
      correctAnswer: "b",
      explanation:
        "固定資産を使えるようにするためにかかった費用はすべて取得価額に加えるよ。送料も設置費も「その資産のコスト」だから資産に含めるんだ。",
    },
    {
      id: "g3-ch07-l01-q03",
      question: "減価償却の「間接法」では、どの勘定科目を使いますか？",
      type: "multiple",
      options: [
        { id: "a", label: "建物（資産）を直接減らす" },
        { id: "b", label: "減価償却累計額（資産のマイナス）を使う" },
        { id: "c", label: "負債を増やす" },
        { id: "d", label: "純資産から差し引く" },
      ],
      correctAnswer: "b",
      explanation:
        "間接法では「減価償却累計額」という特別な勘定で、資産から引く金額を記録するよ。これで取得価額と減った分が両方わかる。",
    },
    {
      id: "g3-ch07-l01-q04",
      question: "取得価額600,000円、残存価額60,000円、耐用年数9年のとき、定額法の年間減価償却費は？",
      type: "multiple",
      options: [
        { id: "a", label: "60,000円" },
        { id: "b", label: "66,667円" },
        { id: "c", label: "600,000円" },
        { id: "d", label: "540,000円" },
      ],
      correctAnswer: "a",
      explanation:
        "（600,000－60,000）÷9年＝60,000円だよ。毎年同じ金額を費用にするのが定額法のルールだ。",
    },
    {
      id: "g3-ch07-l01-q05",
      question: "減価償却費を計上する理由として正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "固定資産を修理するため" },
        { id: "b", label: "固定資産が年々古くなって価値が下がることを費用として記録するため" },
        { id: "c", label: "固定資産を新しく買うお金を積み立てるため" },
        { id: "d", label: "税金を増やすため" },
      ],
      correctAnswer: "b",
      explanation:
        "車や機械は使うほど古くなって価値が下がるよね。その「価値の目減り分」を毎年費用として記録するのが減価償却だよ。",
    },
  ],

  "g3-ch08-l01": [
    {
      id: "g3-ch08-l01-q02",
      question: "次期分の収益（受取家賃）がすでに入金されていた。この決算整理で貸方に書く科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "前払家賃" },
        { id: "b", label: "未払家賃" },
        { id: "c", label: "前受家賃" },
        { id: "d", label: "未収家賃" },
      ],
      correctAnswer: "c",
      explanation:
        "次期分の家賃をもう受け取っているなら「まだ貸していない分（前受け）」だよ。前受家賃（負債）として貸方に書くんだ。",
    },
    {
      id: "g3-ch08-l01-q03",
      question: "当期分の利息（3,000円）がまだ未払いのとき、決算整理の貸方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "前払利息" },
        { id: "b", label: "未収利息" },
        { id: "c", label: "未払利息" },
        { id: "d", label: "前受利息" },
      ],
      correctAnswer: "c",
      explanation:
        "当期分の費用（利息）がまだ払えていないなら「未払利息（負債）」を計上するよ。借方：支払利息 / 貸方：未払利息 だ。",
    },
    {
      id: "g3-ch08-l01-q04",
      question: "前払費用・未収収益・前受収益・未払費用のうち「負債」はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "前払費用と未収収益" },
        { id: "b", label: "前受収益と未払費用" },
        { id: "c", label: "全部資産" },
        { id: "d", label: "全部負債" },
      ],
      correctAnswer: "b",
      explanation:
        "前受収益（もらいすぎた）と未払費用（まだ払っていない）は負債だよ。「借りているお金」のイメージで覚えよう。",
    },
    {
      id: "g3-ch08-l01-q05",
      question: "翌期首に行う「再振替仕訳」の目的は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "前期の利益を確定するため" },
        { id: "b", label: "決算整理仕訳を元の状態に戻すため" },
        { id: "c", label: "新しい取引を記録するため" },
        { id: "d", label: "資本金を増やすため" },
      ],
      correctAnswer: "b",
      explanation:
        "翌期の最初に決算整理仕訳を逆にして「元に戻す」のが再振替仕訳だよ。こうすることで翌期の処理をシンプルにできるんだ。",
    },
  ],

  "g3-ch08-l02": [
    {
      id: "g3-ch08-l02-q02",
      question: "売掛金が回収できなかった（貸し倒れた）とき、すでに引当金がある場合の仕訳の借方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "貸倒引当金繰入" },
        { id: "b", label: "貸倒引当金" },
        { id: "c", label: "貸倒損失" },
        { id: "d", label: "売掛金" },
      ],
      correctAnswer: "b",
      explanation:
        "引当金を積んでいれば「貸倒引当金（資産のマイナス）」を使うよ。引当金の範囲内なら「借方：貸倒引当金 / 貸方：売掛金」だ。",
    },
    {
      id: "g3-ch08-l02-q03",
      question: "売上原価を計算するとき「しくり」の仕訳の意味は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "期末商品を仕入勘定に移す" },
        { id: "b", label: "期首商品（繰越商品）を仕入勘定に移す" },
        { id: "c", label: "売上を費用に振り替える" },
        { id: "d", label: "買掛金を消す" },
      ],
      correctAnswer: "b",
      explanation:
        "「しくり」は「仕入←繰越商品（期首）」のこと。前期末の在庫（期首商品）を当期の仕入に加えるための仕訳だよ。",
    },
    {
      id: "g3-ch08-l02-q04",
      question: "期首商品50,000円、当期仕入300,000円、期末商品80,000円のとき、売上原価はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "270,000円" },
        { id: "b", label: "350,000円" },
        { id: "c", label: "380,000円" },
        { id: "d", label: "230,000円" },
      ],
      correctAnswer: "a",
      explanation:
        "売上原価＝期首50,000＋仕入300,000－期末80,000＝270,000円だよ。",
    },
    {
      id: "g3-ch08-l02-q05",
      question: "貸倒引当金はなぜ設定しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "売上をもっと増やすため" },
        { id: "b", label: "将来回収できないかもしれないリスクを今のうちに費用として計上するため" },
        { id: "c", label: "税金を増やすため" },
        { id: "d", label: "在庫を減らすため" },
      ],
      correctAnswer: "b",
      explanation:
        "売掛金が全部回収できるとは限らないよね。回収できないリスクを前もって費用にしておくのが貸倒引当金の目的だよ。",
    },
  ],

  "g3-ch09-l01": [
    {
      id: "g3-ch09-l01-q02",
      question: "合計試算表と残高試算表の違いはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "合計試算表は借方貸方の合計、残高試算表は差引残高を集めたもの" },
        { id: "b", label: "どちらも同じ" },
        { id: "c", label: "残高試算表は売上だけ集計したもの" },
        { id: "d", label: "合計試算表は現金のみ集計" },
      ],
      correctAnswer: "a",
      explanation:
        "合計試算表は各勘定の「借方合計・貸方合計」を集め、残高試算表は「差引後の残高」を集めたものだよ。",
    },
    {
      id: "g3-ch09-l01-q03",
      question: "精算表の「修正記入」欄には何を書きますか？",
      type: "multiple",
      options: [
        { id: "a", label: "当期の売上合計" },
        { id: "b", label: "決算整理仕訳の内容" },
        { id: "c", label: "従業員数" },
        { id: "d", label: "商品の在庫数" },
      ],
      correctAnswer: "b",
      explanation:
        "精算表の「修正記入」欄には、決算整理仕訳（減価償却・繰延・見越しなど）を書き込むよ。",
    },
    {
      id: "g3-ch09-l01-q04",
      question: "精算表で当期純利益はどの欄に記載されますか？",
      type: "multiple",
      options: [
        { id: "a", label: "修正記入の借方" },
        { id: "b", label: "損益計算書の貸方と貸借対照表の貸方（純資産）" },
        { id: "c", label: "残高試算表の借方" },
        { id: "d", label: "貸借対照表の借方（資産）" },
      ],
      correctAnswer: "b",
      explanation:
        "当期純利益は損益計算書（貸方超過額）に記入し、同じ金額を貸借対照表の貸方（純資産の増加）にも記入するよ。",
    },
  ],

  "g3-ch09-l02": [
    {
      id: "g3-ch09-l02-q02",
      question: "損益計算書で「売上総利益」を求める計算式はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "売上高－販管費" },
        { id: "b", label: "売上高－売上原価" },
        { id: "c", label: "売上高＋仕入" },
        { id: "d", label: "収益－費用" },
      ],
      correctAnswer: "b",
      explanation:
        "売上総利益（粗利）＝売上高－売上原価だよ。どれだけの利幅で商品を売れたかを示す利益だ。",
    },
    {
      id: "g3-ch09-l02-q03",
      question: "貸借対照表で流動資産と固定資産はどのように並びますか？",
      type: "multiple",
      options: [
        { id: "a", label: "固定資産が上、流動資産が下" },
        { id: "b", label: "流動資産が上、固定資産が下" },
        { id: "c", label: "どちらでもよい" },
        { id: "d", label: "並べない" },
      ],
      correctAnswer: "b",
      explanation:
        "貸借対照表は換金しやすいもの（流動資産）を上に、換金しにくいもの（固定資産）を下に並べるルールがあるよ。",
    },
    {
      id: "g3-ch09-l02-q04",
      question: "B/S（貸借対照表）とP/L（損益計算書）はどんな関係がありますか？",
      type: "multiple",
      options: [
        { id: "a", label: "全く別々で関係がない" },
        { id: "b", label: "P/Lの当期純利益がB/Sの純資産に加算される" },
        { id: "c", label: "B/SがP/Lに含まれる" },
        { id: "d", label: "P/LがB/Sに含まれる" },
      ],
      correctAnswer: "b",
      explanation:
        "P/Lで計算した当期純利益は「繰越利益剰余金」としてB/Sの純資産に加わるよ。2つの表はつながっているんだ。",
    },
    {
      id: "g3-ch09-l02-q05",
      question: "財務諸表を読む人（外部の人）にとって最も重要な目的は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "会社の経営状況を判断するため" },
        { id: "b", label: "商品の仕入先を調べるため" },
        { id: "c", label: "社員の氏名を確認するため" },
        { id: "d", label: "工場の場所を知るため" },
      ],
      correctAnswer: "a",
      explanation:
        "銀行・投資家・取引先などが財務諸表を見て「この会社は安全か？もうかっているか？」を判断するよ。",
    },
  ],

  "g3-ch10-l01": [
    {
      id: "g3-ch10-l01-q02",
      question: "「総勘定元帳」は何をまとめた帳簿ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金の増減だけを記録した帳簿" },
        { id: "b", label: "すべての勘定科目のページをまとめた帳簿" },
        { id: "c", label: "商品の在庫を管理する帳簿" },
        { id: "d", label: "取引先ごとの売掛金を管理する帳簿" },
      ],
      correctAnswer: "b",
      explanation:
        "総勘定元帳はすべての勘定科目（現金・売掛金・仕入など）を一冊にまとめた帳簿だよ。仕訳帳の内容をここに転記する。",
    },
    {
      id: "g3-ch10-l01-q03",
      question: "商品有高帳はどんな情報を管理しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "取引先ごとの売掛金残高" },
        { id: "b", label: "商品の種類ごとの受払い・在庫数量と金額" },
        { id: "c", label: "現金の入出金記録" },
        { id: "d", label: "固定資産の一覧" },
      ],
      correctAnswer: "b",
      explanation:
        "商品有高帳は商品の「入荷・出荷・在庫」の数量と金額を商品ごとに管理する補助帳簿だよ。",
    },
    {
      id: "g3-ch10-l01-q04",
      question: "仕訳帳と総勘定元帳はどちらが「主要帳簿」ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "仕訳帳だけ" },
        { id: "b", label: "総勘定元帳だけ" },
        { id: "c", label: "両方とも主要帳簿" },
        { id: "d", label: "どちらも主要帳簿ではない" },
      ],
      correctAnswer: "c",
      explanation:
        "仕訳帳と総勘定元帳の2冊が「主要帳簿」だよ。この2冊は必ず作らなければならない。その他は「補助帳簿」だ。",
    },
    {
      id: "g3-ch10-l01-q05",
      question: "先入先出法で商品の単価を計算するとき、どの順番で払い出しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "後に仕入れたものから先に出す" },
        { id: "b", label: "先に仕入れたものから先に出す" },
        { id: "c", label: "高いものから先に出す" },
        { id: "d", label: "安いものから先に出す" },
      ],
      correctAnswer: "b",
      explanation:
        "先入先出法は「先に入ったものを先に出す」方法だよ。食品など実際の在庫管理にも似たルールが使われるよ。",
    },
  ],

  "g3-ch10-l02": [
    {
      id: "g3-ch10-l02-q02",
      question: "入金伝票の借方科目は必ず何になりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "売上" },
        { id: "b", label: "現金" },
        { id: "c", label: "当座預金" },
        { id: "d", label: "売掛金" },
      ],
      correctAnswer: "b",
      explanation:
        "入金伝票は「現金が入ってきた」取引を記録するから、借方は必ず「現金」になるよ。",
    },
    {
      id: "g3-ch10-l02-q03",
      question: "振替伝票に記録する取引の特徴は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金が入金された取引" },
        { id: "b", label: "現金が出金された取引" },
        { id: "c", label: "現金が関わらない取引" },
        { id: "d", label: "手形の取引のみ" },
      ],
      correctAnswer: "c",
      explanation:
        "振替伝票は現金が動かない取引（例：掛けで仕入れた・手形を受け取ったなど）に使うよ。",
    },
    {
      id: "g3-ch10-l02-q04",
      question: "仕訳日計表はどのようなときに使いますか？",
      type: "multiple",
      options: [
        { id: "a", label: "月次で決算を行うとき" },
        { id: "b", label: "1日分の伝票を集計して元帳へ転記するとき" },
        { id: "c", label: "年間の利益を計算するとき" },
        { id: "d", label: "在庫を確認するとき" },
      ],
      correctAnswer: "b",
      explanation:
        "仕訳日計表は1日の伝票をまとめて集計した表だよ。これを使って総勘定元帳に転記すると効率的なんだ。",
    },
    {
      id: "g3-ch10-l02-q05",
      question: "売掛金30,000円を現金で回収した。使う伝票はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "出金伝票" },
        { id: "b", label: "振替伝票" },
        { id: "c", label: "入金伝票" },
        { id: "d", label: "仕入伝票" },
      ],
      correctAnswer: "c",
      explanation:
        "現金が入ってきたから「入金伝票」だよ。入金伝票の借方は必ず現金で、貸方に「売掛金」を書く。",
    },
  ],
};
