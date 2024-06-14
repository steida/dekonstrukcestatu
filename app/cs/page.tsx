import Link from "next/link";

export const metadata = {
  title: "Dekonstrukce státu",
};

export default function Page() {
  return (
    <>
      <h1>Dekonstrukce státu</h1>
      <Link href="/">English</Link>
      <p>
        Máme problém. Ten problém je složitost státu. Stát se stal tak složitým,
        že je nemožné jej řídit prostřednictvím volebního procesu. Jeden hlas
        nemůže rozhodnout o téměř nekonečném množství otázek týkajících se
        státu.
      </p>
      <p>
        Řešením je dekonstrukce státu do menších částí, z nichž každá se
        transformuje na akciovou společnost, od které každý občan dostane jednu
        akcii, aby mohl vykonávat svá akcionářská práva.
      </p>
      <p>
        Dekonstrukce státu je nezávislá výzkumná laboratoř pracující na tomto
        problému.
      </p>
      <q>
        Potíž každého úřadu a soudu je v tom, že má monopol na vyřizování
        případů určitého druhu. Kdyby si na trhu konkurovalo dvacet soukromých
        agentur, chovaly by se k vám jinak, protože byste jim přinesli „byznys“.
        Takže ano, úřad, soud a vůbec stát často nemají zájem vyřešit váš
        problém k vaší spokojenosti, ale zbavit se ho s co nejmenší námahou
        dotyčného pracovníka. Ti lidé jednají čistě ekonomicky a logicky.
        Monopol se chová a vždy bude chovat jinak než někdo, kdo ví, že žije ze
        svých zákazníků.
      </q>
      <h2>Náš výzkum</h2>
      <p>TBA</p>
      <h2>Slides</h2>
      <ul>
        <li>
          <a
            target="blank"
            href="https://docs.google.com/presentation/d/1jMV7FbzONYyuTHvQZLJmxGwYf9_at2QK3XqRL7sV8v0"
          >
            Bitcoin - the endgame (PragueBTC 2024)
          </a>
        </li>
      </ul>
      <hr />
      <div>
        <a href="https://x.com/steidacz" target="_blank">
          x.com/steidacz
        </a>
        &nbsp;-&nbsp;
        <a href="https://github.com/steida/ds.show" target="_blank">
          github.com/steida/ds.show
        </a>
      </div>
    </>
  );
}
