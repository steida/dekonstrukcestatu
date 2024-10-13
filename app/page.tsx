import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Dekonstrukce státu",
};

export default function Page() {
  return (
    <>
      <h1>Dekonstrukce státu</h1>
      <p>
        Máme problém. Ten problém je složitost státu. Stát se stal tak složitým,
        že je nemožné jej řídit prostřednictvím volebního procesu. Jeden hlas
        nemůže rozhodnout o téměř nekonečném množství otázek týkajících se
        státu.
      </p>
      <p>
        Dekonstrukce státu je nezávislý think-tank pracující na tomto problému.
      </p>
      <h2>Kniha 📖</h2>
      <p>
        <a
          href="https://www.startovac.cz/projekty/kniha-dekonstrukce-statu"
          target="_blank"
        >
          startovac.cz/projekty/kniha-dekonstrukce-statu 💰
        </a>
      </p>
      <h2>Náš výzkum</h2>
      <ul>
        <li>
          <Link href="/manifest">Manifest dekonstrukce státu (návrh) 📜</Link>
        </li>
      </ul>
      <h2>Přednášky</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=uAfFLU-WvJo">
            Přednáška pro Letní školu Občanského institutu
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=jclUOz9h4rc">
            Dekonstrukce státu - ChainCamp 2020
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
          <a href="https://github.com/steida/ds.show" target="_blank">
            github.com/steida/ds.show
          </a>
        </li>
      </ul>
      <h2>Podpořte nás</h2>
      <p>Bankovní účet: 1000701012/3030</p>
      <p>Bitcoin: bc1qehhc88w0m3lq6fphg0639sd4yjxgmf4psqwv7e</p>
      <p>Bitcoin Lightning</p>
      <Image
        priority
        src="/bitcoinlightning.png"
        alt="Bitcoin Lightning"
        width="150"
        height="150"
      />
    </>
  );
}
