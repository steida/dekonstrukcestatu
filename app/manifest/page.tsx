import type { Metadata } from "next";
import Link from "next/link";
import { buildArticleJsonLd, JsonLd } from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  path: "/manifest",
  absoluteTitle: "Manifest dekonstrukce státu (návrh)",
  description:
    "První politický směr, který skutečně dá všechno všem, a je skutečně pro všechny. O problému složitosti státu a jeho dekonstrukci do menších částí.",
  type: "article",
  publishedTime: "2020-09-01",
  image: "/images/og-default.png",
  imageAlt: "Manifest dekonstrukce státu (návrh) — Daniel Steigerwald",
});

export default function ManifestPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <JsonLd
        data={buildArticleJsonLd({
          type: "Article",
          url: "/manifest",
          title: "Manifest dekonstrukce státu (návrh)",
          description:
            "První politický směr, který skutečně dá všechno všem, a je skutečně pro všechny. O problému složitosti státu a jeho dekonstrukci do menších částí.",
          datePublished: "2020-09-01",
          image: "/images/og-default.png",
          breadcrumbs: [
            { name: "Domů", path: "/" },
            { name: "Manifest", path: "/manifest" },
          ],
        })}
      />

      <article className="mx-auto max-w-3xl">
        <nav
          aria-label="Drobečková navigace"
          className="no-print mb-6 flex items-center gap-2 font-mono text-xs text-[var(--ink-faint)] uppercase"
        >
          <Link href="/" className="transition-colors hover:text-[var(--accent)]">
            Domů
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[var(--ink-muted)]">Manifest</span>
        </nav>

        <header className="mb-8 border-b-2 border-[var(--ink)] pb-6">
          <p className="mb-2.5 font-mono text-xs font-semibold tracking-widest text-[var(--accent)] uppercase">
            Programový text · Návrh
          </p>
          <h1 className="text-3xl leading-tight font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
            Manifest dekonstrukce státu (návrh)
          </h1>
          <p className="mt-4 border-l-2 border-[var(--accent)] pl-4 text-base italic text-[var(--ink-muted)]">
            „První politický směr, který skutečně dá všechno všem, a je skutečně
            pro všechny.“
          </p>
        </header>

        {/* Subtle editorial draft notice */}
        <aside
          aria-label="Poznámka k verzi textu"
          className="mb-8 rounded-[var(--radius)] border border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[var(--surface)]/75 px-4 py-3.5 text-sm leading-relaxed text-[var(--ink-muted)]"
        >
          <strong className="font-semibold text-[var(--ink)]">
            Pracovní návrh:
          </strong>{" "}
          Toto je původní verze Manifestu. Brzy ji aktualizuji a zpřesním na
          základě poznámek a debat z posledních let — konkrétní rozpracované
          návrhy už teď najdete v{" "}
          <Link
            href="/danova-reforma"
            className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/40 underline-offset-2 hover:decoration-[var(--accent)]"
          >
            Daňové reformě
          </Link>
          .
        </aside>

        <div className="prose prose-ds">
          <h2>Problém</h2>
          <p>
            Máme problém. Ten problém je složitost státu. Stát se stal postupem
            času tak složitým, že je prakticky nemožné jej řídit prostřednictvím
            voleb. Jeden hlas nemůže rozhodnout o téměř nekonečném množství
            otázek týkajících se státu. Občané mají různé představy o tom, co by
            stát měl dělat a jak, ale v současném uspořádání státu neexistuje
            způsob, jak tyto představy převést do skutečných rozhodnutí.
          </p>
          <p>
            Teorie říká, že politické strany nabízí řešení, a občané si dle toho
            vybírají, koho volit. Praxe je taková, že řešení - volební programy
            - nikdo pořádně nepíše, protože to je vzhledem k složitosti státu
            sisyfovská práce. A je to ještě horší. Politici, kteří nejsou u
            moci, neví, protože vědět nemohou (nejsou u moci), co vše řízení
            státu obnáší. Politici, kteří u moci jsou, pak na sepisování
            programů už nemají čas, protože musí vládnout. Proto jsou politické
            programy plné obecných frází, a proto je také skoro nikdo nečte.
            Přirozenou lidskou reakcí na složitost je zjednodušení. Je v tom
            paradox: Čím je stát složitější, tím jednodušší řešení strany
            nabízí. Politické kampaně se proto změnily na výkřiky, a politické
            diskuse na hádky, ve kterých se oponenti ani neshodnou, že se
            neshodnou. Mnozí občané jsou z toho znechucení natolik, že se k
            volbám už ani neobtěžují. Nevěří, že se něco změní, protože většinou
            se nezmění nic. Ať občané volí jak volí, na stát jako by to nemělo
            žádný vliv.
          </p>

          <h3>Čí je to vina</h3>
          <p>
            Je snadné vinit politiky, a skoro vždy je i za co, ale politici
            nejsou primární příčinou nefunkčnosti státu. Tou je politika, ne
            politici. Politici jsou jen produkty politiky. Výroba politiků
            začíná už na samotném začátku, při rozhodnutí každého jednoho
            člověka, jestli do politiky jít. Skromný člověk žijící v realitě se
            rozhodně nebude považovat za toho jedince, který rozumí všemu, a
            proto by měl vše řídit. Schopní lidé jsou schopní jen proto, že se
            specializují na to, v čem vynikají. Albert Einstein řekl, že nikdo
            není tak hloupý, aby v něčem nemohl vynikat. Lidi se od zvířat liší
            svou schopností specializace. Proto máme různá zaměstnání, a proto
            je lidská společnost tak úžasně schopná a pestrá. Schopní lidé se
            drží toho, v čem vynikají. Vstupem do politiky by si zničili život.
            Politici se také specializují, avšak jejich specializací je
            předstírání, že rozumí všemu. Čest výjimkám, ale moc jich není.
            Většina politiků jsou brouci Pytlíci - nemají problém kdykoliv se
            vyjádřit k čemukoli.
          </p>

          <h3>Co (vše) stát je</h3>
          <p>
            Jeden slovenský básník kdysi napsal: &quot;Ještě nemáš tolik tužeb,
            kolik stát připravil ti služeb.&quot; Byla to óda na komunismus,
            který se dle básníka dokázal postarat o všechny lidské potřeby, čímž
            si básník ospravedlňoval právo komunistického státu o všem
            rozhodovat a vše vlastnit. Nevím kolik tužeb mám, co ale vím
            naprosto jistě, že nemám ani tušení, co vše stát lidem
            &quot;připravil&quot;. Jinými slovy, co vše stát vlastně je. Někdo
            by mohl namítnout, zdali je vůbec nutné to vědět. No, pokud to
            občané platí, a ve volbách o tom rozhodují, tak by se hodilo mít
            takovou encyklopedii státu, aby občané věděli, co vše to vlastně
            mají. Jako mladík jsem se rozhodl to zjistil, záhy jsem však narazil
            na problém, že není koho se zeptat. Člověk by předpokládal, že to
            bude vědět Ministerstvo financí, že to půjde vyčíst z rozpočtu, ale
            není tomu tak. Státní rozpočet peníze přerozděluje, ale už neříká,
            kam konkrétně. Po kratším pátrání jsem došel až na hackathon
            pořádaný NKÚ (Nejvyšší kontrolní úřad), kde jsem se zeptal samotného
            prezidenta NKÚ, jestli nemá nějaký seznam všech státních úřadů,
            organizací, firem, prostě všeho, co se financuje z rozpočtu, že bych
            z toho udělal hezký web. Long story short, nikdo to neví, ani NKÚ.
            Jeden příklad za všechny: Stát může zakládat firmy (do kterých se
            pak uklízí politici, kteří nevyhráli volby, aby neumřeli hlady), a
            ty firmy mohou zakládat další firmy (aby bylo hodně míst), a nikdo v
            Česku nemá jejich seznam.
          </p>

          <h3>Komu stát patří</h3>
          <p>
            Vlastnictví je definováno jako tzv. &quot;panství nad věcí&quot;,
            tedy možnost s danou věcí nějak nakládat. Proto třeba Měsíc nepatří
            nikomu, protože s ním nikdo nemůže nakládat (zatím). Než jsem začal
            zkoumat stát, žil jsem v domění, že stát patří občanům, ostatně tak
            píše ústava, že všechna moc vychází z lidu. Jenže to je teorie, a
            jak víme, teoreticky je teorie to samé co praxe, ale prakticky se
            teorie od praxe liší. Humor, ale se zrnkem pravdy. Občanům stát
            prakticky nepatří, protože prakticky nemají možnost se státem
            nakládat, protože stát je příliš složitý, aby se dal řídit jednou za
            pár let jedním hlasem hozeným do urny. Připomínám, že na tom hlasu
            (volebním lístku) je seznam lidí, které většinou volič vůbec nezná.
            Lidí, kteří mají za voliče rozhodovat o všem.
          </p>
          <p>
            Pokud tedy stát nepatří občanům, komu patří? Stát patří těm lidem,
            kteří s ním nakládají. To jsou politici, úředníci, a další tzv.
            &quot;členové státu&quot;. Na tomto místě bych rád zdůraznil, že
            politici, ač teoreticky stojící na vrcholu pyramidy moci, nejsou ti,
            kteří státu doopravdy vládnou. Taková je zažitá představa, to by ale
            nesměl existovat volební cyklus. Průměrná životnost českého ministra
            školství je 17 měsíců a ministra zdravotnictví ještě kratší. Ale i
            pokud ministr vydrží po celou dobu volebního cyklu, 4 roky je hrozně
            málo pro jakoukoliv dlouhodobou strategii. Lze alespoň s tímto v
            současném uspořádání státu něco dělat? Ne. Prodloužení volebního
            cyklu by nic dobrého nepřineslo a zkrácení také ne.
          </p>

          <h3>Kdo státu vládne</h3>
          <p>
            Pokud státu nevládnou občané ani politici, kdo státu vládne?
            Zjednodušeně řečeno, stát si vládne sám. Konkrétně státu vládnou ti
            jeho členové, kteří jsou ve svých funkcích zpravidla déle než
            politici, a díky tomu doopravdy vědí, protože vědět mohou, jak stát
            funguje. Jejich jména jsou veřejnosti až na výjimky neznámá,
            kontrole veřejnosti proto nepodléhají. Nekontrolují je ani politici,
            protože ti jsou na skutečných vládcích státu závislí, protože bez
            nich by na úřadě ani nevěděli, kde (a kdy) se podepsat. Lidé, kteří
            státu doopravdy vládnou, se kontrolují sami.
          </p>

          <h3>Proč se stát nevyvíjí</h3>
          <p>
            Zatímco počet agend státu stále narůstá, agendy samotné se nevyvíjí.
            Vládci státu nemají motivaci cokoliv měnit, protože proč? Byla by to
            obtížná a riziková práce, za kterou je nikdo finančně nepochválí
            (platové tabulky), a kde naopak hrozí, že se něco udělá špatně.
            Nejlepší strategií je dělat vše stále stejně. Prošlo to jednou,
            projde to i podruhé. Projde to posté, a nikoho už ani nenapadne, že
            by to šlo dělat jinak, čímž se riziko pracné a nebezpečné změny
            sníží skoro až k nule.
          </p>
          <p>
            Že stát nefunguje, nebo funguje nějak podezřele divně, je dnes
            zřejmé už skoro každému, avšak každý si to vysvětluje jinak.
            Etatisté chtějí stát posílit, aby fungoval (pomáhal) lépe,
            anarchisté naopak oslabit, aby fungoval (škodil) méně. Jak jsme si
            však ukázali, složitost státu prakticky vylučuje změnu. Stát se svou
            složitostí efektivně izoluje od vnějších podnětů - reality. Co
            nereaguje na podněty, to se nevyvíjí. Stát je zmrazená evoluce. Ani
            to hloupé střídání času není EU parlament schopen zrušit.
          </p>
          <p>
            Někdo by mohl namítnout, že stát se vyvíjí, protože počet agend
            státu stále narůstá, ale to je omyl. Roste kvantita, ne kvalita
            státu, ta naopak stále upadá, protože způsob, jakým občané stát
            ovládají, se nemění. Jeden volební hlas na stále větší počet
            rozhodnutí. Co se prosadí, to je až na výjimky navždy. Vládci státu
            jsou příliš zaměstnáni tvořením nových zákonů, než aby měli čas
            staré zákony zhodnotit, přehodnotit, nebo dokonce zrušit. S růstem
            státu roste i nespokojenost občanů, kteří ve své zoufalosti (naděje
            umírá poslední) zkouší volit stále větší extrémy. Z politiky už nemá
            radost skoro nikdo, a pokud ano, netrvá dlouho. Trend je neblahý,
            avšak věřím, proto tento text píšu, že lze zvrátit.
          </p>

          <h2>Řešení</h2>
          <blockquote>
            <p>Existuje vize, která by dokázala lidi sjednotit?</p>
          </blockquote>
          <p>
            Na první pohled to vypadá jako nemožný cíl. Levice proti pravici.
            Kolektivisté proti individualistům. Etatisté proti anarchistům. Dva
            nesmiřitelné tábory držící se navzájem v klinči. Co jeden prosadí,
            druhý zruší. Nikdy se navzájem nepochopí. Mojí hypotézou je, že i
            tohle rozdělení společnosti je způsobené složitostí státu. Ať už to
            tak je či není, realitou všedního dne je permanentní spor o to, kdo
            bude zrovna u kormidla. O ničem jiném politika není, ale mohla by
            být, kdyby kormidlo nebylo jedno, ale bylo bych jich mnoho.
          </p>
          <p>
            Dekonstrukce státu si neklade za cíl odpověď na otázku, co by stát
            měl či neměl dělat, ani jak vysoké by měly být daně, protože shoda
            není v daném systému možná. Stát se stal příliš složitým, tak
            složitým, že to skoro vylučuje diskuzi. Píšu skoro, protože věřím,
            že shoda jednou bude možná, ale ne teď, ne se státem, který jsme
            zdědili od předků, a který nám přerostl přes hlavy. Dekonstrukce
            státu se snaží popsat problém, a navrhnout řešení, na kterém by se
            shodli i ti, kteří se jinak neshodnou skoro na ničem.
          </p>
          <p>
            Řešením je dekonstrukce státu do menších částí, z nichž každá se
            transformuje na akciovou společnost, od které každý občan dostane
            jednu akcii, aby mohl vykonávat svá akcionářská práva. Jinými slovy,
            aby občané stát mohli skutečně vlastnit, a aby občané mohli státu
            skutečně vládnout. Postupně nahrazujme všeobecné volby &quot;jedním
            hlasem o všem&quot;, které se konají pravidelně jednou za x let,
            menšími volbami o konkrétnějších tématech, které se mohou konat
            kdykoliv se občané (akcionáři konkrétní části státu) usnesou.
          </p>
          <p>
            Budoucí politici již nebudou muset předstírat, že rozumí všemu. Bude
            úplně stačit, pokud budou rozumět tomu, do čeho kandidují. Schopní
            lidé se nebudou politice už (tolik) vyhýbat, protože ta bude nabízet
            daleko lepší uplatnění. Představte si akciové společnosti České
            silnice a České lesy. Volební kampaně by se týkaly pouze správy
            silnic a správy lesů. Představte si, jak moc by to zpřehlednilo
            celou politickou kampaň i diskuzi. Voličům by to nesmírně usnadnilo
            rozhodování. Voliči řidiči by mohli směnit akcie lesů s voliči
            myslivci za akcie silnic, aby každého hlas měl větší váhu v těch
            tématech, kterým konkrétní člověk rozumí.
          </p>
          <p>Je to ambiciózní myšlenka, avšak zcela realizovatelná.</p>
          <p>
            Stát nelze dekonstruovat celý hned, to ani náhodou, na to jde o
            příliš velkou změnu. Nejlepší by bylo začít s něčím malým, na čem by
            si občané vlastnictví a vládnutí státu vyzkoušeli a osvojili. Třeba
            Pražský hrad. Komu Pražský hrad patří, a komu by měl patřit? Je to
            národní památka, jeden z největších hradních komplexů na světě. Co o
            něm vlastně víme? Kdo ve všech těch budovách bydlí, a bydlí tam
            vůbec někdo? Bydlí tam prezident, ale proč? Prezident je úředník,
            není to král. Macron také nebydlí ve Versailles. Je absurdní, aby
            takovou obří nemovitost v centru Prahy museli občané dotovat. Mělo
            by to vydělávat miliardy, nebo by tam aspoň mohli přespávat
            vesničani, když vyrazí na výlet do Prahy. Nevím, nikdo neví, dokud o
            tom nebudeme jako akcionáři akciové společnosti Pražský hrad
            hlasovat.
          </p>

          <h2 id="listarna">Listárna</h2>
          <blockquote>
            <p>
              Myšlenka je to nádherná, ale aby to fungovalo, musela by být
              většina populace inteligentní.
            </p>
          </blockquote>
          <p>
            Dekonstrukce státu volby zjednodušuje. Místo rozhodování jedním
            hlasem o všem, občané by rozhodovali jen o těch tématech, která je
            zajímají, a pokud člověka něco zajímá, tak tomu zpravidla i lépe
            rozumí. V těch případech, kdy občana dané téma (akciovka) nezajímá,
            nebo na to nemá čas, tak může svou volbu delegovat na někoho jiného,
            klidně i politickou stranu.
          </p>

          <blockquote>
            <p>Bylo by možné „akcii“ prodat a co děti narození po rozdělení?</p>
          </blockquote>
          <p>
            Děti narození po rozdělení dědí od rodičů. Děti bez rodičů by
            dostaly akcie státu až po dosažení plnoletosti. Co se týká prodeje
            akcií, ano, ale ne hned. Jako první je třeba, aby se občané s
            dekonstrukcí státu sžili. Aby si to vyzkoušeli a ošahali. Prostě aby
            nestřelili svou akcii Pražského hradu prvnímu koženému, který jim
            slíbí jistotu desetinásobku. Proto je třeba předtím vytvořit tržiště
            (burzu), která teprve vyjeví reálné ceny. Pokud i poté vymění svou
            akcii za koblihu, nestane se nic, co by se masově nedělo už teď.
            Dekonstrukce státu není zárukou moudrého nakládání se státem.
            Složitost státu však zárukou nemoudrého nakládání se státem je.
          </p>

          <blockquote>
            <p>
              Copak volit, to umíme. A jak by to dopadlo? Stejně jako to dopadá
              teď. Volení zástupci jsou obrázkem svých voličů.
            </p>
          </blockquote>
          <p>
            Je rozdíl volit univerzální politiky (brouky Pytlíky) a volit
            jedince s konkrétním programem. Lépe se to i kontroluje. A pokud
            akcionáři zvolí špatně, členy představenstva lze odvolat. Nemusí se
            kvůli tomu svolávat volby celého státu. Dekonstrukce státu je mnohem
            levnější a mnohem efektivnější než klasické volby jedním hlasem o
            všem jednou za x let.
          </p>

          <blockquote>
            <p>Tohle je privatizace státu!</p>
          </blockquote>
          <p>
            No to záleží, jak definujete slovo &quot;privatizace&quot;. Pokud to
            slovo ve vás vzbuzuje odpor, patrně proto, že nějaký darebák ukradl
            kus státu lidem, rád bych zdůraznil, že dekonstrukce státu je
            vracení &quot;ukradeného&quot; lidem zpět, protože stát lidem tak
            jak teď funguje, nepatří. Dalo by se to také nazvat restitucí státu,
            ale i &quot;restituce&quot; mají negativní konotace, a ani to by
            nebylo přesné.
          </p>

          <blockquote>
            <p>
              Zpřesním - kuponová privatizace :) Podle manifestu by tam
              docházelo ke směně vlastnictví mezi občany. Ten model je velmi
              obdobný.
            </p>
          </blockquote>
          <p>
            Kuponovka byla speciální formou privatizace, při které se stát musel
            co nejrychleji zbavit státního majetku, protože jakmile se povolilo
            soukromé vlastnictví, tak si babišové a další agenti STB začali
            okamžitě stát rozkrádat pro sebe. Připomínám, že soukromé
            vlastnictví si lidé vydemonstrovali. Kuponovka, na rozdíl od
            dekonstrukce státu, nebyla &quot;všem stejně&quot;. Občané si
            vybírali, ale insideři (členové státu) měli konkurenční výhodu, a
            mnohdy nečleny státu předběhli. Dekonstrukce státu se nesnaží o co
            nejrychlejší převod, ale o co nejspravedlivější. Proto každý občan
            automaticky dostane jednu akcii od každé části státu, a ne všechny
            najednou, protože to by bylo příliš mnoho nových informací, z čehož
            by opět těžili ti, co v tom umí chodit. Dekonstrukce státu není
            převod vlastnictví státu na jeden subjekt ale všem občanům rovným
            dílem. Berte to jako takovou zábavnou celospolečenskou hru, při
            které občané zjistí, co stát vlastně je, co ze státu vlastně mají, a
            co s tím vším vlastně dělat.
          </p>

          <hr />

          <p>
            <strong>TODO:</strong>
          </p>
          <ul>
            <li>Problémy, které můžeme předvídat.</li>
            <li>Institucionální ukotvení.</li>
            <li>Priority dekonstrukce.</li>
            <li>Je dekonstrukce vždy nutná? (alternativy dekonstrukce)</li>
            <li>Software a gamifikace.</li>
            <li>Co patří do manifestu a co ne (vyžaduje další výzkum).</li>
          </ul>
        </div>

        <nav
          aria-label="Navigace mezi sekcemi"
          className="no-print mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-strong)] pt-6 text-sm"
        >
          <Link
            href="/"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            ← Zpět na úvod
          </Link>
          <Link
            href="/danova-reforma"
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Daňová reforma podle Dekonstrukce státu →
          </Link>
        </nav>
      </article>
    </div>
  );
}
