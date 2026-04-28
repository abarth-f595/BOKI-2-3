import { Quiz } from "@/types";

export const grade3ExtraCh0105: Record<string, Quiz[]> = {
  "g3-ch01-l01": [
    {
      id: "g3-ch01-l01-q03",
      question: "簿記で記録する「取引」とはどんなものですか？",
      type: "multiple",
      options: [
        { id: "a", label: "お金や財産が増えたり減ったりする出来事" },
        { id: "b", label: "社長が出張した出来事" },
        { id: "c", label: "新しい商品のアイデアを考えた出来事" },
        { id: "d", label: "会社のルールを決めた出来事" },
      ],
      correctAnswer: "a",
      explanation:
        "簿記の「取引」は、お金・もの・借金などが実際に増えたり減ったりする出来事だよ。アイデアを考えただけでは財産は動かないから取引じゃないんだ。",
    },
    {
      id: "g3-ch01-l01-q04",
      question: "複式簿記では、1つの取引を何か所に記録しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "1か所" },
        { id: "b", label: "2か所（左右）" },
        { id: "c", label: "3か所" },
        { id: "d", label: "記録しなくてよい" },
      ],
      correctAnswer: "b",
      explanation:
        "複式簿記は「左（借方）」と「右（貸方）」の2か所に必ず記録するよ。左右セットで書くから「複式」と呼ぶんだ。",
    },
    {
      id: "g3-ch01-l01-q05",
      question: "簿記を使う一番の目的は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "社員の給料を決めること" },
        { id: "b", label: "会社がもうかっているかどうかを知ること" },
        { id: "c", label: "商品を宣伝すること" },
        { id: "d", label: "お客さんを増やすこと" },
      ],
      correctAnswer: "b",
      explanation:
        "簿記を使うと「会社の財産がいくらあるか」「もうかっているかどうか」が正確にわかるよ。それが一番の目的なんだ。",
    },
    {
      id: "g3-ch01-l01-q06",
      question: "「仕訳帳」と「総勘定元帳」はどちらが先に書かれますか？",
      type: "multiple",
      options: [
        { id: "a", label: "総勘定元帳が先" },
        { id: "b", label: "仕訳帳が先" },
        { id: "c", label: "同時に書く" },
        { id: "d", label: "どちらでもよい" },
      ],
      correctAnswer: "b",
      explanation:
        "まず「仕訳帳」に取引を記録して、それを各勘定科目のページ（総勘定元帳）に移す（転記する）順番だよ。",
    },
  ],

  "g3-ch01-l02": [
    {
      id: "g3-ch01-l02-q03",
      question: "次のうち「負債」にあたるものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金" },
        { id: "b", label: "建物" },
        { id: "c", label: "借入金" },
        { id: "d", label: "商品" },
      ],
      correctAnswer: "c",
      explanation:
        "借入金は「後で返さなければならないお金」だから負債だよ。現金・建物・商品は全部「会社が持っているもの」なので資産だ。",
    },
    {
      id: "g3-ch01-l02-q04",
      question: "資産が300万円、純資産が100万円のとき、負債はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "100万円" },
        { id: "b", label: "200万円" },
        { id: "c", label: "300万円" },
        { id: "d", label: "400万円" },
      ],
      correctAnswer: "b",
      explanation:
        "資産＝負債＋純資産 なので、負債＝資産−純資産＝300−100＝200万円だよ。",
    },
    {
      id: "g3-ch01-l02-q05",
      question: "貸借対照表の「左側（借方）」には何が書かれますか？",
      type: "multiple",
      options: [
        { id: "a", label: "負債" },
        { id: "b", label: "純資産" },
        { id: "c", label: "資産" },
        { id: "d", label: "収益" },
      ],
      correctAnswer: "c",
      explanation:
        "貸借対照表の左（借方）には「資産」、右（貸方）には「負債と純資産」が書かれるよ。",
    },
    {
      id: "g3-ch01-l02-q06",
      question: "次のうち「純資産」に含まれるものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "買掛金" },
        { id: "b", label: "資本金" },
        { id: "c", label: "売掛金" },
        { id: "d", label: "借入金" },
      ],
      correctAnswer: "b",
      explanation:
        "資本金はオーナーが会社に入れたお金で「純資産」の代表例だよ。買掛金・借入金は負債、売掛金は資産だ。",
    },
  ],

  "g3-ch01-l03": [
    {
      id: "g3-ch01-l03-q03",
      question: "次のうち「収益」にあたるものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "仕入" },
        { id: "b", label: "給料" },
        { id: "c", label: "受取利息" },
        { id: "d", label: "消耗品費" },
      ],
      correctAnswer: "c",
      explanation:
        "受取利息は「もらったお金」だから収益だよ。仕入・給料・消耗品費は全部「使ったお金（費用）」だ。",
    },
    {
      id: "g3-ch01-l03-q04",
      question: "損益計算書の左側（借方）には何が書かれますか？",
      type: "multiple",
      options: [
        { id: "a", label: "資産" },
        { id: "b", label: "収益" },
        { id: "c", label: "費用" },
        { id: "d", label: "負債" },
      ],
      correctAnswer: "c",
      explanation:
        "損益計算書は左（借方）に費用、右（貸方）に収益を書くよ。右が大きければ利益が出ているということだ。",
    },
    {
      id: "g3-ch01-l03-q05",
      question: "収益300万円、費用350万円のとき、結果はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "利益50万円" },
        { id: "b", label: "損失50万円" },
        { id: "c", label: "利益350万円" },
        { id: "d", label: "変わらない" },
      ],
      correctAnswer: "b",
      explanation:
        "収益より費用が多いと赤字（損失）になるよ。300−350＝−50万円、つまり50万円の損失だ。",
    },
    {
      id: "g3-ch01-l03-q06",
      question: "当期純利益が出たとき、貸借対照表の純資産はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "減る" },
        { id: "b", label: "変わらない" },
        { id: "c", label: "増える" },
        { id: "d", label: "なくなる" },
      ],
      correctAnswer: "c",
      explanation:
        "もうかった分（当期純利益）は会社の財産として積み上がるので、純資産が増えるよ。",
    },
  ],

  "g3-ch02-l01": [
    {
      id: "g3-ch02-l01-q04",
      question: "資産が増えた場合、仕訳のどちら側に書きますか？",
      type: "multiple",
      options: [
        { id: "a", label: "貸方（右）" },
        { id: "b", label: "借方（左）" },
        { id: "c", label: "どちらでもよい" },
        { id: "d", label: "書かなくてよい" },
      ],
      correctAnswer: "b",
      explanation:
        "資産が増えたら左（借方）に書くよ。「資産の増加＝借方」は仕訳の大前提だから絶対覚えておこう！",
    },
    {
      id: "g3-ch02-l01-q05",
      question: "収益が増えた場合、仕訳のどちら側に書きますか？",
      type: "multiple",
      options: [
        { id: "a", label: "借方（左）" },
        { id: "b", label: "貸方（右）" },
        { id: "c", label: "どちらでもよい" },
        { id: "d", label: "書かなくてよい" },
      ],
      correctAnswer: "b",
      explanation:
        "収益の増加は右（貸方）に書くよ。「負債・純資産・収益の増加は貸方」とまとめて覚えると便利だよ。",
    },
    {
      id: "g3-ch02-l01-q06",
      question: "建物200万円を現金で買った。借方に書く科目と金額は？",
      type: "multiple",
      options: [
        { id: "a", label: "現金 200万円" },
        { id: "b", label: "建物 200万円" },
        { id: "c", label: "仕入 200万円" },
        { id: "d", label: "資本金 200万円" },
      ],
      correctAnswer: "b",
      explanation:
        "建物（資産）が増えたから借方に「建物」を書くよ。現金（資産）は減ったので貸方に書く。",
    },
    {
      id: "g3-ch02-l01-q07",
      question: "仕訳で「借方合計≠貸方合計」になったとき、何が起きていますか？",
      type: "multiple",
      options: [
        { id: "a", label: "正しく仕訳できている" },
        { id: "b", label: "どこかに間違いがある" },
        { id: "c", label: "利益が出ている" },
        { id: "d", label: "損失が出ている" },
      ],
      correctAnswer: "b",
      explanation:
        "借方と貸方は必ず同じ金額になるルールだよ。一致しないときは金額の書き間違いや科目の選択ミスがあるサインだ。",
    },
  ],

  "g3-ch02-l02": [
    {
      id: "g3-ch02-l02-q02",
      question: "「転記」とはどんな作業ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金を数える作業" },
        { id: "b", label: "仕訳帳の内容を勘定口座に移す作業" },
        { id: "c", label: "商品を倉庫に移す作業" },
        { id: "d", label: "売上を計算する作業" },
      ],
      correctAnswer: "b",
      explanation:
        "転記とは仕訳帳に書いた内容を、科目ごとのページ（勘定口座）に書き写す作業だよ。",
    },
    {
      id: "g3-ch02-l02-q03",
      question: "残高試算表で、費用（例：給料）の残高はどちら側に書かれますか？",
      type: "multiple",
      options: [
        { id: "a", label: "貸方（右）" },
        { id: "b", label: "借方（左）" },
        { id: "c", label: "どちらにも書かない" },
        { id: "d", label: "どちらでもよい" },
      ],
      correctAnswer: "b",
      explanation:
        "費用の残高は借方（左）に書くよ。「資産・費用の残高＝借方」「負債・純資産・収益の残高＝貸方」と覚えよう！",
    },
    {
      id: "g3-ch02-l02-q04",
      question: "試算表の目的として正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "来月の売上を予測する" },
        { id: "b", label: "転記ミスがないか確認する" },
        { id: "c", label: "従業員の出勤を管理する" },
        { id: "d", label: "商品の在庫を確認する" },
      ],
      correctAnswer: "b",
      explanation:
        "試算表は全科目の残高を一覧にして「借方合計＝貸方合計」かを確かめるためのものだよ。一致すれば転記ミスなし！",
    },
    {
      id: "g3-ch02-l02-q05",
      question: "勘定口座（Tフォーム）で、現金の借方合計10万円・貸方合計3万円の場合、残高はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "13万円" },
        { id: "b", label: "3万円" },
        { id: "c", label: "7万円" },
        { id: "d", label: "10万円" },
      ],
      correctAnswer: "c",
      explanation:
        "現金（資産）の残高＝借方合計−貸方合計＝10−3＝7万円だよ。資産は借方残高になるから、大きい方から小さい方を引くんだ。",
    },
  ],

  "g3-ch03-l01": [
    {
      id: "g3-ch03-l01-q03",
      question: "現金過不足の原因が決算までに判明しなかったとき、どう処理しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "そのまま放置する" },
        { id: "b", label: "雑益または雑損に振り替える" },
        { id: "c", label: "売上に計上する" },
        { id: "d", label: "資本金から差し引く" },
      ],
      correctAnswer: "b",
      explanation:
        "原因がわからないまま決算を迎えたら「雑益（収益）」か「雑損（費用）」に振り替えるよ。どっちにするかは、現金が多いか少ないかで決まる。",
    },
    {
      id: "g3-ch03-l01-q04",
      question: "次のうち、簿記上「現金」として扱われないものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "紙幣（お札）" },
        { id: "b", label: "他人が振り出した小切手" },
        { id: "c", label: "約束手形" },
        { id: "d", label: "郵便為替証書" },
      ],
      correctAnswer: "c",
      explanation:
        "約束手形は「後で払いますよ」という約束の紙なので、すぐに換金できないんだ。だから現金扱いにならないよ。",
    },
    {
      id: "g3-ch03-l01-q05",
      question: "帳簿の現金残高より実際の現金が多かったとき、最初にする仕訳の貸方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "現金過不足" },
        { id: "b", label: "現金" },
        { id: "c", label: "雑益" },
        { id: "d", label: "雑損" },
      ],
      correctAnswer: "a",
      explanation:
        "実際が多い＝現金が増えている状態なので、借方：現金 / 貸方：現金過不足 と仕訳するよ。まず原因を調べるための「仮の勘定」を使うんだ。",
    },
    {
      id: "g3-ch03-l01-q06",
      question: "現金過不足200円が「水道代の記録漏れ」と判明した。修正仕訳の借方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "現金" },
        { id: "b", label: "水道光熱費" },
        { id: "c", label: "現金過不足" },
        { id: "d", label: "雑損" },
      ],
      correctAnswer: "c",
      explanation:
        "原因が判明したら「現金過不足」を取り消して正しい科目に振り替えるよ。借方：現金過不足200 / 貸方：水道光熱費200 だ。",
    },
  ],

  "g3-ch03-l02": [
    {
      id: "g3-ch03-l02-q02",
      question: "小切手を振り出して仕入代金を支払ったとき、貸方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金" },
        { id: "b", label: "受取手形" },
        { id: "c", label: "当座預金" },
        { id: "d", label: "支払手形" },
      ],
      correctAnswer: "c",
      explanation:
        "自分が小切手を振り出すと当座預金から引き落とされるから、貸方に「当座預金（資産の減少）」を書くよ。",
    },
    {
      id: "g3-ch03-l02-q03",
      question: "当座預金と普通預金の違いとして正しいものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "当座預金には利息がつく" },
        { id: "b", label: "普通預金は小切手で決済できる" },
        { id: "c", label: "当座預金は主に小切手・手形の決済に使う" },
        { id: "d", label: "どちらも同じ" },
      ],
      correctAnswer: "c",
      explanation:
        "当座預金は商取引の決済（小切手・手形）専用で利息なし。普通預金は日常の入出金用で少し利息がつくよ。",
    },
    {
      id: "g3-ch03-l02-q04",
      question: "当座借越とはどんな状態ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "当座預金に多くのお金が入っている状態" },
        { id: "b", label: "当座預金がマイナスになった状態（借入）" },
        { id: "c", label: "小切手を受け取った状態" },
        { id: "d", label: "利息を受け取った状態" },
      ],
      correctAnswer: "b",
      explanation:
        "当座預金の残高を超えて小切手を振り出すと当座借越（負債）になるよ。銀行が立て替えてくれているイメージだ。",
    },
    {
      id: "g3-ch03-l02-q05",
      question: "普通預金に利息500円が入金された。正しい仕訳はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "借方：現金500 / 貸方：受取利息500" },
        { id: "b", label: "借方：普通預金500 / 貸方：受取利息500" },
        { id: "c", label: "借方：受取利息500 / 貸方：普通預金500" },
        { id: "d", label: "借方：普通預金500 / 貸方：支払利息500" },
      ],
      correctAnswer: "b",
      explanation:
        "普通預金（資産）が増えたから借方に書き、もらった利息は収益（受取利息）だから貸方に書くよ。",
    },
  ],

  "g3-ch04-l01": [
    {
      id: "g3-ch04-l01-q03",
      question: "商品を掛けで売り上げた（100,000円）。貸方科目は何ですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金" },
        { id: "b", label: "仕入" },
        { id: "c", label: "売上" },
        { id: "d", label: "買掛金" },
      ],
      correctAnswer: "c",
      explanation:
        "商品を売るとお店に収益（売上）が入るから、貸方に「売上」を書くよ。代金が未回収なら借方は「売掛金」だ。",
    },
    {
      id: "g3-ch04-l01-q04",
      question: "仕入れた商品の一部（5,000円分）に傷があったので返品した。仕訳の貸方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "仕入" },
        { id: "b", label: "買掛金" },
        { id: "c", label: "売上" },
        { id: "d", label: "現金" },
      ],
      correctAnswer: "b",
      explanation:
        "返品すると仕入が減る（借方：買掛金 / 貸方：仕入）よ。掛けで買っていたなら買掛金も減るから借方に買掛金が来るんだ。",
    },
    {
      id: "g3-ch04-l01-q05",
      question: "三分法で使う3つの勘定科目を正しく選んでいるものはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "現金・売掛金・買掛金" },
        { id: "b", label: "仕入・売上・繰越商品" },
        { id: "c", label: "商品・売上・費用" },
        { id: "d", label: "仕入・現金・利益" },
      ],
      correctAnswer: "b",
      explanation:
        "三分法の3つは「仕入（費用）・売上（収益）・繰越商品（資産）」だよ。この3つを使って商品売買を記録するんだ。",
    },
    {
      id: "g3-ch04-l01-q06",
      question: "決算で「繰越商品」勘定が使われる理由はなぜですか？",
      type: "multiple",
      options: [
        { id: "a", label: "当期に売れた商品を記録するため" },
        { id: "b", label: "期末に売れ残った在庫を記録するため" },
        { id: "c", label: "仕入代金を記録するため" },
        { id: "d", label: "売上代金を記録するため" },
      ],
      correctAnswer: "b",
      explanation:
        "繰越商品は「期末の在庫（売れ残り）」を記録する資産勘定だよ。在庫はまだ売れていないから費用（仕入）にはしないんだ。",
    },
  ],

  "g3-ch04-l02": [
    {
      id: "g3-ch04-l02-q02",
      question: "仕入諸掛りを相手側（売り手）が負担してくれた場合、買い手の仕入金額はどうなりますか？",
      type: "multiple",
      options: [
        { id: "a", label: "運送費分が加算される" },
        { id: "b", label: "運送費分が差し引かれる" },
        { id: "c", label: "変わらない（商品代金のみ）" },
        { id: "d", label: "半額になる" },
      ],
      correctAnswer: "c",
      explanation:
        "売り手が運送費を負担してくれるなら、買い手は商品代金だけを仕入金額にすればよいよ。追加のコストは発生しない。",
    },
    {
      id: "g3-ch04-l02-q03",
      question: "商品80,000円を仕入れ、当社負担の運送費2,000円を現金で払った。仕入の金額はいくらですか？",
      type: "multiple",
      options: [
        { id: "a", label: "78,000円" },
        { id: "b", label: "80,000円" },
        { id: "c", label: "82,000円" },
        { id: "d", label: "2,000円" },
      ],
      correctAnswer: "c",
      explanation:
        "当社が負担する諸掛りは仕入原価に加えるよ。80,000＋2,000＝82,000円が仕入金額だ。",
    },
    {
      id: "g3-ch04-l02-q04",
      question: "売り手が負担した発送費（当社側）を計上するとき使う費用科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "仕入" },
        { id: "b", label: "売上" },
        { id: "c", label: "発送費" },
        { id: "d", label: "運搬費収入" },
      ],
      correctAnswer: "c",
      explanation:
        "自社が負担して発送する費用は「発送費（費用）」として処理するよ。仕入には含めない。",
    },
  ],

  "g3-ch05-l01": [
    {
      id: "g3-ch05-l01-q02",
      question: "売掛金はなぜ「資産」なのですか？",
      type: "multiple",
      options: [
        { id: "a", label: "後でお金を払う義務があるから" },
        { id: "b", label: "後でお金を受け取る権利があるから" },
        { id: "c", label: "商品を持っているから" },
        { id: "d", label: "銀行にお金を預けているから" },
      ],
      correctAnswer: "b",
      explanation:
        "売掛金は「後でお金を受け取れる権利」だよ。権利（もらえるもの）は資産に分類されるんだ。",
    },
    {
      id: "g3-ch05-l01-q03",
      question: "買掛金50,000円を小切手を振り出して支払った。正しい仕訳はどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "借方：当座預金50,000 / 貸方：買掛金50,000" },
        { id: "b", label: "借方：買掛金50,000 / 貸方：当座預金50,000" },
        { id: "c", label: "借方：現金50,000 / 貸方：買掛金50,000" },
        { id: "d", label: "借方：買掛金50,000 / 貸方：現金50,000" },
      ],
      correctAnswer: "b",
      explanation:
        "買掛金（負債）が減るから借方に書いて、小切手を振り出すと当座預金（資産）が減るから貸方に書くよ。",
    },
    {
      id: "g3-ch05-l01-q04",
      question: "売掛金の回収が遅れているお客さんがいる。この売掛金はどの帳簿で管理しますか？",
      type: "multiple",
      options: [
        { id: "a", label: "仕訳帳" },
        { id: "b", label: "現金出納帳" },
        { id: "c", label: "売掛金元帳（得意先元帳）" },
        { id: "d", label: "商品有高帳" },
      ],
      correctAnswer: "c",
      explanation:
        "取引先ごとの売掛金残高は「売掛金元帳（得意先元帳）」で管理するよ。誰からいくら回収できていないかがわかる帳簿だ。",
    },
    {
      id: "g3-ch05-l01-q05",
      question: "商品20,000円を掛けで売った。次に正しいのはどれですか？",
      type: "multiple",
      options: [
        { id: "a", label: "借方：売上20,000 / 貸方：現金20,000" },
        { id: "b", label: "借方：売掛金20,000 / 貸方：売上20,000" },
        { id: "c", label: "借方：買掛金20,000 / 貸方：売上20,000" },
        { id: "d", label: "借方：現金20,000 / 貸方：売掛金20,000" },
      ],
      correctAnswer: "b",
      explanation:
        "掛けで売ったからまだ現金は来ていない。「後でもらえる権利（売掛金）」が増えたので借方に書き、売ったから売上（収益）を貸方に書くよ。",
    },
  ],

  "g3-ch05-l02": [
    {
      id: "g3-ch05-l02-q02",
      question: "備品（商品ではない）を50,000円で売り、代金は来月受け取る予定。借方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "売掛金" },
        { id: "b", label: "未収入金" },
        { id: "c", label: "前払金" },
        { id: "d", label: "前受金" },
      ],
      correctAnswer: "b",
      explanation:
        "商品以外のものを売ってまだ代金をもらっていないときは「未収入金（資産）」を使うよ。売掛金は商品の売上専用だ。",
    },
    {
      id: "g3-ch05-l02-q03",
      question: "従業員の給料から源泉所得税10,000円を差し引いた。この10,000円の仕訳の貸方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "現金" },
        { id: "b", label: "立替金" },
        { id: "c", label: "預り金" },
        { id: "d", label: "未払金" },
      ],
      correctAnswer: "c",
      explanation:
        "会社が一時的に従業員の税金を預かっているので「預り金（負債）」だよ。後で税務署に納めるためのお金を預かっているイメージだ。",
    },
    {
      id: "g3-ch05-l02-q04",
      question: "商品の手付金として先に30,000円を払った（まだ商品は届いていない）。借方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "仕入" },
        { id: "b", label: "前払金" },
        { id: "c", label: "前受金" },
        { id: "d", label: "未払金" },
      ],
      correctAnswer: "b",
      explanation:
        "まだ商品が届いていないのに先払いしたお金は「前払金（資産）」だよ。商品が届いたときに仕入に振り替えるんだ。",
    },
    {
      id: "g3-ch05-l02-q05",
      question: "同僚の交通費3,000円を一時的に立て替えた。借方科目は？",
      type: "multiple",
      options: [
        { id: "a", label: "交通費" },
        { id: "b", label: "預り金" },
        { id: "c", label: "立替金" },
        { id: "d", label: "未払金" },
      ],
      correctAnswer: "c",
      explanation:
        "他の人の代わりに払ったお金は「立替金（資産）」だよ。後で返してもらえる権利があるから資産なんだ。",
    },
  ],
};
