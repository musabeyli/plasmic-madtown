// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import GlobalContextsProvider from "../components/plasmic/blank_project/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/blank_project/PlasmicGlobalVariant__Screen";
import { PlasmicNewPage } from "../components/plasmic/blank_project/PlasmicNewPage";
import { NextSeo } from "next-seo";
import { ChakraProvider } from "@chakra-ui/react";
import PopupModal from "../components/PopupModal";
import { HeadBanner } from "../components/headbanner";
import SEO from "../components/global/SEO.js";
import { SocialProfileJsonLd } from "next-seo";

function NewPage() {
  // Use PlasmicNewPage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicNewPage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicNewPage is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <div>
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
          "http://www.facebook.com/your-profile",
          "http://instagram.com/yourProfile",
          "http://www.linkedin.com/in/yourprofile",
          "http://plus.google.com/your_profile",
        ]}
      />
      <ChakraProvider>
        <HeadBanner></HeadBanner>
      </ChakraProvider>
      <GlobalContextsProvider>
        <PlasmicNewPage />
      </GlobalContextsProvider>
      <ChakraProvider>
        <PopupModal></PopupModal>
      </ChakraProvider>
    </div>
  );
}

export default NewPage;
