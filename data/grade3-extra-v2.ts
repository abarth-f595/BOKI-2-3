import { Quiz } from "@/types";

/** Grade3 追加問題 v2 — 各レッスンに10〜15問追加 */
export const grade3ExtraV2: Record<string, Quiz[]> = {

  /* ─── Ch01-L01: 簿記とは ─── */
  "g3-ch01-l01": [
    { id:"g3-ch01-l01-v2-q01", question:"簿記の「複式」とは何を意味するか？", type:"multiple",
      options:[{id:"a",label:"2社以上が関わる取引"},{id:"b",label:"1取引を借方・貸方の2か所に記録"},{id:"c",label:"2冊の帳簿を使う"},{id:"d",label:"2種類の書類を作る"}],
      correctAnswer:"b", explanation:"複式簿記は1つの取引を必ず借方（左）と貸方（右）の2か所に記録します。これにより自動チェック機能が生まれます。"},
    { id:"g3-ch01-l01-v2-q02", question:"「仕訳→転記→試算表→決算→財務諸表」の流れで、仕訳の次に行う作業は？", type:"multiple",
      options:[{id:"a",label:"試算表の作成"},{id:"b",label:"決算整理"},{id:"c",label:"総勘定元帳への転記"},{id:"d",label:"財務諸表の作成"}],
      correctAnswer:"c", explanation:"仕訳帳に記録した後は、各勘定科目のページ（総勘定元帳）に転記します。"},
    { id:"g3-ch01-l01-v2-q03", question:"簿記で「取引」として記録するものはどれか？", type:"multiple",
      options:[{id:"a",label:"新製品のアイデアを思いついた"},{id:"b",label:"取引先と口頭で契約した"},{id:"c",label:"現金100,000円を銀行から借り入れた"},{id:"d",label:"従業員を採用することを決定した"}],
      correctAnswer:"c", explanation:"簿記の「取引」は資産・負債・純資産・収益・費用のいずれかが実際に増減する出来事です。現金を借り入れると現金（資産）と借入金（負債）の両方が増えます。"},
    { id:"g3-ch01-l01-v2-q04", question:"複式簿記の最大のメリットとして正しいのはどれか？", type:"multiple",
      options:[{id:"a",label:"帳簿が1冊で済む"},{id:"b",label:"借方と貸方が必ず一致するため間違いを発見しやすい"},{id:"c",label:"税金が安くなる"},{id:"d",label:"現金のみを管理できる"}],
      correctAnswer:"b", explanation:"複式簿記では借方合計＝貸方合計が常に成立するため、ミスがあると不一致として発見できます。"},
    { id:"g3-ch01-l01-v2-q05", question:"日本の企業会計基準で採用されている簿記の方式はどれか？", type:"multiple",
      options:[{id:"a",label:"単式簿記"},{id:"b",label:"複式簿記"},{id:"c",label:"家計簿式"},{id:"d",label:"現金主義簿記"}],
      correctAnswer:"b", explanation:"日本の企業は「複式簿記」を採用しています。家計簿などは単式簿記です。"},
  ],

  /* ─── Ch01-L02: 資産・負債・純資産 ─── */
  "g3-ch01-l02": [
    { id:"g3-ch01-l02-v2-q01", question:"次のうち「純資産」に分類されるものはどれか？", type:"multiple",
      options:[{id:"a",label:"未払金"},{id:"b",label:"資本金"},{id:"c",label:"売掛金"},{id:"d",label:"借入金"}],
      correctAnswer:"b", explanation:"資本金は株主から出資された元手であり、純資産（自己資本）に分類されます。"},
    { id:"g3-ch01-l02-v2-q02", question:"資産600万円、負債250万円のとき純資産はいくらか？", type:"multiple",
      options:[{id:"a",label:"350万円"},{id:"b",label:"850万円"},{id:"c",label:"250万円"},{id:"d",label:"600万円"}],
      correctAnswer:"a", explanation:"純資産＝資産－負債＝600万円－250万円＝350万円です。"},
    { id:"g3-ch01-l02-v2-q03", question:"「買掛金」はどの要素に分類されるか？", type:"multiple",
      options:[{id:"a",label:"資産"},{id:"b",label:"負債"},{id:"c",label:"純資産"},{id:"d",label:"収益"}],
      correctAnswer:"b", explanation:"買掛金は商品を掛けで仕入れた際に発生する「後で支払う義務」なので負債です。"},
    { id:"g3-ch01-l02-v2-q04", question:"貸借対照表の左側（借方）に記載されるのはどれか？", type:"multiple",
      options:[{id:"a",label:"負債"},{id:"b",label:"純資産"},{id:"c",label:"資産"},{id:"d",label:"収益"}],
      correctAnswer:"c", explanation:"貸借対照表の左側（借方）には資産が記載されます。右側（貸方）に負債と純資産が記載されます。"},
    { id:"g3-ch01-l02-v2-q05", question:"「受取手形」はどの要素に分類されるか？", type:"multiple",
      options:[{id:"a",label:"収益"},{id:"b",label:"負債"},{id:"c",label:"費用"},{id:"d",label:"資産"}],
      correctAnswer:"d", explanation:"受取手形は後で現金を受け取る権利なので資産です。"},
    { id:"g3-ch01-l02-v2-q06", question:"「繰越利益剰余金」はどの要素に分類されるか？", type:"multiple",
      options:[{id:"a",label:"資産"},{id:"b",label:"負債"},{id:"c",label:"純資産"},{id:"d",label:"費用"}],
      correctAnswer:"c", explanation:"繰越利益剰余金は過去の利益の蓄積であり、純資産（自己資本）に含まれます。"},
  ],

  /* ─── Ch01-L03: 収益・費用 ─── */
  "g3-ch01-l03": [
    { id:"g3-ch01-l03-v2-q01", question:"収益1,000万円、費用700万円のとき、当期純利益はいくらか？", type:"multiple",
      options:[{id:"a",label:"700万円"},{id:"b",label:"1,700万円"},{id:"c",label:"300万円"},{id:"d",label:"△300万円"}],
      correctAnswer:"c", explanation:"当期純利益＝収益－費用＝1,000万円－700万円＝300万円です。"},
    { id:"g3-ch01-l03-v2-q02", question:"損益計算書の左側（借方）に記載されるのはどれか？", type:"multiple",
      options:[{id:"a",label:"収益"},{id:"b",label:"費用"},{id:"c",label:"資産"},{id:"d",label:"負債"}],
      correctAnswer:"b", explanation:"損益計算書の左側（借方）に費用、右側（貸方）に収益が記載されます。"},
    { id:"g3-ch01-l03-v2-q03", question:"次のうち「収益」に分類されるものはどれか？", type:"multiple",
      options:[{id:"a",label:"支払利息"},{id:"b",label:"広告宣伝費"},{id:"c",label:"受取地代"},{id:"d",label:"保険料"}],
      correctAnswer:"c", explanation:"受取地代は土地を貸して受け取る収入なので収益です。支払利息・広告宣伝費・保険料は費用です。"},
    { id:"g3-ch01-l03-v2-q04", question:"当期純損失が発生した場合、損益計算書の記載はどうなるか？", type:"multiple",
      options:[{id:"a",label:"費用が収益を上回る"},{id:"b",label:"収益が費用を上回る"},{id:"c",label:"費用と収益が等しい"},{id:"d",label:"収益がゼロになる"}],
      correctAnswer:"a", explanation:"費用＞収益のとき「当期純損失」が発生します。損益計算書では費用合計が収益合計を上回ります。"},
  ],

  /* ─── Ch02-L01: 仕訳の基本ルール ─── */
  "g3-ch02-l01": [
    { id:"g3-ch02-l01-v2-q01", question:"給料50,000円を現金で支払った。借方科目は何か？", type:"multiple",
      options:[{id:"a",label:"現金"},{id:"b",label:"給料"},{id:"c",label:"売上"},{id:"d",label:"資本金"}],
      correctAnswer:"b", explanation:"給料（費用）が増加するので借方に「給料」を計上。貸方は現金（資産の減少）です。"},
    { id:"g3-ch02-l01-v2-q02", question:"現金30,000円を元手に事業を始めた。正しい仕訳はどれか？", type:"multiple",
      options:[{id:"a",label:"借方：現金30,000 / 貸方：資本金30,000"},{id:"b",label:"借方：資本金30,000 / 貸方：現金30,000"},{id:"c",label:"借方：現金30,000 / 貸方：売上30,000"},{id:"d",label:"借方：売上30,000 / 貸方：現金30,000"}],
      correctAnswer:"a", explanation:"現金（資産）増加→借方、資本金（純資産）増加→貸方です。"},
    { id:"g3-ch02-l01-v2-q03", question:"借入金100,000円を現金で返済した。貸方科目は何か？", type:"multiple",
      options:[{id:"a",label:"借入金"},{id:"b",label:"現金"},{id:"c",label:"支払利息"},{id:"d",label:"売掛金"}],
      correctAnswer:"b", explanation:"現金（資産）が減少するので貸方に「現金」。借方は借入金（負債の減少）です。"},
    { id:"g3-ch02-l01-v2-q04", question:"備品200,000円を掛けで購入した。正しい仕訳はどれか？", type:"multiple",
      options:[{id:"a",label:"借方：備品200,000 / 貸方：未払金200,000"},{id:"b",label:"借方：備品200,000 / 貸方：買掛金200,000"},{id:"c",label:"借方：仕入200,000 / 貸方：買掛金200,000"},{id:"d",label:"借方：消耗品費200,000 / 貸方：未払金200,000"}],
      correctAnswer:"a", explanation:"備品（固定資産=商品以外）の掛け購入は「未払金（負債）」を使います。買掛金は商品の掛け仕入れのときに使います。"},
    { id:"g3-ch02-l01-v2-q05", question:"収益が増加した場合の仕訳はどちら側か？", type:"truefalse",
      options:[{id:"a",label:"借方（左）"},{id:"b",label:"貸方（右）"}],
      correctAnswer:"b", explanation:"収益の増加は貸方（右側）に記録します。「負債・純資産・収益の増加→貸方」のルールです。"},
    { id:"g3-ch02-l01-v2-q06", question:"商品を現金で売り上げた場合の正しい仕訳はどれか？", type:"multiple",
      options:[{id:"a",label:"借方：売上 / 貸方：現金"},{id:"b",label:"借方：現金 / 貸方：売上"},{id:"c",label:"借方：仕入 / 貸方：現金"},{id:"d",label:"借方：現金 / 貸方：仕入"}],
      correctAnswer:"b", explanation:"現金（資産）増加→借方、売上（収益）増加→貸方です。"},
  ],

  /* ─── Ch02-L02: 転記と試算表 ─── */
  "g3-ch02-l02": [
    { id:"g3-ch02-l02-v2-q01", question:"転記とは何を指すか？", type:"multiple",
      options:[{id:"a",label:"取引を仕訳帳に記録する作業"},{id:"b",label:"仕訳帳の内容を総勘定元帳に移す作業"},{id:"c",label:"試算表から財務諸表を作成する作業"},{id:"d",label:"決算整理仕訳を行う作業"}],
      correctAnswer:"b", explanation:"転記とは仕訳帳に記録した内容を各勘定口座（総勘定元帳）に移す作業です。"},
    { id:"g3-ch02-l02-v2-q02", question:"勘定口座（T字型）において、資産勘定の残高はどちらに現れるか？", type:"truefalse",
      options:[{id:"a",label:"借方（左）"},{id:"b",label:"貸方（右）"}],
      correctAnswer:"a", explanation:"資産の増加は借方なので、通常は借方残高（左超過）になります。"},
    { id:"g3-ch02-l02-v2-q03", question:"合計試算表・残高試算表・合計残高試算表のうち、各勘定の残高のみを集計したものはどれか？", type:"multiple",
      options:[{id:"a",label:"合計試算表"},{id:"b",label:"残高試算表"},{id:"c",label:"合計残高試算表"},{id:"d",label:"精算表"}],
      correctAnswer:"b", explanation:"残高試算表は各勘定口座の残高（借方合計－貸方合計）のみを集計した一覧表です。"},
  ],

  /* ─── Ch03-L01: 現金の処理 ─── */
  "g3-ch03-l01": [
    { id:"g3-ch03-l01-v2-q01", question:"次のうち簿記上「現金」として処理しないものはどれか？", type:"multiple",
      options:[{id:"a",label:"他人振出の小切手"},{id:"b",label:"郵便為替証書"},{id:"c",label:"定期預金証書"},{id:"d",label:"配当金領収書"}],
      correctAnswer:"c", explanation:"定期預金証書は満期まで引き出せないため、「現金」ではなく「定期預金（資産）」として処理します。"},
    { id:"g3-ch03-l01-v2-q02", question:"帳簿残高5,000円、実際現金5,200円のとき、現金過不足の仕訳の貸方科目は？", type:"multiple",
      options:[{id:"a",label:"現金過不足"},{id:"b",label:"現金"},{id:"c",label:"雑損"},{id:"d",label:"雑益"}],
      correctAnswer:"a", explanation:"実際＞帳簿なので現金が200円多い。借方：現金200 / 貸方：現金過不足200 と仕訳します。"},
    { id:"g3-ch03-l01-v2-q03", question:"現金過不足の原因が決算時まで不明のとき、借方に残っている場合の決算仕訳の借方科目は？", type:"multiple",
      options:[{id:"a",label:"雑益"},{id:"b",label:"雑損"},{id:"c",label:"現金"},{id:"d",label:"雑費"}],
      correctAnswer:"b", explanation:"現金過不足の借方残高（現金不足）が原因不明の場合、決算で「雑損（費用）」へ振り替えます。"},
    { id:"g3-ch03-l01-v2-q04", question:"自分（自社）が振り出した小切手を受け取った。どの科目で処理するか？", type:"multiple",
      options:[{id:"a",label:"現金"},{id:"b",label:"当座預金"},{id:"c",label:"受取手形"},{id:"d",label:"売掛金"}],
      correctAnswer:"b", explanation:"自社が振り出した小切手を受け取った（未渡し小切手の回収）場合は「当座預金」として処理します。"},
  ],

  /* ─── Ch03-L02: 当座預金 ─── */
  "g3-ch03-l02": [
    { id:"g3-ch03-l02-v2-q01", question:"普通預金と当座預金の違いとして正しいものはどれか？", type:"multiple",
      options:[{id:"a",label:"普通預金は利息がなく、当座預金は利息がある"},{id:"b",label:"普通預金は利息があり、当座預金は原則利息がない"},{id:"c",label:"どちらも利息がない"},{id:"d",label:"どちらも利息がある"}],
      correctAnswer:"b", explanation:"普通預金には利息（普通預金利息）がつきますが、当座預金は原則として利息がありません。"},
    { id:"g3-ch03-l02-v2-q02", question:"当座預金残高が20,000円のとき、30,000円の小切手を振り出した。当座借越額はいくらか？", type:"multiple",
      options:[{id:"a",label:"10,000円"},{id:"b",label:"20,000円"},{id:"c",label:"30,000円"},{id:"d",label:"50,000円"}],
      correctAnswer:"a", explanation:"当座借越額＝30,000円－20,000円＝10,000円です。当座借越（負債）が10,000円生じます。"},
    { id:"g3-ch03-l02-v2-q03", question:"当座借越はどの要素に分類されるか？", type:"multiple",
      options:[{id:"a",label:"資産"},{id:"b",label:"負債"},{id:"c",label:"純資産"},{id:"d",label:"費用"}],
      correctAnswer:"b", explanation:"当座借越は銀行から一時的に借り入れた状態なので「負債」です。"},
  ],

  /* ─── Ch04-L01: 三分法 ─── */
  "g3-ch04-l01": [
    { id:"g3-ch04-l01-v2-q01", question:"三分法で使わない勘定科目はどれか？", type:"multiple",
      options:[{id:"a",label:"仕入"},{id:"b",label:"売上"},{id:"c",label:"商品"},{id:"d",label:"繰越商品"}],
      correctAnswer:"c", explanation:"三分法では「仕入・売上・繰越商品」の3つを使います。「商品」という勘定は分記法で使います。"},
    { id:"g3-ch04-l01-v2-q02", question:"商品を仕入れて代金を現金で支払ったときの貸方科目は？", type:"multiple",
      options:[{id:"a",label:"仕入"},{id:"b",label:"売上"},{id:"c",label:"現金"},{id:"d",label:"買掛金"}],
      correctAnswer:"c", explanation:"現金（資産）が減少するので貸方に「現金」を計上します。"},
    { id:"g3-ch04-l01-v2-q03", question:"商品を掛けで売り上げた場合、仕訳の貸方科目は？", type:"multiple",
      options:[{id:"a",label:"売掛金"},{id:"b",label:"買掛金"},{id:"c",label:"売上"},{id:"d",label:"仕入"}],
      correctAnswer:"c", explanation:"売上（収益）が増加するので貸方に「売上」を計上します。借方は売掛金（資産の増加）です。"},
    { id:"g3-ch04-l01-v2-q04", question:"仕入れた商品の一部を返品した場合の仕訳の貸方科目はどれか？", type:"multiple",
      options:[{id:"a",label:"仕入"},{id:"b",label:"買掛金"},{id:"c",label:"売上"},{id:"d",label:"現金"}],
      correctAnswer:"a", explanation:"返品により仕入（費用）が減少するので貸方に「仕入」を計上します。借方は買掛金（負債の減少）です。"},
  ],

  /* ─── Ch05-L01: 売掛金・買掛金 ─── */
  "g3-ch05-l01": [
    { id:"g3-ch05-l01-v2-q01", question:"買掛金200,000円を普通預金から振り込んで支払った。正しい仕訳はどれか？", type:"multiple",
      options:[{id:"a",label:"借方：買掛金200,000 / 貸方：普通預金200,000"},{id:"b",label:"借方：普通預金200,000 / 貸方：買掛金200,000"},{id:"c",label:"借方：売掛金200,000 / 貸方：普通預金200,000"},{id:"d",label:"借方：普通預金200,000 / 貸方：売掛金200,000"}],
      correctAnswer:"a", explanation:"買掛金（負債）が減少するので借方に「買掛金」。普通預金（資産）が減少するので貸方に「普通預金」です。"},
    { id:"g3-ch05-l01-v2-q02", question:"掛け販売した商品の一部（5,000円分）が返品された。借方科目は？", type:"multiple",
      options:[{id:"a",label:"売上"},{id:"b",label:"売掛金"},{id:"c",label:"仕入"},{id:"d",label:"買掛金"}],
      correctAnswer:"a", explanation:"返品により売上（収益）が減少するので借方に「売上」を計上。貸方は売掛金（資産の減少）です。"},
    { id:"g3-ch05-l01-v2-q03", question:"得意先へ商品を掛けで売り上げた直後の売掛金元帳の残高はどうなるか？", type:"multiple",
      options:[{id:"a",label:"減少する"},{id:"b",label:"増加する"},{id:"c",label:"変わらない"},{id:"d",label:"ゼロになる"}],
      correctAnswer:"b", explanation:"掛けで売り上げると売掛金（資産）が増加するので、売掛金元帳の残高も増加します。"},
  ],

  /* ─── Ch05-L02: その他の債権債務 ─── */
  "g3-ch05-l02": [
    { id:"g3-ch05-l02-v2-q01", question:"従業員の給料から源泉所得税3,000円を差し引いて支払った。「預り金」は借方・貸方どちらに記載されるか？", type:"truefalse",
      options:[{id:"a",label:"借方"},{id:"b",label:"貸方"}],
      correctAnswer:"b", explanation:"預り金（負債）が増加するので貸方に記載します。仕訳：借方：給料 / 貸方：預り金・現金"},
    { id:"g3-ch05-l02-v2-q02", question:"商品（固定資産ではない）の注文に対し手付金20,000円を現金で支払った。借方科目は？", type:"multiple",
      options:[{id:"a",label:"前払金"},{id:"b",label:"前受金"},{id:"c",label:"買掛金"},{id:"d",label:"仕入"}],
      correctAnswer:"a", explanation:"商品受取前に支払った手付金は「前払金（資産）」です。"},
    { id:"g3-ch05-l02-v2-q03", question:"「未収入金」はどのような取引で使われるか？", type:"multiple",
      options:[{id:"a",label:"商品を掛けで売り上げたとき"},{id:"b",label:"商品以外の固定資産などを売り、代金未収のとき"},{id:"c",label:"商品の手付金を受け取ったとき"},{id:"d",label:"従業員の給料を立て替えたとき"}],
      correctAnswer:"b", explanation:"未収入金は「商品以外」の売却代金未収のときに使います。商品の掛け売りは「売掛金」を使います。"},
  ],

  /* ─── Ch06-L01: 約束手形 ─── */
  "g3-ch06-l01": [
    { id:"g3-ch06-l01-v2-q01", question:"商品を売り上げて約束手形を受け取った。借方科目は？", type:"multiple",
      options:[{id:"a",label:"支払手形"},{id:"b",label:"受取手形"},{id:"c",label:"売掛金"},{id:"d",label:"当座預金"}],
      correctAnswer:"b", explanation:"手形を受け取った側は「受取手形（資産）」を借方に計上します。"},
    { id:"g3-ch06-l01-v2-q02", question:"受取手形が満期になり、当座預金に入金された。借方科目は？", type:"multiple",
      options:[{id:"a",label:"受取手形"},{id:"b",label:"支払手形"},{id:"c",label:"当座預金"},{id:"d",label:"売上"}],
      correctAnswer:"c", explanation:"当座預金（資産）が増加するので借方に「当座預金」。貸方は受取手形（資産の減少）です。"},
    { id:"g3-ch06-l01-v2-q03", question:"手形の裏書譲渡とは何か？", type:"multiple",
      options:[{id:"a",label:"手形を銀行に売却すること"},{id:"b",label:"手形の裏に署名して第三者に譲渡すること"},{id:"c",label:"手形の金額を書き換えること"},{id:"d",label:"手形を無効にすること"}],
      correctAnswer:"b", explanation:"裏書譲渡とは受取手形の裏面に署名・捺印して第三者に渡す行為です。買掛金などの支払いに使います。"},
    { id:"g3-ch06-l01-v2-q04", question:"受取手形を銀行で割り引いた場合の借方科目は？", type:"multiple",
      options:[{id:"a",label:"受取手形"},{id:"b",label:"当座預金"},{id:"c",label:"支払手形"},{id:"d",label:"割引料"}],
      correctAnswer:"b", explanation:"手形割引では銀行から現金（当座預金）を受け取ります。割引料（費用）も計上します。"},
  ],

  /* ─── Ch07-L01: 固定資産 ─── */
  "g3-ch07-l01": [
    { id:"g3-ch07-l01-v2-q01", question:"固定資産の取得原価に含まれないものはどれか？", type:"multiple",
      options:[{id:"a",label:"購入代金"},{id:"b",label:"設置費用"},{id:"c",label:"購入後の修繕費（資本的支出を除く）"},{id:"d",label:"引取運賃"}],
      correctAnswer:"c", explanation:"取得原価は購入代金＋付随費用（設置費・引取運賃など）です。購入後の修繕費（収益的支出）は費用として処理します。"},
    { id:"g3-ch07-l01-v2-q02", question:"取得価額800,000円、残存価額80,000円、耐用年数8年の場合の年間減価償却費（定額法）は？", type:"multiple",
      options:[{id:"a",label:"90,000円"},{id:"b",label:"100,000円"},{id:"c",label:"80,000円"},{id:"d",label:"720,000円"}],
      correctAnswer:"a", explanation:"(800,000－80,000)÷8年＝90,000円です。"},
    { id:"g3-ch07-l01-v2-q03", question:"間接法で減価償却を行う場合の貸方科目は何か？", type:"multiple",
      options:[{id:"a",label:"固定資産"},{id:"b",label:"減価償却費"},{id:"c",label:"減価償却累計額"},{id:"d",label:"現金"}],
      correctAnswer:"c", explanation:"間接法では「減価償却累計額（資産のマイナス）」を貸方に計上します。直接法では固定資産を直接減らします。"},
    { id:"g3-ch07-l01-v2-q04", question:"固定資産を売却したとき、帳簿価額＜売却価額の場合、差額はどの科目か？", type:"multiple",
      options:[{id:"a",label:"固定資産売却損"},{id:"b",label:"固定資産売却益"},{id:"c",label:"雑損"},{id:"d",label:"雑益"}],
      correctAnswer:"b", explanation:"帳簿価額より高く売れた場合は「固定資産売却益（収益）」が発生します。"},
    { id:"g3-ch07-l01-v2-q05", question:"期中（7月1日）に取得した資産の当期（4月〜3月）の減価償却費を月割計算する場合、何か月分か？", type:"multiple",
      options:[{id:"a",label:"12か月分"},{id:"b",label:"9か月分"},{id:"c",label:"6か月分"},{id:"d",label:"3か月分"}],
      correctAnswer:"b", explanation:"7月〜3月＝9か月分になります。年間償却費×9/12で計算します。"},
  ],

  /* ─── Ch08-L01: 繰延・見越 ─── */
  "g3-ch08-l01": [
    { id:"g3-ch08-l01-v2-q01", question:"当期分の利息5,000円がまだ未払い。決算整理仕訳の貸方科目は？", type:"multiple",
      options:[{id:"a",label:"支払利息"},{id:"b",label:"未払利息"},{id:"c",label:"前払利息"},{id:"d",label:"未収利息"}],
      correctAnswer:"b", explanation:"当期分の費用がまだ未払い→「未払費用（負債）」を計上。借方：支払利息5,000 / 貸方：未払利息5,000"},
    { id:"g3-ch08-l01-v2-q02", question:"受取家賃を1年分120,000円受け取ったが、うち次期分が30,000円含まれる。決算整理仕訳の借方科目は？", type:"multiple",
      options:[{id:"a",label:"受取家賃"},{id:"b",label:"前受家賃"},{id:"c",label:"前払家賃"},{id:"d",label:"未収家賃"}],
      correctAnswer:"a", explanation:"受け取っている収益のうち次期分を負債（前受家賃）へ振り替えます。借方：受取家賃30,000 / 貸方：前受家賃30,000"},
    { id:"g3-ch08-l01-v2-q03", question:"前期に計上した「前払保険料（資産）」は、翌期首にどのように処理するか？", type:"multiple",
      options:[{id:"a",label:"そのまま資産として継続計上"},{id:"b",label:"再振替仕訳で費用（保険料）に戻す"},{id:"c",label:"期首に取り消しのみ行う"},{id:"d",label:"何も処理しない"}],
      correctAnswer:"b", explanation:"翌期首に「再振替仕訳」を行い、前払費用（資産）→費用（保険料）へ戻します。"},
    { id:"g3-ch08-l01-v2-q04", question:"当期分の利息収入3,000円がまだ未収。決算整理仕訳の借方科目は？", type:"multiple",
      options:[{id:"a",label:"未収利息"},{id:"b",label:"前受利息"},{id:"c",label:"受取利息"},{id:"d",label:"未払利息"}],
      correctAnswer:"a", explanation:"当期分の収益がまだ未入金→「未収収益（資産）」を計上。借方：未収利息3,000 / 貸方：受取利息3,000"},
  ],

  /* ─── Ch08-L02: 貸倒引当金・売上原価 ─── */
  "g3-ch08-l02": [
    { id:"g3-ch08-l02-v2-q01", question:"売掛金100,000円が貸し倒れた。貸倒引当金の残高が80,000円ある場合の借方仕訳は？", type:"multiple",
      options:[{id:"a",label:"貸倒引当金80,000・貸倒損失20,000"},{id:"b",label:"貸倒引当金100,000"},{id:"c",label:"貸倒損失100,000"},{id:"d",label:"売掛金100,000"}],
      correctAnswer:"a", explanation:"まず貸倒引当金（80,000）で充当し、不足分（20,000）は「貸倒損失（費用）」を計上します。"},
    { id:"g3-ch08-l02-v2-q02", question:"売上原価の計算式として正しいのはどれか？", type:"multiple",
      options:[{id:"a",label:"期首商品＋当期仕入＋期末商品"},{id:"b",label:"当期仕入－期首商品＋期末商品"},{id:"c",label:"期首商品＋当期仕入－期末商品"},{id:"d",label:"当期売上－期末商品"}],
      correctAnswer:"c", explanation:"売上原価＝期首商品＋当期仕入－期末商品です。「しくり・くりし」の仕訳で自動計算されます。"},
    { id:"g3-ch08-l02-v2-q03", question:"差額補充法で貸倒引当金を設定する場合、既存残高が5,000円、必要額が8,000円。繰入額はいくらか？", type:"multiple",
      options:[{id:"a",label:"8,000円"},{id:"b",label:"5,000円"},{id:"c",label:"3,000円"},{id:"d",label:"13,000円"}],
      correctAnswer:"c", explanation:"差額補充法では必要額と残高の差額を繰り入れます。8,000円－5,000円＝3,000円が繰入額です。"},
  ],

  /* ─── Ch09-L01: 試算表・精算表 ─── */
  "g3-ch09-l01": [
    { id:"g3-ch09-l01-v2-q01", question:"精算表（8桁精算表）の列の並び順として正しいのはどれか？", type:"multiple",
      options:[{id:"a",label:"残高試算表→損益計算書→修正記入→貸借対照表"},{id:"b",label:"残高試算表→修正記入→損益計算書→貸借対照表"},{id:"c",label:"修正記入→残高試算表→損益計算書→貸借対照表"},{id:"d",label:"損益計算書→残高試算表→修正記入→貸借対照表"}],
      correctAnswer:"b", explanation:"8桁精算表は「残高試算表→修正記入→損益計算書→貸借対照表」の順に並びます。"},
    { id:"g3-ch09-l01-v2-q02", question:"残高試算表において「借入金」の残高はどちら側に記載されるか？", type:"truefalse",
      options:[{id:"a",label:"借方"},{id:"b",label:"貸方"}],
      correctAnswer:"b", explanation:"借入金は負債なので、残高は貸方（右側）に記載されます。"},
    { id:"g3-ch09-l01-v2-q03", question:"精算表の「修正記入」欄に記入するのはどのような仕訳か？", type:"multiple",
      options:[{id:"a",label:"日常の仕訳"},{id:"b",label:"決算整理仕訳"},{id:"c",label:"開始仕訳"},{id:"d",label:"再振替仕訳"}],
      correctAnswer:"b", explanation:"精算表の「修正記入」欄には決算整理仕訳（前払費用・減価償却費・貸倒引当金など）を記入します。"},
  ],

  /* ─── Ch09-L02: 財務諸表の作成 ─── */
  "g3-ch09-l02": [
    { id:"g3-ch09-l02-v2-q01", question:"貸借対照表の「流動資産」に含まれるものはどれか？", type:"multiple",
      options:[{id:"a",label:"建物"},{id:"b",label:"土地"},{id:"c",label:"売掛金"},{id:"d",label:"特許権"}],
      correctAnswer:"c", explanation:"売掛金は1年以内に回収される債権なので「流動資産」です。建物・土地は固定資産、特許権は無形固定資産です。"},
    { id:"g3-ch09-l02-v2-q02", question:"損益計算書の「営業利益」はどのように計算されるか？", type:"multiple",
      options:[{id:"a",label:"売上総利益＋営業外収益－営業外費用"},{id:"b",label:"売上高－売上原価"},{id:"c",label:"売上総利益－販売費及び一般管理費"},{id:"d",label:"経常利益＋特別利益－特別損失"}],
      correctAnswer:"c", explanation:"営業利益＝売上総利益（粗利益）－販売費及び一般管理費（販管費）です。"},
    { id:"g3-ch09-l02-v2-q03", question:"当期純利益はどの財務諸表に最終的に反映されるか？", type:"multiple",
      options:[{id:"a",label:"損益計算書のみ"},{id:"b",label:"貸借対照表の純資産（繰越利益剰余金）にも反映される"},{id:"c",label:"貸借対照表の負債に計上される"},{id:"d",label:"現金出納帳に記録される"}],
      correctAnswer:"b", explanation:"当期純利益はP/Lで計算された後、B/Sの純資産の「繰越利益剰余金」に加算されます。"},
  ],

  /* ─── Ch10-L01: 帳簿の種類 ─── */
  "g3-ch10-l01": [
    { id:"g3-ch10-l01-v2-q01", question:"「商品有高帳」は何を管理する補助帳簿か？", type:"multiple",
      options:[{id:"a",label:"現金の増減"},{id:"b",label:"取引先ごとの売掛金残高"},{id:"c",label:"商品ごとの受払・残高"},{id:"d",label:"固定資産の詳細"}],
      correctAnswer:"c", explanation:"商品有高帳は商品ごとに入庫・出庫・残高（数量・単価・金額）を記録する補助帳簿です。"},
    { id:"g3-ch10-l01-v2-q02", question:"商品有高帳で使われる単価計算方法として誤っているものはどれか？", type:"multiple",
      options:[{id:"a",label:"先入先出法"},{id:"b",label:"移動平均法"},{id:"c",label:"後入先出法"},{id:"d",label:"定額法"}],
      correctAnswer:"d", explanation:"定額法は固定資産の減価償却に使う計算方法です。商品有高帳では「先入先出法」や「移動平均法」を使います。"},
    { id:"g3-ch10-l01-v2-q03", question:"総勘定元帳は何の帳簿か？", type:"multiple",
      options:[{id:"a",label:"取引を発生順に記録する帳簿"},{id:"b",label:"勘定科目ごとに転記を集計する帳簿"},{id:"c",label:"取引先ごとの残高を管理する帳簿"},{id:"d",label:"現金の出入りを記録する帳簿"}],
      correctAnswer:"b", explanation:"総勘定元帳は勘定科目ごとにT字型で転記を集計する「主要帳簿」の一つです。"},
  ],

  /* ─── Ch10-L02: 伝票会計 ─── */
  "g3-ch10-l02": [
    { id:"g3-ch10-l02-v2-q01", question:"出金伝票に記録する際、貸方は必ず何になるか？", type:"multiple",
      options:[{id:"a",label:"売掛金"},{id:"b",label:"買掛金"},{id:"c",label:"現金"},{id:"d",label:"当座預金"}],
      correctAnswer:"c", explanation:"出金伝票は現金が出ていく取引を記録します。貸方は必ず「現金」です。"},
    { id:"g3-ch10-l02-v2-q02", question:"仕訳日計表の役割として正しいのはどれか？", type:"multiple",
      options:[{id:"a",label:"取引先ごとの残高を集計する"},{id:"b",label:"1日の伝票を集計して総勘定元帳への転記をまとめる"},{id:"c",label:"固定資産の残高を管理する"},{id:"d",label:"決算整理仕訳を記録する"}],
      correctAnswer:"b", explanation:"仕訳日計表は1日の伝票をまとめて集計した表で、総勘定元帳への転記に使用します。"},
    { id:"g3-ch10-l02-v2-q03", question:"掛け売上（現金が絡まない）を3伝票制で記録する場合、使用する伝票は？", type:"multiple",
      options:[{id:"a",label:"入金伝票"},{id:"b",label:"出金伝票"},{id:"c",label:"振替伝票"},{id:"d",label:"売上伝票"}],
      correctAnswer:"c", explanation:"現金が絡まない取引（掛け売上など）は「振替伝票」を使います。"},
  ],
};
