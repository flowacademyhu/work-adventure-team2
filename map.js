/*
  Egy 5x5-ös táblázat létrehozása.
  A táblázat elemeit feltölteni színesítő szöveggel.
*/

const map = [[{ label: 'A1', text: '1/25.  Volt egyszer a köröskörül erdőben egy sudár, fiatal tölgyfa. Kék ég felé nyújtózkodott, lombjain át arany napfényt szitálgatott, és erős gyökerével a föld minden erejét magába szívta. Ő volt a legszebb az erdőn.' },
  { label: 'A2', text: '2/25.  A madarak vágyakozva nézték erős ágai hajlását, védelmező lombját. Szerettek volna rá fészket rakni, de a tölgyfa dölyfösen rázta magát.' },
  { label: 'A3', text: '3/25.  - Hess innen, hangos népség! Nem leszek fészektartó! Szép koronám nem ilyenre termett. Hess, hess!' },
  { label: 'A4', text: '4/25.  Még a pihenő madárkát sem tűrte meg az ága hegyén, és ha olykor egy-egy tudatlan kis jövevény mégis megpróbálkozott rajta a fészekrakással, a büszke tölgy lerázta magáról a félig elkészült madárfészket. Őszidőben a mókusok vidáman felkapaszkodtak a derekára, és szépen kérték:' },
  { label: 'A5', text: '5/25.  - Olyan éhesek vagyunk! Adj egy kis makkot!' }],
[{ label: 'B1', text: '10/25.  - Miért nem szóltál, hogy beteg vagy? – kérdezte sajnálkozva. – Mindjárt idehívom Harkály doktort!' },
  { label: 'B2', text: '9/25.  Keserves nyögését meghallotta a közelben tanyázó mókusasszonyka. Tüstént abbahagyta fiacskái mosdatását.' },
  { label: 'B3', text: '8/25.  - Ó, jaj nekem – sóhajtotta -, elpusztulok!' },
  { label: 'B4', text: '7/25.  Egy darabig így is megvolt a tölgyfa. Hanem idővel az évgyűrűk vastagítani kezdték a derekát, és – tetszett vagy nem tetszett! – belebújt a kukac. Hosszú éjszakákon át kegyetlenül rágta. A tölgyfa hasogató fájdalmakra ébredt. Tavasz volt akkoriban. Minden fa boldogan érezte magában az új nedvek keringését, csak a tölgyfa állt rosszkedvűen, magányosan, szárazon. A féreg egyre jobban gyötörte.' },
  { label: 'B5', text: '6/25.  A tölgyfa akkorát reccsent mérgében, hogy a mókuskák ijedtükben majdnem lepotyogtak róla. Csak a hízelgő szél tudott befurakodni a lombjai közé. Annak a duruzsolását hallgatta reggeltől estig. Lassan mindenki elkerülte. Már az őz sem mert a kérgéhez törleszkedni. Igazán mondom, egyszer a saját szememmel láttam mellette kibujni egy gombát a földből, de amint észrevette, hogy hol van, gyorsan kalapot emelt, és elgyalogolt máshová. Képzeljétek!… már az árnyéka sem kellett senkinek!' }],
[{ label: 'C1', text: '11/25.  - Nem kell! Nem kell! – hadonászott a fa. – Biztosan bosszút állna rajtam, és összevagdalna a csőrével, amiért nem engedtem be az odúmba.' },
  { label: 'C2', text: '12/25.  - Ugyan, mit képzelsz? – csóválta fejét a mókus, és azért is elfutott a harkályért.' },
  { label: 'C3', text: '13/25.  Harkály doktor tüstént ott termett. Még pici, piros sapkáját sem vette le a fejéről. Nem sokat törődött a tölgyfa nyögésével. Végigkúszott rajta, körbekopogtatta, azután egy helyen megállt, és erős csőrét mélyen kérgébe ütötte.' },
  { label: 'C4', text: '14/25.  - Megvagy, mihaszna férge! Ügyesen kiemelte, és – volt, nincs! – már el is tüntette éhes kis begyében.' },
  { label: 'C5', text: '15/25.  A tölgyfa felsóhajtott: – Jobban vagyok!' }],
[{ label: 'D1', text: '20/25.  Harkály doktor hozzátette:' },
  { label: 'D2', text: '19/25.  - Ó, te tölgyfa!… Senki sem haragszik rád, hanem te haragudtál az egész világra!' },
  { label: 'D3', text: '18/25.  Erre a körülállók kacagni kezdte, és a harangvirágok összekoccantották fejecskéjüket.' },
  { label: 'D4', text: '17/25.  - Miért segítettél rajtam? Hiszen énrám mindenki haragszik!' },
  { label: 'D5', text: '16/25.  Körös-körül őzek, mókusok leskelődtek, madarak figyelték, hogy mi lesz. Mindenki örült, amikor a doktor bekapta a kukacot. A tölgyfa pedig csodálkozva kérdezte:' }],
[{ label: 'E1', text: '21/25.  - Beteg voltál, de most már meggyógyulsz. Orvosságot is rendeltem: sok vidámságra, madárdalra van szükséged.' },
  { label: 'E2', text: '22/25.  - Meglesz! Meglesz! – kiáltották az állatok, és mindjárt körültáncolták.' },
  { label: 'E3', text: '23/25.  A tölgyfa nagyon sokáig nem tudott szólni, csak állt közöttük, szégyenkezve. Aztán egyszer csak gondolt egyet, és kitárta ág-karjait a madarak fel:' },
  { label: 'E4', text: '24/25.  - Gyertek ide, hozzám!' },
  { label: 'E5', text: '25/25.  Azok nyomban odasereglettek, és örömükben olyan vidáman kezdtek csivitelni, füttyögetni, énekelni, mintha mi sem történt volna.' }]];

const mapOut = [[' 1', ' 2', ' 3', ' 4', ' 5'], ['10', ' 9', ' 8', ' 7', ' 6'], ['11', '12', '13', '14', '15'], ['20', '19', '18', '17', '16'], ['21', '22', '23', '24', '25']];
// console.log(mapOut);
module.exports = {
  map,
  mapOut
};
