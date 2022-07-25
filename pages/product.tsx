// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import GlobalContextsProvider from "../components/plasmic/blank_project/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/blank_project/PlasmicGlobalVariant__Screen";
import { PlasmicPrdct } from "../components/plasmic/blank_project/PlasmicPrdct";
import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from "next-seo";
import { HeadBanner } from "../components/headbanner";
import { ChakraProvider } from "@chakra-ui/react";

function Prdct() {
  // Use PlasmicPrdct to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPrdct are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicPrdct is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ChakraProvider>
      <HeadBanner />
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
      <GlobalContextsProvider>
        <PlasmicPrdct />
      </GlobalContextsProvider>
    </ChakraProvider>
  );
}

export default Prdct;
