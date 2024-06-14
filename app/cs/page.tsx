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
      <a href="https://x.com/steidacz" target="_blank">
        x.com/steidacz
      </a>
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
    </>
  );
}
