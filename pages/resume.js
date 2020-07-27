import Layout from "../components/Layout";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Nana Adjei Manu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="hero">
          <h1 className="hero__name">My Resume</h1>
        </div>
        <div class="mt5">
          <h1 class="b dib w-auto highlight-header">Experience</h1>

          <div class="mt4">
            <span class="b mr2">
              <a
                href="https://www.petratrust.com"
                class="midnight-blue link hover-highlight-link"
              >
                Petra Trust
              </a>
            </span>
            <span>2019 – present</span>
            <p>
              <em>
                Software Engineer - Full Stack (Ruby, TypeScript, PostgreSQL,
                React)
              </em>
            </p>
          </div>
          <div class="mt4">
            <span class="b mr2">
              <a
                href="https://www.petratrust.com"
                class="midnight-blue link hover-highlight-link"
              >
                Qoncept dx GmBH
              </a>
            </span>
            <span>April 2020 – June, 2020</span>
            <p>
              <em>
                Software Engineer - Front-end (Ember.js, Typescript, Angular)
              </em>
            </p>
          </div>

          <div class="mt4">
            <span class="b mr2">
              <a
                href="https://www.afradio.co"
                class="midnight-blue link hover-highlight-link"
              >
                AFRadio
              </a>
            </span>
            <span>March 2019 – August 2019</span>
            <p>
              <em>Software Engineer - Front-end (React) </em>
            </p>
          </div>

          <div class="mt4">
            <span class="b mr2">
              <a
                href="https://www.vendyads.com"
                class="midnight-blue link hover-highlight-link"
              >
                VendyAds
              </a>
            </span>
            <span>2018 – 2019</span>
            <p>
              <em>
                Software Engineer - Front-end (HTML, CSS, SASS, Rails, jQuery)
              </em>{" "}
            </p>
          </div>

          <div class="mt4">
            <span class="b mr2">Inotribe</span>
            <span>2016 – 2017</span>
            <p>Software Developer</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
