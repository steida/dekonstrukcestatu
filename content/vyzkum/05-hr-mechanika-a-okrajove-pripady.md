# Hall–Rabushka Flat Tax: Přesná mechanika, okrajové případy a moderní varianty

> **Co text zkoumá:** Originální technickou mechaniku modelu Hall–Rabushka Flat Tax (1981–2007), jeho sedm nejcitlivějších okrajových případů (banky, ztráty, půda, benefity, přechodový šok) a srovnání s moderními spotřebními modely (Bradford X-Tax, Auerbach–Devereux DBCFT, estonská DPT, DPH).  
> **Hlavní závěr:** Dvě pohlednice se stejnou sazbou netvoří daň z příjmu, ale přímou spotřební `R-base` cash-flow daň s 0% mezním zdaněním normální návratnosti kapitálu — její praktická funkčnost však vyžaduje ošetření bankovního spreadu, úročeného přenosu ztrát, nepeněžních benefitů a přechodových pravidel.  
> **Kde pokračovat:** Hlavní návrh [Daňová reforma podle Dekonstrukce státu](/danova-reforma), empirické zkušenosti v [Praxe ve světě a historie](/danova-reforma/vyzkum/06-hr-praxe-ve-svete-a-historie) a český propočet sazeb v [Česko, EU a makroekonomické propočty](/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla).

---

## Hlavní zjištění

1. **Matematicky jde o přímou spotřební daň (`R-base`), nikoli daň z příjmu:** Protože Form 1 (mzdy nad nezdanitelným minimem $X$) a Form 2 (podnikatelské cash flow se 100% okamžitým odpisem investic včetně budov a pozemků) sdílejí totožnou sazbu $t$, mzdy $W$ se v agregátu vykrátí a celkový základ činí $C - X$ (odčítací DPH s osobním nezdanitelným minimem).
2. **Nulová mezní daň z normálního kapitálu (Cary Brownova věta, 1948):** Okamžitý 100% odpis činí stát „tichým společníkem“ na nákladu i výnosu investice, takže normální návratnost kapitálu má efektivní mezní sazbu **0 %**, zatímco nadnormální zisky (ekonomické renty) jsou plně zdaněny u zdroje na Form 2.
3. **Sedm technických detailů rozhoduje o fungování v praxi:** K zachování neutrality a prevenci arbitráže vyžaduje model zvláštní pravidla pro úrokové rozpětí bank (imputace ze spreadu nebo `R+F`), neomezený **úročený** přenos daňových ztrát, zákaz odpočtu nepeněžních benefitů (plus jejich 19% zdanění u státu a neziskovek) a přechodový režim pro starý majetek a úvěry (doodepsání a „pravidlo 90 %“).
4. **Rozdíl oproti návrhu pro Česko a moderním nástupcům:** Originální americký návrh (19 %) nenahrazoval sociální odvody ani DPH; při sloučení celého českého výběru do jedné *origin-based* sazby roste tlak na *transfer pricing* a šedou ekonomiku. Moderní akademické varianty a praxe (Bradford X-Tax, Auerbach–Devereux DBCFT, estonská DPT) řeší dílčí otázky za cenu vlastních kompromisů s WTO, právem EU nebo ztrátou obecnosti sazby a mzdově-ziskovou arbitráží.

---

## 1. Přesný originální design Halla & Rabushky

### 1.1 Historická evoluce návrhu (1981 → 1983 → 1985 → 1995 → 2007)

Návrh Roberta E. Halla a Alvina Rabushky (Hoover Institution, Stanford University) vznikl jako radikální odpověď na přebujelý americký federální zákoník daně z příjmu (Internal Revenue Code). Přestože se jeho filozofické jádro — jednotná sazba **19 %** a dvě formulářové „pohlednice“ — po celou dobu nezměnilo, parametry (zejména nezdanitelné osobní a rodinné úlevy) i technické řešení okrajových případů procházely postupným zpřesňováním a inflační valorizací:

| Rok | Milník / publikace | Sazba | Osobní nezdanitelné minimum (*Personal Allowance*) | Klíčový posun |
| :--- | :--- | :---: | :--- | :--- |
| **1981** | *The Wall Street Journal* (10. 12. 1981): *„A Proposal to Simplify Our Tax System“* | **19 %** | Původní koncept: manželé 6 200 USD, jednotlivec 3 800 USD, samoživitel (*head of household*) 5 000 USD | První veřejné představení konceptu dvou daňových přiznání velikosti pohlednice. |
| **1983** | Kniha *Low Tax, Simple Tax, Flat Tax* (McGraw-Hill) | **19 %** | 6 200 USD manželé / 3 800 USD jednotlivec / 5 000 USD samoživitel (+ přídavek na vyživované osoby) | Knižní rozpracování ekonomických efektů, daňové základny a zrušení odpočtů. |
| **1985** | 1. vydání *The Flat Tax* (Hoover Institution Press) | **19 %** | 9 000 USD manželé / 4 500 USD jednotlivec / 1 800 USD na vyživovanou osobu (4členná rodina: **12 600 USD**) | Klasická formulace modelu včetně návrhu zákonného znění (*A Flat Tax Law*), přenosu ztrát a pravidel přechodu. |
| **1995** | 2. přepracované vydání *The Flat Tax* (Hoover Institution Press) | **19 %** | 16 500 USD manželé / 9 500 USD jednotlivec / 14 000 USD samoživitel / 4 500 USD na vyživovanou osobu (4členná rodina: **25 500 USD**) | Inflační aktualizace pro projednávání v americkém Kongresu (inspirace pro návrh Armey–Shelby); detailnější rozpracování přechodových pravidel (doodepsání a „pravidlo 90 %“ pro staré úvěry). |
| **2007** | Aktualizované „Silver Anniversary“ vydání *The Flat Tax* (Hoover Institution Press) | **19 %** | Zachování konstrukce 19 % a osobní úlevy (v literatuře a analýzách CRS s referenční hodnotou 25 500 USD v dolarech roku 1995, s pravidlem každoroční indexace o CPI) | Reflexe 25 let celosvětového dopadu modelu, zejména v postkomunistické střední a východní Evropě (přičemž reálné reformy v Estonsku či na Slovensku převzaly jen plochou sazbu, nikoli čistý spotřební cash-flow design). |

> **Zásadní detail k rozsahu daně, který v odborné diskusi často zaniká:**
> Originální Hall–Rabushka Flat Tax v USA nahrazuje **pouze** federální daň z příjmu fyzických osob, federální daň z příjmu právnických osob a federální daň z dědictví a darů. **Nenahrazuje federální sociální odvody (Social Security / FICA — americké federální odvody na sociální a zdravotní pojištění)** ani státní a lokální daně (majetkové daně a lokální prodejní daně). Právě proto jim v USA pro rozpočtovou neutralitu stačila sazba **19 %** (srov. kapitola 4 — kontrast s hlavním návrhem [Daňová reforma podle Dekonstrukce státu](/danova-reforma)).

*Zdroje:* Hall & Rabushka, [*The Flat Tax* (2007 Silver Anniversary PDF, Hoover Institution)](https://www.hoover.org/sites/default/files/flat_tax_silver_anniversary.pdf); [Hoover Institution — *The Flat Tax*](https://www.hoover.org/research/flat-tax); [Tax Policy Center — *What is a flat tax?*](https://www.taxpolicycenter.org/briefing-book/what-flat-tax).

---

### 1.2 Přesná struktura původních pohlednic (Form 1 & Form 2)

V originální podobě (např. *The Flat Tax*, 2. vydání 1995, Hoover Institution Press) mají obě „pohlednice“ přesně definovanou strukturu řádků:

#### Form 1 — Individual Wage Tax (Daň ze mzdy jednotlivce / domácnosti)

Určeno výhradně pro peněžní pracovní a penzijní příjmy. Kapitálové příjmy (úroky, dividendy, kapitálové zisky, výnosy z podnikání) se sem vůbec nepíší.

| Řádek | Originální název (*The Flat Tax*, 1995) | Český význam a výpočet |
| :---: | :--- | :--- |
| **Line 1** | *Wages and salary* | Hrubé peněžní mzdy a platy |
| **Line 2** | *Pension and retirement benefits* | Vyplacené soukromé penze a důchodové dávky *(neplatí pro státní Social Security — viz oddíl 2.5)* |
| **Line 3** | *Total compensation* | Celkové odměny (`Line 1 + Line 2`) |
| **Line 4** | *Personal allowance* | Základní nezdanitelné minimum podle typu domácnosti:<br>• **(a)** *Married filing jointly:* 16 500 USD<br>• **(b)** *Single:* 9 500 USD<br>• **(c)** *Single head of household:* 14 000 USD |
| **Line 5** | *Number of dependents, not including spouse* | Počet vyživovaných osob (kromě manžela/manželky) |
| **Line 6** | *Personal allowances for dependents* | Úleva na vyživované osoby (`Line 5 × 4 500 USD`) |
| **Line 7** | *Total personal allowances* | Celkové nezdanitelné minimum (`Line 4 + Line 6`) |
| **Line 8** | *Taxable compensation* | Zdanitelný základ (`Line 3 − Line 7`, pokud kladné; jinak `0`) |
| **Line 9** | *Tax* | Vypočtená daň (`19 % × Line 8`) |
| **Line 10** | *Tax withheld by employer* | Zálohy sražené zaměstnavatelem během roku |
| **Line 11** | *Tax due* | Doplatek daně (`Line 9 − Line 10`, pokud kladné) |
| **Line 12** | *Refund due* | Přeplatek k vrácení (`Line 10 − Line 9`, pokud kladné) |

#### Form 2 — Business Tax (Podnikatelská cash-flow daň)

Povinná pro všechny podnikatelské subjekty bez rozdílu právní formy — korporace, osobní společnosti, OSVČ (*sole proprietorships*), pronajímatele nemovitostí i zemědělce.

| Řádek | Originální název (*The Flat Tax*, 1995) | Český význam a výpočet |
| :---: | :--- | :--- |
| **Line 1** | *Gross revenue from sales* | Hrubé tržby z prodeje zboží, služeb **včetně exportů** a celých prodejních cen prodaného majetku (strojů, budov i pozemků) |
| **Line 2** | *Allowable costs:* | Uznatelné reálné výdaje: |
| **Line 2(a)** | *Purchases of goods, services, and materials* | Nákupy zboží, služeb, energií, materiálu a zásob od jiných firem (**včetně importů**) |
| **Line 2(b)** | *Wages, salaries, and pensions* | Vyplacené peněžní mzdy, platy a příspěvky na penze zaměstnancům (**nikoli** nepeněžní benefity *fringe benefits*!) |
| **Line 2(c)** | *Purchases of capital equipment, structures, and land* | **100% okamžitý odpis** nákupů strojů, zařízení, budov **a pozemků (půdy)** v roce nákupu |
| **Line 3** | *Total allowable costs* | Celkové uznatelné výdaje (`Line 2a + Line 2b + Line 2c`) |
| **Line 4** | *Taxable income* | Daňový základ (`Line 1 − Line 3`; **může být záporný**) |
| **Line 5** | *Tax* | Daň před zápočtem přenosu (`19 % × Line 4`; **pokud je Line 4 záporný, je záporný i Line 5**) |
| **Line 6** | *Carry-forward from previous year* | Přenesený nevyužitý daňový štít (záporná daň) z předchozího roku |
| **Line 7** | *Interest on carry-forward* | Úrok z přenesené ztráty (tržní úroková sazba státních dluhopisů / poukázek; např. `6 % × Line 6` v ukázce 1995) |
| **Line 8** | *Carry-forward into current year* | Celkový disponibilní daňový štít v běžném roce (`Line 6 + Line 7`) |
| **Line 9** | *Tax due* | Daň k úhradě (`Line 5 − Line 8`, pokud kladné; jinak `0`) |
| **Line 10** | *Carry-forward to next year* | Daňový štít přenášený do dalšího roku (`Line 8 − Line 5`, pokud kladné) |

> **Pozor na algebraickou eleganci řádků 5–10 na Form 2:**
> Všimněte si, jak Form 2 zachází s novou ztrátou bez jediné podmíněné větvicí instrukce navíc: má-li firma v roce 1 základ `Line 4 = −10 000 000 Kč` (nakoupila stroje) a nulový předchozí přenos (`Line 6 = 0`, `Line 8 = 0`), pak `Line 5 = −1 900 000 Kč`. Na Řádku 9 (`Line 5 − Line 8`) vyjde záporné číslo → daň k úhradě = **0 Kč**. Na Řádku 10 (`Line 8 − Line 5 = 0 − (−1 900 000)`) automaticky vyjde **+1 900 000 Kč**, které se jako kladný kredit přenesou do dalšího roku a na Řádku 7 se zúročí!

---

### 1.3 Proč je Hall–Rabushka matematicky daň ze spotřeby (`R-base` cash flow tax = odčítací DPH s minimem)

Navzdory tomu, že se Form 1 jmenuje „Individual Wage Tax“ a Form 2 „Business Tax“, v součtu **nejde o daň z příjmu, ale o přímou daň ze spotřeby**.

#### 1. Makroekonomické odvození (uzavřená ekonomika)
Nechť v ekonomice značí:
- $Y$ = hrubý domácí produkt (součet přidané hodnoty všech firem = $\sum (\text{Tržby} - \text{Mezispotřeba})$),
- $W$ = celkový objem vyplacených mezd a penzí,
- $I$ = celkové hrubé soukromé investice (stroje, budovy, změna zásob),
- $C$ = soukromá spotřeba,
- $X$ = součet uplatněných nezdanitelných osobních minim na Form 1,
- $t$ = jednotná daňová sazba (v originále 19 %).

Agregovaná daňová základna **Form 2** za celou podnikovou sféru činí:

$$
\text{Základ}_{P2} = \sum (\text{Tržby} - \text{Nákupy od firem}) - W - I = Y - W - I
$$

Agregovaná daňová základna **Form 1** za všechny domácnosti činí:

$$
\text{Základ}_{P1} = W - X
$$

Sečteme-li obě základny (protože mají **identickou sazbu $t$**), mzdy $W$ se dokonale vykrátí:

$$
\text{Základ}_{\text{celkem}} = \text{Základ}_{P1} + \text{Základ}_{P2} = (W - X) + (Y - W - I) = (Y - I) - X = C - X
$$

Hall–Rabushka Flat Tax je tedy matematicky totožný s **odčítací daní z přidané hodnoty (subtraction-method VAT)** na spotřební bázi ($Y - I = C$), od níž je odečteno osobní nezdanitelné minimum $X$ (a která je rozdělena na dvě přiznání pouze proto, aby šlo $X$ vázat na konkrétní osobu a domácnost).

#### 2. Klasifikace podle Meadeho komise (1978): `R-base` cash flow tax
V přelomové zprávě britského Institute for Fiscal Studies *The Structure and Reform of Direct Taxation* ([Meade Committee, 1978](https://www.ifs.org.uk/publications/structure-and-reform-direct-taxation)) rozlišil nositel Nobelovy ceny James Meade tři základní architektury podnikových cash-flow daní:
1. **`R-base` (Real base):** Zdaňují se výhradně *reálné* peněžní toky (tržby za zboží/služby a reálná aktiva minus nákupy vstupů, investic a mezd). Veškeré finanční toky (půjčky, splátky jistiny, úroky, emise akcií, dividendy) se ignorují. **Hall–Rabushka Form 2 je čistá `R-base` cash flow daň.**
2. **`R+F base` (Real + Financial base):** Do základu vstupují reálné toky i veškeré *dluhové* finanční toky (přijaté úvěry a přijaté úroky jsou příjmem; poskytnuté úvěry, splátky dluhu a placené úroky jsou výdajem).
3. **`S-base` (Share / Shareholder base):** Zdaňují se čisté peněžní toky od firmy k akcionářům (vyplacené dividendy a zpětné odkupy akcií minus nové vklady vlastního kapitálu). Účetní identitou platí, že `S-base` je ekonomicky ekvivalentní `R+F base` (viz estonský model v sekci 3).

#### 3. Proč 100% okamžitý odpis znamená nulovou efektivní daň z normálního výnosu kapitálu (Cary Brownova věta, 1948)
Častá námitka laiků zní: *„Vždyť Form 2 daní firemní zisk 19 %, tak jak to, že nedaní kapitál?“* Odpověď dává klasická **Cary Brownova věta** (1948): okamžitý 100% odpis investice je v současné hodnotě přesně ekvivalentní **0% mezní efektivní daňové sazbě (METR = 0 %)** u normální návratnosti kapitálu — daň dopadá pouze na **ekonomickou rentu** (nadnormální zisk) a starý kapitál.

**Jednoduchý číselný důkaz (sazba $t = 20\ \%$, tržní úrok $r = 10\ \%$):**
- Investor koupí přes firmu stroj za **100 Kč**. Okamžitý 100% odpis na Form 2 mu ihned sníží daň o **20 Kč**. Jeho čistý hotovostní vklad je tedy jen **80 Kč** (stát se fakticky stal tichým společníkem s 20% podílem na nákladu i výnosu).
- Za rok stroj vygeneruje normální 10% hrubý výnos: tržbu **110 Kč** (a odepíše se / zanikne).
- Firma z tržby 110 Kč zaplatí 20% daň = **22 Kč**. Investorovi zůstane čistých **88 Kč**.
- Zhodnocení investorova vlastního vkladu: $(88 - 80) / 80 = \mathbf{10\ \%}$. **Efektivní zdanění normální návratnosti = přesně 0 %!**
- Pokud by ale stroj díky jedinečné inovaci přinesl nadnormální výnos 50 % (tržba **150 Kč**), firma zaplatí daň 30 Kč, investorovi zbývá 120 Kč (zisk 40 Kč na vkladu 80 Kč = 50 %; normální zisk 8 Kč nebyl zdaněn, nadnormální ekonomická renta 40 Kč hrubého byla zdaněna 20 %, tj. 8 Kč pro stát).

#### 4. Kritický rozdíl oproti evropské DPH: Origin-based (princip původu)
V otevřené ekonomice je zásadní rozdíl mezi:
- **Principem určení (*destination-based* — klasická DPH, DBCFT):** Exporty jsou osvobozeny (0 %), importy jsou zdaněny na hranici (nelze je odečíst). Základ daně = domácí spotřeba ($Y - I - EX + IM = C$, kde $EX$ jsou exporty a $IM$ importy).
- **Principem původu (*origin-based* — originální Hall–Rabushka):** Exporty jsou **zahrnuty** v tržbách na Řádku 1 Form 2 (zdaněny doma), zatímco importy vstupů a strojů jsou **odečitatelné** na Řádku 2a/2c (nezdaněny doma). Základ daně v otevřené ekonomice = domácí produkce minus investice ($Y - I = C + EX - IM$).

Hall a Rabushka navrhli svůj systém jako **teritoriální (origin-based)** bez hraničního vyrovnání (*border tax adjustment*). V teoretickém modelu plovoucích měnových kurzů tvrdí, že směnný kurz vyrovná dopad na obchodní bilanci. Jenže v reálném světě nadnárodních korporací má *origin-based* princip zásadní slabinu: **ponechává živou motivaci k manipulaci s převodními cenami (transfer pricing) při vysoké sazbě `Y %` u licencí, na rozdíl od dluhového přesunu, který zcela ruší** — firma může podhodnotit exportní cenu pro zahraniční dceru v nízkodaňové jurisdikci a nadhodnotit cenu importované licence či součástky (viz [Auerbach & Devereux, NBER WP 19579](https://www.nber.org/papers/w19579); [Bradford, NBER WP 10676](https://www.nber.org/papers/w10676)).

---

## 2. Klíčové a nejméně známé technické detaily (kde se debaty lámou)

Zatímco slogan „dvě pohlednice“ působí dokonale čistě, skutečné ekonomické a legislativní výzvy Halla & Rabushky leží v sedmi okrajových oblastech. Právě zde obhájci rovné daně v odborných polemikách nejčastěji narazí.

### 2.1 Úroky, půjčky, banky a pojišťovny (achillova pata `R-base`)

#### Proč úroky u běžných firem a lidí mizí z obou pohlednic
V originálním H&R si nefinanční firma **nemůže odečíst zaplacené úroky** na Form 2 a fyzická osoba (ani firma) **nedaní přijaté úroky** na Form 1 ani Form 2. Důvod je čistě ekonomický:
- Úrok je pouze přerozdělením výnosu z reálného aktiva mezi vlastníka a věřitele. Protože celý peněžní tok z reálného aktiva už podléhá 19% dani na Form 2 u dlužníka (který aktivum provozuje), úrokový tok je už „zdaněn u zdroje“.
- Tím zcela mizí **daňové zvýhodnění dluhu oproti vlastnímu kapitálu (*debt bias*)**, které v současných systémech (kde jsou úroky náklad a dividendy nikoli) motivuje firmy k nadměrnému zadlužování.
- Hall a Rabushka argumentují, že zrušení daně z úroků u věřitelů a odečitatelnosti u dlužníků okamžitě **stlačí tržní úrokové sazby dolů** (věřitel nepotřebuje kompenzaci za daň z úroku, dlužník nedostává daňové zvýhodnění dluhu — úrokový štít).

#### Kde se čistá `R-base` láme: Banky a finanční zprostředkovatelé
Běžná fabrika prodá zboží za jasnou cenu na faktuře. Komerční banka ale většinu svých služeb (vedení běžného účtu, platební styk, likvidita, vyhodnocení úvěrového rizika) nefakturuje explicitními poplatky — schovává jejich cenu do **úrokového rozpětí (*interest spread*)**, tj. rozdílu mezi úrokem z poskytnutých úvěrů (např. 7 %) a úrokem placeným vkladatelům (např. 2 %). Spread 5 % je ve skutečnosti implicitně účtovaná cena finanční služby.

Pokud by na banku dopadla čistá `R-base` bez úprav (ignorující všechny úroky), pak by:
1. Banka zdanila jen explicitní poplatky (Řádek 1), ale odečetla by si všechny své budovy, IT, pronájmy a mzdy bankéřů (Řádky 2a–2c) → vykazovala by permanentní obří **daňovou ztrátu**, přestože by byla vysoce zisková!
2. Spotřeba bankovních služeb financovaných ze spreadu by z daňové základny zcela unikla.

**Jak to řeší Hall & Rabushka (a jaká je alternativa):**
- **Přístup Halla & Rabushky (imputace služeb ze spreadu):** V *The Flat Tax* (a v návrzích vycházejících z jejich zákona) vyžadují pro finanční instituce **zvláštní pravidlo na Form 2**: banka musí odhadnout hodnotu přibalených finančních služeb skrytých v úrokovém rozpětí (např. rozdíl mezi úroky z úvěrů a referenční čistou tržní / státní úrokovou sazbou na straně úvěrů a rozdíl mezi referenční sazbou a úrokem na vkladech na straně depozit, případně čisté úrokové rozpětí snížené o náklady rizika) a tuto imputovanou hodnotu zahrnout do tržeb na Řádku 1.
- **Kritika Davida Bradforda (1996) a Meadeho alternativa `R+F`:** Jak ukázal [David Bradford (*Treatment of Financial Services under Income and Consumption Taxes*, 1996)](https://www.taxpolicycenter.org/briefing-book/what-x-tax), administrativní hledání „správné referenční sazby“ pro každý typ úvěru a rizikovou prémii přináší do jednoduché pohlednice značnou složitost. Alternativou je buď ponechat u finančních institucí **`R+F base`** (započítávat všechny úvěrové a vkladové peněžní toky včetně jistin a úroků přímo do cash flow banky — pak se úrokový spread zdaní automaticky bez referenční sazby, jak rozpracovávají i [Auerbach, Devereux, Keen & Vella, Oxford CBT WP 17/01](https://oxfordtax.sbs.ox.ac.uk/files/wp17-01pdf)), nebo smířit se s částečným osvobozením finančních služeb podobně jako v evropské DPH (kde jsou finanční služby osvobozeny bez nároku na odpočet na vstupu).

#### Pojišťovny (riziko vs. spoření)
Pojišťovnictví klade podobnou strukturální past:
- **Neživotní pojištění (majetek, auta, odpovědnost):** Přidanou hodnotou pojišťovny (cenou služby sdílení rizika) je rozdíl mezi **přijatým pojistným a vyplaceným pojistným plněním** (plus explicitní poplatky). Pokud pojistné vstupuje na Řádek 1 a vyplacené škody (spolu s náklady pojišťovny) na Řádek 2, je reálná služba pojišťovny zdaněna správně (u B2B pojištění se odečte na straně pojištěné firmy).
- **Životní a investiční pojištění:** Kombinuje službu krytí rizika se spořicím produktem. Čistá spořicí složka (vklad a zhodnocení rezervy pojištěnce) musí být z obchodních tržeb pojišťovny vyloučena, jinak by byla dvojitě zdaněna jako spotřeba — oddělení obou složek vyžaduje specializovaná účetní pravidla pro pojišťovny.

---

### 2.2 Ztráty a jejich úročený přenos (*Loss Carryforward with Interest*)

Při 100% okamžitém odpisu investic bude záporný daňový základ na Form 2 zcela běžným jevem — zažije ho každý nový startup, každá firma stavějící halu, kupující flotilu kamionů nebo investující roky do vývoje softwaru/léků před prvními tržbami.

- **Proč stát neposílá okamžitou vratku (cash refund):** V čisté teorii (a v klasické DPH u nadměrného odpočtu) by stát poslal firmě 19 % ze záporného základu rovnou na účet. Hall a Rabushka to **vědomě odmítají** kvůli dvěma rizikům: (1) extrémní riziko daňových podvodů (vznik účelových schránek s fiktivními fakturami za „investice“ za účelem vysátí hotovosti ze státní pokladny) a (2) prudké výkyvy státních příjmů v recesi.
- **Řešení Halla & Rabushky:** Neomezený časový přenos záporné daně (*unlimited carry-forward*, Řádky 6–10 Form 2), **navýšený každý rok o tržní úrokovou sazbu** (navázanou na výnos státních pokladničních poukázek / dluhopisů; v ilustrativním formuláři z roku 1995 použili příklad 6 %).
- **Proč je úročení pro startupy a investice naprosto zásadní:**
  - Představme si startup, který v roce 0 investuje 100 mil. Kč a zisk začne generovat až v roce 6.
  - **Bez úročení přenosu** (jako u dnešní české daňové ztráty, která navíc propadá po 5 letech!) reálná hodnota 19milionového daňového štítu při 8% diskontní sazbě klesne za 6 let na $19 / 1{,}08^6 \approx 12{,}0$ mil. Kč. Velký zavedený koncern si naopak 100 mil. Kč odečte okamžitě proti ziskům jiných divizí a dostane plných 19 mil. Kč hned v roce 0. **Bez úročení přenosu by 100% odpis masivně zvýhodňoval staré monopolní obry na úkor startupů a porušil by Cary Brownovu neutralitu (METR > 0 %)!**
  - **S úročením přenosu** se hodnota daňového štítu v čase zachovává v současné hodnotě ($19 \times (1+r)^6$ diskontováno zpět dává opět 19 mil. Kč).
- **Zbývající okrajový problém (krach a riziková prémie):** Ani úročený přenos nevyřeší případ, kdy startup **úplně zkrachuje** a nikdy nevykáže kladný daňový základ — jeho daňový štít propadne, pokud zákon nedovolí vratku při likvidaci nebo volný převod daňové ztráty při prodeji/fúzi firmy. Navíc stát úročí bezrizikovou sazbou státních dluhopisů, zatímco náklad kapitálu rizikového startupu je podstatně vyšší.

---

### 2.3 Půda, nemovitosti, nájemné a hypotéky

Toto je jedna z oblastí s největším množstvím mýtů v českých i amerických debatách.

#### 1. Půda (pozemky) SE v originálním Hall–Rabushka odepisuje 100 % hned!
Na rozdíl od současných daní z příjmů (kde se pozemky vůbec neodepisují, protože nemají dobu životnosti), **Řádek 2(c) na Form 2 výslovně zní: *„Purchases of capital equipment, structures, and land.“***
- Koupí-li podnik pozemek za 20 mil. Kč, odečte celých 20 mil. Kč okamžitě v roce nákupu.
- **Proč to není daňový dárek:** V okamžiku, kdy podnik pozemek prodá (třeba za 35 mil. Kč), vstupuje **celá hrubá prodejní cena (35 mil. Kč)** jako zdanitelný příjem na Řádek 1 Form 2!
- **Obrovská praktická výhoda:** Zcela odpadá umělé účetní a znalecké rozdělování kupní ceny na „hodnotu stavby“ (odepisovatelné) a „hodnotu holého pozemku pod stavbou“ (neodepisovatelného). Právě nemožnost zjistit tržní cenu holého pozemku pod domem je důležitým argumentem v českých debatách o dani z hodnoty půdy.

#### 2. Nájemní a komerční nemovitosti
Všichni vlastníci komerčních i rezidenčních **nájemních** nemovitostí podléhají Form 2 jako podnikatelé:
- Přijaté nájemné jde na Řádek 1.
- Nákup bytu/domu/pozemku, rekonstrukce, údržba a provozní náklady jdou na Řádek 2 (okamžitě 100 %).
- Prodej nájemní nemovitosti znamená zdanění celé prodejní ceny na Řádku 1 (žádné oddělené časové testy ani evidence historické pořizovací ceny!).

#### 3. Vlastní bydlení (*owner-occupied housing*), hypotéky a imputované nájemné
- **Konec odpočtu úroků z hypotéky:** Hall & Rabushka ruší veškeré položkové odpočty na Form 1 — včetně odpočtu úroků z hypoték (*mortgage interest deduction*) a odpočtu místní daně z nemovitosti.
- **Žádné danění imputovaného nájemného ani prodeje vlastního bytu/domu:** Soukromá osoba bydlící ve vlastním domě na Form 1 nedaní ani fiktivní „imputované nájemné“, ani kapitálový zisk při případném prodeji svého obydlí.
- **Proč je to z hlediska spotřební daně konzistentní (*tax-prepaid method*):** Když developer postaví nový dům a prodá jej domácnosti za 10 mil. Kč, developer tuto částku zdaní 19 % na svém Form 2. Protože cena nového domu představuje současnou hodnotu všech budoucích „služeb bydlení“, které dům poskytne, je spotřeba bydlení **zdaněna předem jednorázově při výstavbě a prvním prodeji** (*tax prepayment*). Není proto ekonomicky nutné ani žádoucí každý rok odhadovat a danit imputované nájemné. Hall a Rabushka navíc dodávají, že kapitálové zisky z dlouhodobě držených domů jsou z velké části inflační a nemovitosti již podléhají lokálním majetkovým daním.

#### 4. Skrytý okrajový případ: Nákup půdy/bytu firmou od soukromé osoby (nepodnikatele)
Co se stane, pokud si soukromá osoba (která nepodává Form 2) koupila před 20 lety pozemek nebo rodinný dům a dnes ho prodá firmě za 20 mil. Kč?
- Kdyby firma automaticky odečetla 20 mil. Kč na Řádku 2c (daňová úspora 3,8 mil. Kč) a soukromý prodávající zaplatil 0 Kč na Form 1, vznikla by obří arbitráž (lidé by prodávali své soukromé pozemky vlastním s. r. o. a čerpali fiktivní daňové štíty!).
- Legislativní implementace Hall–Rabushka proto musí zavést **symetrii převodu** mezi soukromou a podnikovou sférou: buď je odpis na Řádku 2c možný **jen při nákupu od subjektu, který prodej zdaní na Form 2** (případně prodej nebydlící/investiční půdy je ze zákona vždy podnikatelskou transakcí na Form 2), nebo se u převodu soukromého obydlí do podnikání odpis nepovolí (a následně se zdaní až čistý rozdíl / nájemné).

---

### 2.4 Zaměstnanecké benefity (*Fringe Benefits*)

V každém daňovém systému, kde jsou mzdy zdaněny a firemní náklady odečitatelné, hrozí masivní únik: firma místo vyšší mzdy poskytne zaměstnanci luxusní služební auto k soukromému užití, firemní byt, soukromou zdravotní péči, stravenky, školné pro děti nebo „pracovní“ dovolenou.

**Elegantní pojistka Halla & Rabushky:**
- Řádek 2(b) na Form 2 povoluje podniku odečíst **výhradně peněžní mzdy, platy a penzijní příspěvky** (*cash wages, salaries, and pension contributions*).
- **Žádné nepeněžní zaměstnanecké benefity (*fringe benefits*) nejsou pro firmu daňově odečitatelné!**
- **Důsledek:** Koupí-li firma zaměstnanci soukromé zdravotní pojištění nebo mu poskytne auto k soukromému užití za 200 000 Kč ročně, **nesmí** si tento výdaj odečíst na Form 2. Tím z něj sama firma zaplatí 19 % (38 000 Kč) přímo u zdroje. Zaměstnanec nic nehlásí na Form 1 a stát nemusí vést složité spory o tržní ocenění benefitu u milionů jednotlivců.

**Dva zásadní vedlejší efekty, které je nutné znát:**
1. **Penalizace benefitů u nízkopříjmových pracovníků:** Pokud zaměstnanec vydělává pod nezdanitelným minimem $X$, jeho mezní sazba na Form 1 je **0 %**. Pokud mu firma dá 10 000 Kč v hotovosti na mzdě, celková daň je **0 Kč**. Pokud mu dá benefit za 10 000 Kč, firma z něj zaplatí 19 % (**1 900 Kč**)! Systém tak přirozeně tlačí trh k vyplácení čistých peněz místo firemních benefitů (což v USA zásadně narušuje historický model zdravotního pojištění vázaného na zaměstnavatele).
2. **Neziskovky a státní zaměstnavatelé:** Stát ani nezisková organizace nepodávají podnikový Form 2, takže zákaz odpočtu by u nich měl nulový účinek! Kdyby neexistovalo zvláštní pravidlo, státní úřady a neziskovky by mohly přelít část odměn do nezdaněných benefitů. Hall & Rabushka (a na ně navazující návrhy rozebírané ve zprávách Congressional Research Service) proto zavádějí **zvláštní 19% daň placenou přímo vládními a neziskovými zaměstnavateli z hodnoty nepeněžních benefitů** (kromě penzijních příspěvků) poskytovaných jejich zaměstnancům.
3. **Hraniční šedá zóna „pracovní vs. soukromý výdaj“:** Zákaz odpočtu benefitů samozřejmě nevylučuje nutnost kontrolovat hranici mezi oprávněným pracovním vstupem (řádek 2a — např. služební cesta, pracovní notebook) a skrytou soukromou spotřebou majitele či zaměstnance (rodinná dovolená, osobní vůz). Kontrola této jediné hranice je však nesrovnatelně užší než dnešní daňový zákoník.

---

### 2.5 Prodej firmy, zásoby, penze, neziskovky, státní zaměstnanci, dědictví a dary

#### Prodej firmy: *Asset sale* vs. *Stock sale*
V Hall–Rabushkově modelu existuje naprosto čisté a bezarbitrážní oddělení obou typů transakcí:
- **Prodej akcií / obchodního podílu (*Stock sale*):** Jde o finanční transakci s majetkovým cenným papírem, která stojí mimo `R-base`. Prodávající zakladatel/akcionář platí **0 %** (neuvádí se na Form 1). Kupující si kupní cenu akcií **nemůže odečíst** na Form 2. Proč je to férové? Protože firma pod akciemi pokračuje dál a všechny její budoucí peněžní toky zůstanou zdaněny 19 % na Form 2 — kupující už tuto budoucí daňovou zátěž promítl do ceny, kterou za akcie zaplatil.
- **Prodej aktiv / podniku jako celku (*Asset sale*):** Jde o reálnou transakci uvnitř `R-base`. Prodávající firma (nebo OSVČ) zahrne 100 % prodejní ceny strojů, budov, pozemků, zásob a nehmotného majetku na Řádek 1 Form 2 (odvede 19 %). Kupující firma si 100 % zaplacené kupní ceny okamžitě odečte na Řádku 2a/2c Form 2 (ušetří 19 %). **Čistý daňový dopad pro státní rozpočet z celé transakce = 0 Kč** — dojde pouze k přenosu daňového štítu mezi stranami, což se automaticky promítne do sjednané kupní ceny (cena při *asset sale* je o hodnotu daňového štítu vyšší než při *stock sale*).

#### Zásoby (*Inventory*)
V současném účetnictví představují zásoby (metody FIFO, LIFO, vážený průměr, aktivace nedokončené výroby) zdroj rozsáhlé administrativy a zkreslení při inflaci. V Hall–Rabushkově modelu se **veškeré nákupy zboží, surovin a materiálu odečítají 100 % okamžitě při nákupu** na Řádku 2(a). Skladové účetnictví pro daňové účely zcela mizí! *(Jedinou výjimkou je přechod v den 1 pro zásoby nakoupené ještě za starého systému a dosud neuplatněné v nákladech — viz oddíl 2.6).*

#### Penzijní spoření, důchodové účty IRA / 401(k) a státní důchody (*Social Security*)
- **Zaměstnanecké penzijní plány (režim EET — *Exempt, Exempt, Taxed*):** Zaměstnavatel si příspěvky na penze odečte na Řádku 2(b) Form 2. V samotném penzijním fondu se zhodnocení nedaní. Teprve při výplatě důchodu se vyplacená penze zdaní na Řádku 2 Form 1 příjemce (přičemž důchodce uplatní plné nezdanitelné minimum $X$, takže menší důchody jsou efektivně zdaněny 0 %).
- **Individuální spoření a investice (režim TEE — *Taxed, Exempt, Exempt*):** Jednotlivec spoří ze zdaněné mzdy (Form 1) do akcií, ETF, dluhopisů či vlastních účtů; veškeré budoucí výnosy, dividendy, úroky i výběry mají sazbu **0 %**. Matematicky mají režimy EET a TEE při konstantní daňové sazbě totožnou současnou hodnotu. Celá ekonomika se tak mění v jeden univerzální daňově osvobozený spořicí účet — speciální daňové konstrukce typu 401(k), IRA (americké daňově zvýhodněné důchodové účty) a Keogh (v ČR penzijní připojištění / DIP) ztrácejí svůj daňový důvod existence.
- **Státní důchody (*Social Security*):** V originálním modelu Halla & Rabushky jsou dávky Social Security na Form 1 **zcela osvobozeny (0 %)**, protože ani zaměstnanecká, ani zaměstnavatelská část odvodů FICA není odečitatelná na Form 1 ani na Form 2 (předplacené zdanění).

#### Neziskové organizace, charity a státní zaměstnanci
- **Zrušení odpočtu darů charitám:** Hall & Rabushka zcela ruší odpočet charitativních darů na Form 1. Argumentují, že každý selektivní položkový odpočet komplikuje přiznání, otevírá dveře lobbingu a při fixním objemu státního rozpočtu zužuje daňový základ na úkor vyšší obecné sazby pro ostatní poplatníky (přičemž soukromou filantropii podle nich přirozeněji podpoří nižší obecná sazba a vyšší čisté příjmy než daňové výjimky).
- **Zdanění neziskovek:** Hlavní nezisková činnost a přijaté dary jsou od Form 2 osvobozeny. Pokud ale neziskovka provozuje běžnou komerční činnost (obdoba americké *UBIT* — daně z nesouvisejícího podnikatelského příjmu neziskových organizací), podléhá Form 2. Z nepeněžních benefitů zaměstnanců odvádí 19 % (viz 2.4).
- **Státní zaměstnanci:** Jejich mzdy jsou standardně zdaněny na Form 1 se stejným nezdanitelným minimem $X$; stát jako zaměstnavatel odvádí 19 % z případných nepeněžních benefitů.

#### Dědictví a dary (*Estate and Gift Taxes*)
Hall & Rabushka navrhují **úplné zrušení dědické a darovací daně (0 %)**. V logice spotřební daně byl předávaný majetek již jednou zdaněn při svém vzniku (jako mzda či podnikatelské cash flow); předání majetku dědicům nepředstavuje novou spotřebu a zdanění při smrti by bylo dvojím zdaněním úspor trestajícím mezigenerační akumulaci kapitálu.

---

### 2.6 Přechodový problém (*Day-1 Transition*): Nejtěžší politická i ekonomická bariéra

Přechod ze stávající daně z příjmu na Hall–Rabushkovu spotřební cash-flow daň vytváří v „Den 1“ tři obrovské jednorázové přesuny bohatství (*windfall gains & losses*):

#### 1. Starý neodepsaný kapitál (*Unrecovered Depreciation Basis*) a staré zásoby
Představme si firmu, která den před reformou koupila výrobní linku za 100 mil. Kč (a ze starého zákona ji měla odepisovat 10 let) nebo má na skladě zaplacené zásoby za 50 mil. Kč, které se v dani z příjmu promítnou do nákladů až při prodeji.
- Pokud se v Den 1 přejde „natvrdo“ (*cold turkey*) na Hall–Rabushku, **nové** stroje koupené po reformě dostanou okamžitý 100% odpis, zatímco **starý** stroj ztratí veškeré zbývající budoucí odpisy (90 mil. Kč) — přičemž tržby z jeho výroby budou normálně zdaněny 19 %!
- Totéž platí pro existující skladové zásoby nakoupené před reformou: při prodeji po reformě vstoupí celá tržba na Řádek 1, aniž by firma získala náklad na pořízení zásob!
- Ekonomicky jde o **jednorázovou skrytou kapitálovou daň na starý kapitál (*one-time capital levy*)**.

#### 2. Staré úspory a důchodci (*Generational Windfall Loss*)
Důchodci a starší generace si naspořili majetek ze zdaněných mezd za starého systému. V často citované OLG simulaci životního cyklu (kalibrované pro fixní výdaje státu bez úspor compliance) publikované v *American Economic Review* — [Altig, Auerbach, Kotlikoff, Smetters & Walliser (2001; NBER WP 6248)](https://www.nber.org/papers/w6248) — ekonomové vyčíslili dopad přechodu USA na pět modelů včetně Hall–Rabushky *s přechodovou úlevou* a *bez ní*:
- Přechod na spotřební daň bez přechodových úlev přináší nejvyšší dlouhodobý makroekonomický růst (u čisté proporcionální spotřební daně až cca **+11 % dlouhodobého HDP**), protože jednorázová daň na starý kapitál je ekonomicky nedeformační a umožňuje nižší trvalou sazbu pro nové investice a práci.
- **Cenou v amerických podmínkách je ale ztráta blahobytu současných starších generací (důchodců)**, které drží většinu existujícího kapitálu a nesou jeho znehodnocení (pokles ceny starého kapitálu vůči novému kapitálu s 100% odpisem, případně cenový skok u nepřímých spotřebních daní).
- Poskytnutí přechodové úlevy (*transition relief*) starší generace ochrání, ale vyžaduje vyšší daňovou sazbu během přechodu a **citelně snižuje dlouhodobý růstový přínos reformy**.
- **Zásadní korekce pro Českou republiku (rozdíl oproti USA):** Simulace Altiga et al. (2001) modeluje **Spojené státy, které nemají federální DPH** — teprve tam by zavedení spotřební daně vytvořilo zcela nový daňový klín na úspory seniorů. V České republice však důchodci **už dnes platí 21% a 12% DPH** a v cenách promítnutou 21% DPPO i 33,8% odvody zaměstnavatele (srov. [Kritika a protiargumenty](/danova-reforma/vyzkum/08-hr-kritika-a-protiargumenty)). Nahrazení stávajících českých daní modelem Hall–Rabushka proto **nevytváří žádný nový cenový šok na úspory důchodců** (při zeštíhlení státu by reálná kupní síla jejich úspor naopak vzrostla); skutečné české přechodové téma se týká výhradně **existujících neodepsaných firemních aktiv a běžících úvěrů**.

#### 3. Existující dluhové smlouvy a hypotéky
Firmy a domácnosti s existujícími dlouholetými úvěry a hypotékami si sjednaly úrokové sazby v prostředí, kde byly úroky daňově odečitatelné pro dlužníka a zdanitelné pro věřitele. Okamžité zrušení odpočtu úroků bez přechodu způsobí prudký jednorázový přesun bohatství od zadlužených firem a majitelů domů s hypotékou směrem k věřitelům (bankám a držitelům dluhopisů).

#### Jak přesně přechod navrhovali řešit samotní Hall & Rabushka (*The Flat Tax*, 1995/2007)
1. **Dočasné doodepsání starého kapitálu:** Hall & Rabushka připouštějí jako politicky schůdnou variantu povolit firmám **doodepsat zbývající daňovou zůstatkovou cenu starých aktiv** (a starých zásob) podle předchozích pravidel během zhruba 5letého přechodného období. Spočítali však fiskální cenu: dočasné zúžení základu (nižší inkaso) by vyžadovalo zvýšit sazbu z **19 % na přibližně 20,1 %** do doby, než starý kapitál doodepíše, poté by sazba klesla zpět na 19 % a přechodové ustanovení by ze zákona zmizelo (*sunset clause*).
2. **Geniální „Pravidlo 90 %“ (*The 90 Percent Rule*) pro existující úvěry a hypotéky:** Aby ochránili majitele starých hypoték a zadlužené firmy bez trvalého zaneřádění zákona, navrhli dobrovolné přechodové pravidlo pro smlouvy uzavřené před reformou:
   - Dlužník se může rozhodnout nadále si odečítat **90 %** zaplacených úroků ze staré smlouvy.
   - Současně ale musí věřitel z takové smlouvy zahrnout **100 %** přijatých úroků do svého zdanitelného základu!
   - Tato záměrná **10% daňová asymetrie** vytvoří okamžitou vzájemnou výhodu pro obě strany, aby starý úvěr rychle dobrovolně přefinancovaly na novou smlouvu s nižším úrokem už v čistém bezdaňovém režimu — přechodové pravidlo se tak samo „vypne“ tržní cestou.

---

## 3. Srovnání s příbuznými moderními modely

Od roku 1981 vyvinula moderní daňová teorie a praxe několik klíčových nástupců a příbuzných modelů, z nichž každý řeší jinou slabinu originálního Halla & Rabushky:

1. **Bradford X-Tax** ([David F. Bradford, 1986; NBER WP 10676, 2004](https://www.nber.org/papers/w10676); Carroll & Viard, AEI 2012; [Tax Policy Center](https://www.taxpolicycenter.org/briefing-book/what-x-tax)):
   - Akademická varianta, která zachovává **identickou podnikovou `R-base` cash-flow daň** na Form 2 (100% odpis, bez odpočtu úroků, bez danění kapitálových výnosů jednotlivců), ale na Form 1 (mzdy) nahrazuje jednu rovnou sazbu **progresivními pásmy** (např. 0 % – 15 % – 25 % – 30 %), přičemž **nejvyšší mzdová sazba se rovná podnikové sazbě** (případně s vratným kreditem pro nízkopříjmové). V pozdější verzi (2004) Bradford přidal i návrh *destination-based* principu.
   - **Dvě fatální ceny z pohledu teorie veřejné volby (*Public Choice*):** (1) **Ničí Buchananův zámek obecnosti (*generality principle*)** — politici mohou znovu zvyšovat horní sazbu úzké menšině voličů bez dopadu na mediánového voliče, čímž se okamžitě vrací lobbing za výjimky i inflační posun do vyšších pásem (*bracket creep*); (2) **otevírá velkou arbitrážní mezeru mezi mzdou a ziskem u rodinných a jednoosobových s. r. o.**, jejichž majitelé mají silnou daňovou motivaci přelévat firemní zisk do nižších mzdových pásem Form 1 místo zdanění na Form 2.

2. **Auerbach–Devereux DBCFT (*Destination-Based Cash Flow Tax*)** ([Auerbach & Devereux, NBER WP 19579, 2013](https://www.nber.org/papers/w19579); [Auerbach, Devereux, Keen & Vella, Oxford CBT WP 17/01, 2017](https://oxfordtax.sbs.ox.ac.uk/files/wp17-01pdf)):
   - Firemní cash-flow daň (`R-base` nebo `R+F base`) s odečtem domácích mezd a **hraničním vyrovnáním (*Border Tax Adjustment*, BTA)**: exporty jsou z tržeb vyjmuty (0 %), importy nelze odečíst (efektivně zdaněny na hranici). Model inspiroval republikánský plán *A Better Way* v USA (2016).
   - **Co řeší:** Kompletně a strukturálně **likviduje přesuny zisků (BEPS), transfer pricing, využívání nízkodaňových jurisdikcí a přesuny duševního vlastnictví** — daň se platí výhradně podle místa konečného zákazníka (který je relativně imobilní).
   - **Klíčové limity:** (a) V teorii je BTA obchodně neutrální díky okamžitému posílení měnového kurzu o $t/(1-t)$, což ale v praxi způsobuje jednorázové masivní přecenění zahraničních aktiv/dluhů a nefunguje uvnitř měnové unie (eurozóny); (b) **kritický právní problém s WTO** — protože DBCFT umožňuje odečíst domácí mzdy (na rozdíl od DPH), obchodní právo (GATT / Dohoda o subvencích) ho pravděpodobně klasifikuje jako *přímou daň*, kde je hraniční vyrovnání zakázanou exportní subvencí.

3. **Estonský model (*Distributed Profit Tax*, DPT, zaveden r. 2000)** ([Tax Foundation ITCI 2026](https://taxfoundation.org/research/all/global/2026-international-tax-competitiveness-index/); [Estonian Tax and Customs Board — EMTA](https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/tax-rates)):
   - Korporátní daň podle **`S-base` cash-flow logiky**: nerozdělené a reinvestované zisky firem mají sazbu **0 %**; daň **22 %** (počítaná jako `22/78` z čisté vyplacené částky, tj. 28,21 % k čisté dividendě) se platí až při rozdělení zisku akcionářům (dividendy, zpětné odkupy, fiktivní distribuce, nepodnikatelské náklady a benefity).
   - **Kritické vyvrácení častého mýtu:** Estonský model **není** Hall–Rabushka! Nahrazuje pouze daň z příjmu právnických osob (DPPO). V letech 2025–2026 má Estonsko vedle DPT současně **24% základní sazbu DPH** (od 1. 7. 2025), **22% rovnou daň z příjmu FO** (od r. 2026 s jednotným osvobozením €700/měsíc po zrušení „daňového hrbu“), **33% sociální daň placenou zaměstnavatelem** (20 % důchody + 13 % zdravotnictví) a místní **daň z hodnoty půdy (0,1–2,0 %)** bez roční daně z budov. Díky kombinaci DPT, široké DPH a čisté daně z půdy drží Estonsko dlouhodobě 1. místo v *International Tax Competitiveness Index* (Tax Foundation) v rámci OECD.

4. **Klasická DPH (*Credit-Invoice VAT*, model EU)** ([Směrnice Rady 2006/112/ES](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32006L0112), ve znění [Směrnice (EU) 2018/912](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018L0912)):
   - Nepřímá spotřební daň na principu určení (*destination-based*), vybíraná fakturační metodou (daň na výstupu minus daň na vstupu).
   - Na rozdíl od Hall–Rabushky **neodečítá mzdy** (mzdy jsou zdaněny uvnitř ceny zboží) a **nemá osobní nezdanitelné minimum $X$**, takže v ročním snímku k běžnému příjmu zatěžuje nízkopříjmové domácnosti vyšším podílem (v celoživotním pohledu je ovšem jednotná spotřební daň proporcionální).
   - Výhodou je křížová fakturační stopa v B2B, vykoupená ovšem zranitelností vůči karuselovým podvodům na vratkách; právní realitou v EU je čl. 97 směrnice 2006/112/ES (trvale potvrzený směrnicí (EU) 2018/912), který členským státům zakazuje snížit základní sazbu DPH pod **15 %**.

### Přehledná srovnávací tabulka modelů

| Dimenze | Hall–Rabushka Flat Tax (1985/1995/2007) | Bradford X-Tax (1986/2004) | Auerbach–Devereux DBCFT (2013/2017) | Estonský model DPT (2000–2026) | Klasická DPH (EU Credit-Invoice VAT) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ekonomická báze (Meade 1978)** | Spotřební / `R-base` cash flow (P2) + mzdy s minimem (P1) | Spotřební / `R-base` cash flow (P2) + progresivní mzdy (P1) | Podniková spotřební / `R-base` (příp. `R+F`) + BTA | Pouze CIT: **`S-base`** (zdanění rozděleného zisku) | Nepřímá spotřební daň (`Y − I` vč. mezd) |
| **Zdanění práce (mezd)** | Rovná sazba (19 %) nad osobním minimem $X$ | **Progresivní pásma** (0 % až sazba P2) + možný kredit | Ponechává samostatnou daň z příjmu FO (mzdy odečitatelné v DBCFT) | Samostatná PIT 22 % + **33 % sociální daň** zaměstnavatele | Mzdy nejsou odečitatelné → jsou plně uvnitř základu DPH |
| **Progresivita** | Efektivní progrese skrze minimum $X$; konstantní mezní sazba | Progresivní pásma na mzdách (za cenu ztráty obecnosti a arbitráže v s. r. o.) | Nulová sama o sobě (řešena přes samostatnou daň z příjmu FO) | Omezená (rovná PIT 22 % + sleva €700/měs. v 2026) | Žádná v konstrukci daně (regresivní v ročním snímku; proporcionální celoživotně) |
| **Odpisy investic (a půdy)** | **100 % okamžitě** (stroje, budovy i půda) | **100 % okamžitě** | **100 % okamžitě** | **0 % na reinvestice** (odpis není potřeba — daní se až výplata) | 100 % okamžitý odpočet DPH na vstupu u investic |
| **Úroky a dluh (*debt bias*)** | Bez odpočtu úroků / bez daně z úroků → **nulový debt bias** | Nulový *debt bias* | Nulový *debt bias* (v `R-base` i `R+F`) | Riziko zneužívání „půjček majiteli“ místo dividend (nutné anti-abuse pravidlo) | Finanční služby z DPH obvykle osvobozeny bez nároku na odpočet |
| **Finanční sektor (banky)** | **Slabina `R-base`:** nutná imputace služeb ze spreadu | Podobně (imputace nebo `R+F` pro finanční sektor) | Navrhováno `R+F` pro finanční sektor | Jednoduché v `S-base`: banky daní až rozdělený zisk (příp. zálohy v EST) | Složitá výjimka: osvobození bez odpočtu (skryté kaskádování u B2B) |
| **Mezinárodní princip** | **Origin-based** (exporty zdaněny, importy odečitatelné) | Origin-based (1986) / **Destination-based** (2004) | **Destination-based** (BTA: exporty 0 %, importy neodečitatelné) | Teritoriální (dividendy z dcer mimo EU/EHP osvobozeny při splnění podmínek) | **Destination-based** (exporty 0 %, importy zdaněny na hranici) |
| **Odolnost vůči transfer pricingu (BEPS)** | **Nízká–střední** (origin-based láká k přesunu zisků při vysoké sazbě) | Nízká (origin) / **Extrémně vysoká** (destination verze) | **Extrémně vysoká** (transfer pricing ztrácí smysl) | Střední (nutná pravidla proti fiktivním odlivům a převodním cenám) | Vysoká u mezinárodního B2B (ale náchylná ke karuselovým podvodům uvnitř EU) |
| **Slučitelnost s právem EU a WTO** | Jako náhrada DPH v EU **neslučitelná** se směrnicí 2006/112/ES (min. 15 % DPH); jako náhrada DPFO/DPPO možná | Totéž uvnitř EU; destination verze naráží na **WTO** | **Vážný konflikt s WTO** (GATT zakazuje BTA u přímých daní s odpočtem mezd) | **Kompatibilní pro systémy platné do 1. 7. 2021** (Estonsko, Lotyšsko; pro nové státy EU nad 750 mil. EUR blokováno Pillar Two — čl. 3 bod 42 a čl. 40 Směrnice 2022/2523) | **Povinný standard EU** (směrnice 2006/112/ES, min. 15 %) |
| **Jednoduchost administrativy** | Extrémně vysoká (mimo banky, benefity neziskovek a přechod) | Velmi vysoká (mírně složitější P1 u malých firem) | Vysoká u MNE, složitější hraniční správa služeb/e-commerce | **Nejjednodušší reálně fungující CIT v OECD** (ale vedle ní běží DPH, PIT, soc. daň) | Střední–složitá (více sazeb, výjimky, kontrolní hlášení, přeshraniční režimy) |

---

## 4. Srovnání s hlavním návrhem a klíčová technická doplnění

Text [Daňová reforma podle Dekonstrukce státu](/danova-reforma) mimořádně přesně a srozumitelně vystihuje **ekonomickou podstatu** Hall–Rabushky — zejména nevyhnutelnost oddělení výrobního vstupu od konečné spotřeby, důvod administrativního rozdělení jedné rovnice na dvě pohlednice, konec umělé války zaměstnanci vs. OSVČ i transparentnost skutečné daňové zátěže.

Pro legislativní a odbornou debatu je užitečné hlavní návrh doplnit o pět technických upřesnění z originálního modelu Halla & Rabushky — a čistě oddělit jeho **diagnostickou funkci** od **cílového provozu**:

1. **Diagnostická funkce vs. cílový provoz (3bilionový stát vs. štíhlý stát a EU *second-best*):**
   - Originální Hall–Rabushka nahrazoval v USA jen federální daň z příjmu FO/PO a dědickou daň (**ponechal stranou Social Security / FICA** a neřešil DPH) → stačila mu sazba **19 %**.
   - Hlavní návrh vědomě slévá do jedné viditelné sazby `Y %` veškeré české daně včetně sociálního a zdravotního pojistného i DPH — a přesně tím plní svou **diagnostickou funkci (rentgen ceny státu)**: na datech ČSÚ a MF ČR ([Česko, EU a makroekonomické propočty](/danova-reforma/vyzkum/07-hr-cesko-eu-a-makro-cisla)) vychází při dnešním 3bilionovém rozpočtu sazba **55,6 %** při `X = 0` a **65–74 %** při `X = 150–250 tis. Kč/rok`, což obnažuje skutečnou výši dnešního skrytého zdanění.
   - **Cílový provoz:** V otevřené ekonomice pracuje čistý *origin-based* Hall–Rabushka stabilně teprve při nízkých sazbách (kolem **20–30 %**), kdy zůstává motivace k *transfer pricingu*, šedé B2C ekonomice i přelévání soukromé spotřeby do nákladů na Pohlednici 2 nízká. Toho lze dosáhnout zeštíhlením státu směrem k 1,5 bil. Kč (případně níže) — a v právních mantinelech EU jako vynuceným *second-best* kompromisem kombinací dvou pohlednic se zjednodušenou 15% DPH.

2. **Půda a budovy — širší záběr originálního modelu:**
   - Hlavní článek u Pohlednice 2 zmiňuje *„100 % nových strojů a svářeček“*. Originální Hall–Rabushka jde dál: na Řádku 2(c) odepisuje 100 % okamžitě i **budovy a samotnou půdu (pozemky)** (při následném 100% zdanění prodejní ceny na Řádku 1). Tím nejen zjednodušuje účetnictví, ale také elegantně obchází problém umělého rozdělování ceny na „cihly a hlínu“, který hlavní návrh trefně kritizuje u daně z hodnoty půdy (poznámka pod čarou č. 2). Současně ale vyžaduje hlídací pojistku proti fiktivním prodejům soukromé půdy do vlastních firem.

3. **Banky, pojišťovny a nepeněžní benefity (dvě citlivá technická místa):**
   - Hlavní přehledový článek se soustředí na základní architekturu dvou pohlednic; pro odbornou a legislativní debatu je vhodné mít po ruce originální řešení Halla a Rabushky pro **úrokový spread bank** a **nepeněžní benefity** (podrobně v oddílech 2.1 a 2.4 výše). V odborném posouzení modelu totiž první otázka ekonoma zní: *„Takže banky s miliardovými úrokovými maržemi u vás zaplatí nulu a dostanou ztrátu?“* a druhá: *„Proč bych platil 50 % ze mzdy, když zaměstnanci koupím firemní byt a auto?“* Originální Hall–Rabushka má na obojí konkrétní odpověď (imputace bankovních služeb ze spreadu / `R+F` alternativa a zákaz odpočtu nepeněžních benefitů na P2 + zvláštní zdanění benefitů u státu a neziskovek).

4. **Úročený přenos ztrát a Day-1 přechod:**
   - Bez **úročeného přenosu ztrát** (Řádky 6–10 originální Form 2) by 100% okamžitý odpis silně znevýhodnil startupy a kapitálově náročné nové firmy oproti zavedeným konglomerátům.
   - Stejně tak přechod ze dne na den vyvolává jednorázový **Day-1 šok** zejména na **staré neodepsané firemní stroje, skladové zásoby a existující úvěry** — proto se v praxi zpravidla vyplatí zahrnout dočasná přechodová pravidla typu H&R 5letého doodepsání a „pravidla 90 %“. *(Naproti tomu americké varování Altiga et al., 2001 před novým cenovým šokem na úspory důchodců do ČR neplatí mechanicky: USA nemají federální DPH, zatímco čeští důchodci už dnes platí 21%/12% DPH a skryté firemní a mzdové daně v cenách, takže náhrada existujících daní modelem Hall–Rabushka žádný nový cenový šok na úspory seniorů nevytváří.)*

5. **„Bipolární porucha státu“ a akademická varianta Bradfordova X-Tax:**
   - Hlavní návrh argumentuje, že dva parametry (`X` a `Y %`) stačí i pro výrazně přerozdělovací pojetí státu při zachování efektivní progrese. V akademické literatuře existuje modifikace zvaná **Bradfordův X-Tax**, která ponechává podnikovou cash-flow Pohlednici 2 a 0% zdanění kapitálu beze změny, ale na mzdové Pohlednici 1 přidává progresivní pásma až do výše firemní sazby.
   - Z pohledu teorie veřejné volby (*Public Choice*) však má Bradfordův X-Tax **dvě fatální ceny**: (1) **ničí Buchananův zámek obecnosti (*generality principle*)** — politici mohou znovu zvyšovat horní sazbu malé menšině bez dopadu na mediánového voliče, čímž se okamžitě vrací lobbing za výjimky i inflační posun do vyšších pásem (*bracket creep*); a (2) **otevírá velkou arbitrážní mezeru mezi mzdou a ziskem u rodinných a jednoosobových s. r. o.**, jejichž majitelé získávají silnou motivaci přelévat firemní zisk do nižších mzdových pásem Pohlednice 1.

---

## 5. Primární zdroje a doporučená literatura

1. **Hall, R. E., & Rabushka, A. (1985 / 1995 / 2007).** *The Flat Tax.* Hoover Institution Press, Stanford University.
   - Přehled a archiv Hoover Institution: https://www.hoover.org/research/flat-tax
   - Plné PDF aktualizovaného vydání „Silver Anniversary“ (2007, Hoover Institution): https://www.hoover.org/sites/default/files/flat_tax_silver_anniversary.pdf
2. **Meade Committee / Institute for Fiscal Studies (1978).** *The Structure and Reform of Direct Taxation.* London: George Allen & Unwin (zavedení taxonomie `R-base`, `R+F base`, `S-base`).
   - IFS publikace: https://www.ifs.org.uk/publications/structure-and-reform-direct-taxation
3. **Altig, D., Auerbach, A. J., Kotlikoff, L. J., Smetters, K. A., & Walliser, J. (2001).** *Simulating Fundamental Tax Reform in the United States.* American Economic Review, 91(3), 574–595 (původně NBER Working Paper No. 6248, 1997).
   - NBER WP 6248: https://www.nber.org/papers/w6248
4. **Bradford, D. F. (2004).** *The X Tax in the World Economy.* NBER Working Paper No. 10676 (a navazující *Progressive Consumption Taxation: The X Tax Revisited*, R. Carroll & A. D. Viard, AEI 2012).
   - NBER WP 10676: https://www.nber.org/papers/w10676
   - Tax Policy Center — *What is an X-tax?*: https://www.taxpolicycenter.org/briefing-book/what-x-tax
5. **Tax Policy Center (Urban-Brookings).** *Briefing Book: What is a flat tax?*
   - URL: https://www.taxpolicycenter.org/briefing-book/what-flat-tax
6. **Auerbach, A. J., & Devereux, M. P. (2013).** *Consumption and Cash-Flow Taxes in an International Setting.* NBER Working Paper No. 19579.
   - NBER WP 19579: https://www.nber.org/papers/w19579
7. **Auerbach, A., Devereux, M. P., Keen, M., & Vella, J. (2017).** *Destination-Based Cash Flow Taxation.* Oxford University Centre for Business Taxation, Working Paper 17/01.
   - PDF (Oxford CBT): https://oxfordtax.sbs.ox.ac.uk/files/wp17-01pdf
8. **Tax Foundation.** *International Tax Competitiveness Index* (hodnocení Estonska a srovnání zemí OECD).
   - URL: https://taxfoundation.org/research/all/global/2026-international-tax-competitiveness-index/
9. **Estonian Tax and Customs Board (EMTA).** *Tax Rates* (oficiální sazby Estonska pro roky 2025–2026: DPT 22/78, PIT 22 %, sociální daň 33 %, DPH 24 %).
   - URL: https://www.emta.ee/en/business-client/taxes-and-payment/income-and-social-taxes/tax-rates
10. **Evropská unie — Směrnice o DPH.** *Směrnice Rady 2006/112/ES o společném systému daně z přidané hodnoty* (čl. 97 — minimální základní sazba 15 %, trvale zakotvená *Směrnicí Rady (EU) 2018/912*).
    - EUR-Lex 2006/112/ES: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex%3A32006L0112
    - EUR-Lex (EU) 2018/912: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018L0912
