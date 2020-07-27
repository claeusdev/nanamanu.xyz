import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout className="">
      <Head>
        <title>Nana Adjei Manu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="hero">
          <h1 className="hero__name">NAM.</h1>
          <p className="hero__paragraph">
            Hi 👋🏿 I'm <span className="name b">Nana</span>. I'm a Front-end
            Engineer and open source contributor based in Accra, Ghana.
          </p>

          <p className="hero__paragraph">
            I work at{" "}
            <a
              className="link b"
              href="https://petratrust.com"
              rel="noopener"
              target="_blank"
            >
              Petra Trust
            </a>
            . Previously worked at{" "}
            <a
              className="link b"
              href="https://qoncept.at"
              rel="noopener"
              target="_blank"
            >
              Qoncept
            </a>{" "}
            in Austria and{" "}
            <a
              className="link b"
              href="https://afradio.co"
              rel="noopener"
              target="_blank"
            >
              Afradio
            </a>{" "}
            in Accra.
          </p>

          <p className="hero__paragraph">
            I'm skilled at UI engineering with Javascript, HTML and CSS,
            performance and currently diving deep into design systems.
          </p>
          <p className="hero__paragraph">
            I love solving complex problems, no matter if it’s a design or
            technical challenge. I mostly design in code using JavaScript and
            CSS.
          </p>
          <h3 id="say-hello">Say hello</h3>
          <ul>
            <li>
              Email:{" "}
              <a class="link b" href="claeusdev@outlook.com">
                claeusdev@outlook.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a class="link b" href="http://github.com/claeusdev">
                claeusdev
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a class="link b" href="http://twitter.com/claeusdev">
                claeusdev
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                class="link b"
                href="https://www.linkedin.com/in/nana-adjei-manu"
              >
                nana-adjei-manu
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
