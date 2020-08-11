import Head from "next/head";
import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Made by Nana Adjei Manu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="hero">
          <h1 className="hero__name">My Projects</h1>
        </div>
        <div className="mt5">
          <p>These are some of my personal projects:</p>
          <ul>
            <li>
              <span>React Loaders</span> »{" "}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/claeusdev/react-simple-elements"
              >
                React Loaders
              </a>
            </li>

            <li>
              <span>React Toast Notification</span> »{" "}
              <a
                target="_blank"
                rel="noopener"
                href="https://github.com/claeusdev/react-flash-message"
              >
                React Toast Notification
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
