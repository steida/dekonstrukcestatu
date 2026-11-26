# Dekonstrukce státu

Zdrojové texty a statický web projektu **Dekonstrukce státu** ([www.dekonstrukcestatu.cz](https://www.dekonstrukcestatu.cz)) — nezávislého think-tanku Daniela Steigerwalda zaměřeného na odstraňování složitosti státu, daňovou jednoduchost a institucionální reformy. Projekt funguje bez jakýchkoli státních peněz (dotací, veřejných grantů i zakázek).

## Připomínky, chyby a námitky

Našli jste faktickou či početní chybu, překlep nebo máte námitku? **Otevřete [GitHub Issue](https://github.com/steida/dekonstrukcestatu/issues)** ([založit nové issue](https://github.com/steida/dekonstrukcestatu/issues/new)).

**Pull requesty prosím neposílejte** — nepotřebuji pomoc s kódem, ale zpětnou vazbu k obsahu, a ten stejně musí projít přeze mě. V době AI agentů otevřené pull requesty snadno přinášejí záplavu automaticky generovaných úprav, které zbytečně zabírají čas při revizi. Podněty z issues si projdu a zapracuji sám.

Nejvíc pomůže uvést konkrétní pasáž nebo tabulku, primární zdroj (PDF, data Eurostatu, OECD, MF ČR či paragraf zákona) nebo vlastní výpočet.

Stránka `/manifest` ([`app/manifest/page.tsx`](app/manifest/page.tsx)) je záměrně zmrazený původní pracovní návrh z roku 2020 — případné poznámky k ní patří také do issues.

## Struktura obsahu (`content/`)

Adresář [`content/`](content) je jediný zdroj pravdy pro publikované články, studie a fact-checky a zrcadlí veřejnou strukturu URL 1:1:

```text
content/
├── danova-reforma/                                 → /danova-reforma
│   ├── index.md                                    → /danova-reforma
│   ├── doplneni.md                                 → /danova-reforma/doplneni
│   └── vyzkum/                                     → /danova-reforma/vyzkum/<slug>
│       ├── 05-hr-mechanika-a-okrajove-pripady.md
│       ├── 06-hr-praxe-ve-svete-a-historie.md
│       ├── 07-hr-cesko-eu-a-makro-cisla.md
│       ├── 08-hr-kritika-a-protiargumenty.md
│       └── 09-hr-dph-obchod-a-hacky.md
└── blog/                                           → /blog
    ├── dekonstrukce-statu-vs-chytrejsi-dane.md     → /blog/dekonstrukce-statu-vs-chytrejsi-dane
    ├── danime-praci-ale-majetek-temer-vubec.md     → /blog/danime-praci-ale-majetek-temer-vubec
    ├── fact-check-danovy-raj-evropy.md             → /blog/fact-check-danovy-raj-evropy
    └── zjednodusovaci-a-komplikatori/              → /blog/zjednodusovaci-a-komplikatori
        ├── index.md                                → /blog/zjednodusovaci-a-komplikatori
        ├── audit.md                                → /blog/zjednodusovaci-a-komplikatori/audit
        ├── 01-ramovani-a-alternativy.md            → /blog/zjednodusovaci-a-komplikatori/<slug>
        ├── 02-zdaneni-prace.md
        ├── 03-zdaneni-spotreby.md
        ├── 04-zdaneni-majetku.md
        ├── 05-zdaneni-firem.md
        └── 06-metodika-a-obskurantismus.md
```

Přehledové a speciální stránky (úvod, `/publikace`, `/blog`, `/media`, `/o-autorovi`, `/manifest` a rozpracovaný návrh `/danova-reforma/implementace-eu`) jsou přímo v [`app/`](app).

## Lokální vývoj a ověření

Požadavky: **Node.js 24** a **pnpm** (`packageManager`: `pnpm@11.27.1`).

```bash
pnpm install     # instalace závislostí
pnpm dev         # lokální vývojový server (Next.js)
pnpm build       # prebuild + statický export do out/
pnpm typecheck   # kontrola typů (tsc --noEmit)
pnpm verify      # kontrola vyexportovaného webu v out/
```

- `pnpm build` před samotným exportem do `out/` automaticky spustí `prebuild` ([`scripts/generate-feeds.mjs`](scripts/generate-feeds.mjs)), který vygeneruje [`public/llms.txt`](public/llms.txt), [`public/llms-full.txt`](public/llms-full.txt) a [`public/rss.xml`](public/rss.xml) (samostatně lze spustit přes `pnpm generate-feeds`).
- `pnpm verify` ([`scripts/verify-export.mjs`](scripts/verify-export.mjs)) ověří vyexportovaný adresář `out/`: přítomnost očekávaných souborů, funkčnost interních odkazů, canonical/OG/Twitter metadata, vykreslení vzorců KaTeX a čistotu výsledných HTML, XML i textových souborů.

## Nasazení

Next.js vytváří čistě statický export do adresáře `out/` (`output: "export"` v [`next.config.mjs`](next.config.mjs)), který běží bez serverového kódu na **Cloudflare Workers Static Assets** ([`wrangler.jsonc`](wrangler.jsonc)).

Každý push do větve `main` spouští dvoufázový workflow [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml): job `build` bez přístupových tajemství provede `pnpm build`, `pnpm typecheck` a `pnpm verify` a předá `out/` jako artefakt oddělenému jobu `deploy`. Ten ze sparse checkoutu adresáře [`deploy/`](deploy) nainstaluje zafixovaný Wrangler bez instalačních skriptů a nasadí aktuální commit větve `main`.

## Odkazy, kontakt a licence

- **Web:** [www.dekonstrukcestatu.cz](https://www.dekonstrukcestatu.cz)
- **RSS:** [www.dekonstrukcestatu.cz/rss.xml](https://www.dekonstrukcestatu.cz/rss.xml)
- **llms.txt:** [www.dekonstrukcestatu.cz/llms.txt](https://www.dekonstrukcestatu.cz/llms.txt) · plný text: [llms-full.txt](https://www.dekonstrukcestatu.cz/llms-full.txt)
- **X:** [@steidacz](https://x.com/steidacz)
- **Kontakt:** [daniel@steigerwald.cz](mailto:daniel@steigerwald.cz)
- **Licence:** MIT ([`LICENSE`](LICENSE))
