import Link from "next/link";

export const metadata = {
  title: "Deconstruction of the State",
};

export default function Page() {
  return (
    <>
      <h1>Deconstruction of the State</h1>
      <Link href="/cs">Česky</Link>
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
      <a href="https://x.com/steida" target="_blank">
        x.com/steida
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
