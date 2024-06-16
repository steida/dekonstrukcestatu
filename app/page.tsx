import Link from "next/link";
import { BitcoinLightning } from "../components/BitcoinLightning";

export const metadata = {
  title: "Deconstruction of the State - let's return the state to the people",
};

export default function Page() {
  return (
    <>
      <Link className="block text-right" href="/cz">
        česky
      </Link>
      <h1>Deconstruction of the State</h1>
      <p>
        We have a problem. The problem is the State's complexity. The State is
        so complex that it's impossible to manage through the election process.
        One vote can't decide almost infinite issues related to the State.
      </p>
      <p>
        The solution is to deconstruct the State into smaller parts, each of
        which is transformed into a joint-stock company, and each citizen is
        given one share to exercise their shareholder rights.
      </p>
      <p>
        Deconstruction of the State is an independent research lab working on
        this problem.
      </p>
      <h2>Our Research</h2>
      <p>TBA</p>
      <h2>Talks</h2>
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
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://x.com/steida" target="_blank">
            x.com/steida
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
      <h2>Support us</h2>
      <BitcoinLightning />
    </>
  );
}
