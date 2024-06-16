import Link from "next/link";
import { BitcoinLightning } from "../../components/BitcoinLightning";

export const metadata = {
  title: "Dekonstrukce státu - vraťme stát lidem",
};

export default function Page() {
  return (
    <>
      <Link className="block text-right" href="/">
        english
      </Link>
      <h1>Dekonstrukce státu</h1>
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
      <h2>Náš výzkum</h2>
      <p>TBA</p>
      <h2>Přednášky</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=uAfFLU-WvJo">
            Demonopolizace, přednáška pro Letní školu Občanského institutu
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=jclUOz9h4rc">
            Dekonstrukce státu - ChainCamp 2020
          </a>
        </li>
      </ul>
      <h2>Prezentace</h2>
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
      <h2>Odkazy</h2>
      <ul>
        <li>
          <a href="https://x.com/steidacz" target="_blank">
            x.com/steidacz
          </a>
        </li>
        <li>
          <a href="https://github.com/ds-show/web" target="_blank">
            github.com/steida/ds.show
          </a>
        </li>
        <li>
          <a href="https://www.evolu.dev/" target="_blank">
            evolu.dev
          </a>{" "}
          (restoring data ownership)
        </li>
      </ul>
      <h2>Podpořte nás</h2>
      <p>Číslo účtu: 1000701012/3030</p>
      <BitcoinLightning />
    </>
  );
}
