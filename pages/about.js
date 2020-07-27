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
          <h1 className="hero__name">I'm Nana.</h1>
          <p className="hero__paragraph">
            I’m a Software Engineer currently living in Accra, Ghana. Currently,
            I'm a Software Engineer at Petra Trust where i work on a dedicated
            in house CRM team. I enjoy working on both UI and the backend, .
          </p>
        </div>
        {/* <div class="mt5">
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
            <span>December 2019 – now</span>
            <p>
              Software Engineer - Full Stack (Ruby, TypeScript, PostgreSQL,
              React)
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
            <p>Software Engineer - Front-end (Ember.js, Typescript, Angular)</p>
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
            <p>Software Engineer - Front-end (React) </p>
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
            <span>February 2018 – February 2019</span>
            <p>
              Software Engineer - Front-end (HTML, CSS, SASS, Rails, jQuery){" "}
            </p>
          </div>

          <div class="mt4">
            <span class="b mr2">Inotribe</span>
            <span>June 2016 – December 2017</span>
            <p>Software Developer</p>
          </div>
        </div> */}
      </section>
    </Layout>
  );
}
