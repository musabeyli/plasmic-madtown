import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import { SocialProfileJsonLd } from "next-seo";

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
          <NextSeo
        title="Madisonopoly | Ultimate UW Madison Board Game"
        description="Only board game of UW Madison | Enjoy playing Madison Monopoly College Edition | UW Madison Gifts"
        canonical="https://www.madisonopoly.com/"
        openGraph={{
          url: "https://www.madisonopoly.com/",
          title: "Madisonopoly | Ultimate UW Madison Board Game",
          description:
            "Only board game of UW Madison | Enjoy playing Madison Monopoly College Edition | UW Madison Gifts",
          site_name: "Madisonopoly | Ultimate UW Madison Board Game",
        }}
        twitter={{
          handle: "@madisonopolyy",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "UW Madison Board Game, uw madison monopoly, UW-Madison Monopoly, University of Wisconsin Madison Board Game, University of Wisconsin Board Game, University of Wisconsin Madison Monopoly, uw madison board game, madisonopoly, Madison Board Game, madison board game, uw madison gifts, UW Madison gifts",
          },
        ]}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Madisonopoly"
        url="http://www.madisonopoly.com"
        sameAs={[
          "http://instagram.com/madisonopoly.wi",
          "https://twitter.com/madisonopolyy/",
          "https://www.tiktok.com/@madisonopoly",
        ]}
      />
      
    <Layout categories={categories}>
      {/* <Seo seo={homepage.attributes.seo} /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          {console.log(homepage.attributes)}
          <h1>{"Madisonopoly Blogs & Bites"}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
  </>
};

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/articles", {
    populate: ["image", "category"],
  });
  const categoriesRes = await fetchAPI("/categories", {
    populate: "*",
  });
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: "*",
      seo: { populate: "*" },
    },
  });

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
