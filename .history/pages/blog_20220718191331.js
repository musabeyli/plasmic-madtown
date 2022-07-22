import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import axios from "axios";

const Home = ({ articles, categories, homepage }) => {
  return (
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
};

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/articles", {
    populate: ["image", "category"],
  });
  const categoriesRes = await fetchAPI("/categories", {
    populate: "*",
  });
  const homepageRes = await fetchAPI("/categories", {
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
