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
      <p>
        Deconstruction of the State is an independent research lab working on
        this problem.
      </p>
      <q>
        The trouble with every office and court is that it has a monopoly on
        handling cases of a certain kind. If twenty private agencies were
        competing on the market, they would treat you differently because you
        would bring them "business". So yes, the office, the court, and the
        state, in general, are often not interested in solving your problem to
        your satisfaction but in getting rid of it with as little effort as
        possible by the worker in question. Those people act purely economically
        and logically. A monopoly behaves and always will behave differently
        than someone who knows he lives off his customers.
      </q>
      <h2>Our Research</h2>
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
        <a href="https://x.com/steida" target="_blank">
          x.com/steida
        </a>
        &nbsp;-&nbsp;
        <a href="https://github.com/steida/ds.show" target="_blank">
          github.com/steida/ds.show
        </a>
      </div>
    </>
  );
}
