// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: ctEGS_j_Qt
import React, { useState } from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import MadisonopolyHeaderFinal from "../../MadisonopolyHeaderFinal"; // plasmic-import: zLYGck-fye5/component
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent
import Select from "../../Select"; // plasmic-import: eL6LYOdI6RC/component
import Select__Option from "../../Select__Option"; // plasmic-import: ioSFR3lRmqr/component
import FooterComponent from "../../FooterComponent"; // plasmic-import: Mfi3gMBJIGb/component
import { GalleriesModel } from "./ecommerce_image_slider/models/Gallery";
import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant
import GalleryDetail from "../../ecommerce_image_slider/components/GalleryDetail";
import { Center, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicPrdct.module.css"; // plasmic-import: ctEGS_j_Qt/css
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: T3tWtDwVAV/icon
import CheckoutButton from "../../../pages/checkout";
import ImageSlider from "../../ImageSlider.js";
import { SliderData } from "../../SliderData.js";
import { loadStripe } from "@stripe/stripe-js";
import { fetchPostJSON } from "../../../utils/api-helpers";
import getStripe from "../../../utils/get-stripejs";
import { fakeDataItems } from "../../ProductImages";
import { TikTok } from "react-tiktok";
import {
  FaGrinTears,
  FaComments,
  FaUniversity,
  FaShippingFast,
} from "react-icons/fa";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export type PlasmicPrdct__VariantMembers = {};

export type PlasmicPrdct__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrdct__VariantsArgs;
export const PlasmicPrdct__VariantProps = new Array<VariantPropType>();

export type PlasmicPrdct__ArgsType = {};
type ArgPropType = keyof PlasmicPrdct__ArgsType;
export const PlasmicPrdct__ArgProps = new Array<ArgPropType>();

export type PlasmicPrdct__OverridesType = {
  root?: p.Flex<"div">;
  madisonopolyHeaderFinal?: p.Flex<typeof MadisonopolyHeaderFinal>;
  svg?: p.Flex<"svg">;
  columns?: p.Flex<"div">;
  ul?: p.Flex<"ul">;
  select?: p.Flex<typeof Select>;
  footerComponent?: p.Flex<typeof FooterComponent>;
};

export interface DefaultPrdctProps {}

const ballStyle = {
  marginRight: "0.5em",
  marginTop: "50px",
};

function PlasmicPrdct__RenderFunc(props: {
  variants: PlasmicPrdct__VariantsArgs;
  args: PlasmicPrdct__ArgsType;
  overrides: PlasmicPrdct__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabUxTrbG0Cf5V(),
  });
  const navigateCheckout = (_event) => {
    router.push({
      pathname: "/checkout",
      query: { quantity: "2" },
    });
  };
  const [selectedValue, setSelectedValue] = useState("1");
  const handleChange = (e) => {
    console.log("Fruit Selected!!", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("quantity", e);
    }
    setSelectedValue(e);
  };

  const state = {
    showVideo: {},
    showGalleryPlayButton: true,
    showVide: {},
    showGalleryFullscreenButton: true,
  };

  const images = [
    {
      original:
        "/plasmic/blank_project/images/website_images/gamebox_back_cover.JPG",
      thumbnail:
        "/plasmic/blank_project/images/website_images/gamebox_back_cover.JPG",
    },
    {
      original:
        "/plasmic/blank_project/images/website_images/gamebox_cover.JPG",
      thumbnail:
        "/plasmic/blank_project/images/website_images/gamebox_cover.JPG",
    },
    {
      original:
        "/plasmic/blank_project/images/website_images/gamebox_gameplay_cards.jpg",
      thumbnail:
        "/plasmic/blank_project/images/website_images/gamebox_gameplay_cards.jpg",
    },
    {
      original:
        "/plasmic/blank_project/images/website_images/gamebox_gameplay_side.jpg",
      thumbnail:
        "/plasmic/blank_project/images/website_images/gamebox_gameplay_side.jpg",
    },
    // {
    //   thumbnail:
    //     "/plasmic/blank_project/images/website_images/tiktok_image.png",
    //   original: "/plasmic/blank_project/images/website_images/tiktok_image.png",
    //   embedUrl: "https://www.tiktok.com/embed/7121119118769622318",
    //   description: "Madisonopoly Tiktok Video",
    //   renderItem: _renderVideo.bind(),
    // },
  ];

  const [loading, setLoading] = useState(false);

  const iframe_container = {
    left: 0,
    width: "100%",
    height: 500,
    position: "relative",
  };

  const iframe = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "relative",
    border: 0,
  };

  function _renderVideo(item) {
    return (
      <div>
        <div className={classNames(projectcss.all, sty.row_container)}>
          <div className={classNames(projectcss.all, sty.first_row)}>
            <p>Madisonopoly on Tiktok</p>
          </div>
          <HStack>
            <iframe
              src="https://www.tiktok.com/embed/7120005683860311339"
              className={classNames(projectcss.all, sty.second_row)}
            ></iframe>
            <iframe
              src="https://www.tiktok.com/embed/7121085878209989930"
              className={classNames(projectcss.all, sty.second_row)}
            ></iframe>
            <iframe
              src="https://www.tiktok.com/embed/7121119118769622318"
              className={classNames(projectcss.all, sty.second_row)}
            ></iframe>
            {/* <iframe
              src="https://www.tiktok.com/embed7120346132080790830"
              className={classNames(projectcss.all, sty.second_row)}
            ></iframe> */}
            <iframe
              src="https://www.tiktok.com/embed/7122232365149130030"
              className={classNames(projectcss.all, sty.second_row)}
            ></iframe>
          </HStack>
        </div>
        {/* <div className="video-wrapper">
          <div className={iframe_container} bg="red">
            <iframe
              src="https://www.tiktok.com/embed/7072819797184171310"
              className={iframe}
              allowfullscreen
              scrolling="no"
              allow="encrypted-media;"
            ></iframe>
          </div>
        </div> */}
      </div>
    );
  }

  function _toggleShowVideo(url) {
    state.showVideo[url] = !Boolean(state.showVideo[url]);
    state.showVideo = state.showVideo;
    // setState({
    //   showVideo: state.showVideo,
    // });
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON("/api/checkout_sessions", {
      amount: selectedValue,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <MadisonopolyHeaderFinal
            data-plasmic-name={"madisonopolyHeaderFinal"}
            data-plasmic-override={overrides.madisonopolyHeaderFinal}
            className={classNames(
              "__wab_instance",
              sty.madisonopolyHeaderFinal
            )}
          />

          <div className={classNames(projectcss.all, sty.freeBox__mDtZy)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
            ) ? (
              <Heading
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__xuXzl
                )}
              >
                <Center>Madisonopoly</Center>
              </h1>
            ) : null}

            <div
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__gRxnh)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__kh7Y)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"auto" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/blank_project/images/gameboxBoardDetailedpng.png",
                    fullWidth: 4000,
                    fullHeight: 3091,
                    aspectRatio: undefined,
                  }}
                />
                <div style={ballStyle}></div>
                <ImageGallery originalHeight={"100"} items={images} />

                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__m02Uz)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__pRDjd)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"439px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00619Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__jchb1)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"437px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00625Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <Slider
                      className={classNames(
                        "__wab_instance",
                        sty.slider__hazjc
                      )}
                    >
                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__y5Bjf)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        src={
                          "https://via.placeholder.com/150x90/FF0000/FFFFFF/?text=Slide_1" as const
                        }
                      />

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__kOf0W)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        src={
                          "https://via.placeholder.com/150x90/00FF00/FFFFFF/?text=Slide_2" as const
                        }
                      />

                      <p.PlasmicImg
                        alt={""}
                        className={classNames(sty.img__zeXxO)}
                        displayHeight={"auto" as const}
                        displayMaxHeight={"none" as const}
                        displayMaxWidth={"100%" as const}
                        displayMinHeight={"0" as const}
                        displayMinWidth={"0" as const}
                        displayWidth={"auto" as const}
                        src={
                          "https://via.placeholder.com/150x90/0000FF/FFFFFF/?text=Slide_3" as const
                        }
                      />
                    </Slider>
                  </div>
                ) : null}
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__hDw9Q)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__umVwy)}
                      displayHeight={"216px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"250px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00625Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__e5X3M)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"251px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00640Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__a6Syh)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"282px" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00619Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />
                  </div>
                ) : null}
                {true ? (
                  <Slider
                    autoplay={true}
                    className={classNames("__wab_instance", sty.slider__aulKa)}
                    dots={true}
                    fade={true}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__liSet)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00619Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___66V2)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={{
                        src: "/plasmic/blank_project/images/dsc00625Jpg.jpeg",
                        fullWidth: 4592,
                        fullHeight: 3056,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__oPzN9)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      src={{
                        src: "/plasmic/blank_project/images/img3820Jpg.jpeg",
                        fullWidth: 4032,
                        fullHeight: 2753,
                        aspectRatio: undefined,
                      }}
                    />

                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__eDmBp)}
                      displayHeight={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? ("247px" as const)
                          : ("459px" as const)
                      }
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? ("368px" as const)
                          : ("auto" as const)
                      }
                      src={{
                        src: "/plasmic/blank_project/images/img3822Resizedjpg.jpeg",
                        fullWidth: 3175,
                        fullHeight: 2934,
                        aspectRatio: undefined,
                      }}
                    />
                  </Slider>
                ) : null}
              </div>

              <div className={classNames(projectcss.all, sty.column__ulj3T)}>
                <div className={classNames(projectcss.all, sty.freeBox__aDw8V)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <Heading>{"Madisonopoly"}</Heading>
                  ) : null}

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tIusW
                    )}
                  >
                    <HStack spacing="24px" marginBottom="40px">
                      <VStack>
                        <FaGrinTears size={28} />
                        <Center>
                          <Text textAlign="center">Quality Time</Text>
                        </Center>
                      </VStack>
                      <VStack>
                        <FaComments size={28} />
                        <Center>
                          <Text textAlign="center"> Convo Starter </Text>
                        </Center>
                      </VStack>
                      <VStack>
                        <FaUniversity size={28} />
                        <Center>
                          <Text textAlign="center"> Proud Alumni</Text>
                        </Center>
                      </VStack>
                      {/* <VStack>
                        <FaShippingFast size={28} />
                        <Center>
                          <Text textAlign="center">
                            Free Shipping Across US
                          </Text>
                        </Center>
                      </VStack> */}
                    </HStack>
                    <Center>
                      <Text>
                        {" "}
                        First ever Batch of Madisonopoly. Only 500 units left
                      </Text>
                    </Center>
                    <React.Fragment>
                      <React.Fragment>
                        {
                          "The memorable experiences in Langdon Street, the sleepless nights we had in College Library during finals week, that 2 AM Mac N Cheese slice at Ian's Pizza on Franklin, and many more..\n\nHow about buying those properties and renting it to your friends in a Monopoly game? You can build houses and hotels on your favorite Madtown spots.\n\nA token of your time spent in Madison or the token of new adventures :)\nThe box comes with:\n"
                        }
                      </React.Fragment>
                      <ul
                        data-plasmic-name={"ul"}
                        data-plasmic-override={overrides.ul}
                        className={classNames(
                          projectcss.all,
                          projectcss.ul,
                          sty.ul
                        )}
                      >
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__kAwxO
                          )}
                        >
                          {"32 red houses"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__lFrwv
                          )}
                        >
                          {"12 green hotels"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li___8GCak
                          )}
                        >
                          {"28 Title Deed Cards"}
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__kAwxO
                          )}
                        >
                          {"16 Dare Cards"}
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__kAwxO
                          )}
                        >
                          {"16 Campus Mail Cards"}
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__pQtDz
                          )}
                        >
                          {"20.5K in game cash"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__pbGge
                          )}
                        >
                          {"6 game tokens"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__x536M
                          )}
                        >
                          {"1 game box"}
                        </li>

                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li__ogQjL
                          )}
                        >
                          {'20 X 20" gameboard'}
                        </li>
                        <li
                          className={classNames(
                            projectcss.all,
                            projectcss.li,
                            projectcss.__wab_text,
                            sty.li___8GCak
                          )}
                        >
                          {"2 Dices"}
                        </li>
                      </ul>
                      <React.Fragment>
                        {"** 30 Day Moneyback Guarantee **"}
                      </React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
                <form onSubmit={handleSubmit} method="POST">
                  <div
                    className={classNames(projectcss.all, sty.freeBox__gvTr)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lCR5
                      )}
                    >
                      {"Quantity:"}
                    </div>

                    <Select
                      data-plasmic-name={"select"}
                      data-plasmic-override={overrides.select}
                      className={classNames("__wab_instance", sty.select)}
                      defaultValue={"value1" as const}
                      onChange={handleChange}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__hoiXq
                        )}
                        value={"1" as const}
                      >
                        {"1"}
                      </Select__Option>

                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__iuXtT
                        )}
                        value={"2" as const}
                      >
                        {"2"}
                      </Select__Option>

                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__q6Qru
                        )}
                        value={"3" as const}
                      >
                        {"3"}
                      </Select__Option>

                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option___0ZIi9
                        )}
                        value={"4" as const}
                      >
                        {"4"}
                      </Select__Option>

                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__ivQkk
                        )}
                        value={"5" as const}
                      >
                        {"5"}
                      </Select__Option>
                    </Select>
                    <section>
                      <button type="submit" role="link">
                        Proceed to Secure Checkout
                      </button>
                    </section>
                    <style jsx>
                      {`
                        section {
                          background: #ffffff;
                          display: flex;
                          flex-direction: column;
                          width: 400px;
                          height: 112px;
                          margin-top: 24px;
                          border-radius: 6px;
                          justify-content: space-between;
                        }
                        button {
                          height: 36px;
                          background: #556cd6;
                          border-radius: 4px;
                          color: white;
                          border: 0;
                          font-weight: 600;
                          cursor: pointer;
                          transition: all 0.2s ease;
                          box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                        }
                        button:hover {
                          opacity: 0.8;
                        }
                      `}
                    </style>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent
        data-plasmic-name={"footerComponent"}
        data-plasmic-override={overrides.footerComponent}
        className={classNames("__wab_instance", sty.footerComponent)}
      />
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "madisonopolyHeaderFinal",
    "svg",
    "columns",
    "ul",
    "select",
    "footerComponent",
  ],
  madisonopolyHeaderFinal: ["madisonopolyHeaderFinal"],
  svg: ["svg"],
  columns: ["columns", "ul", "select"],
  ul: ["ul"],
  select: ["select"],
  footerComponent: ["footerComponent"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  madisonopolyHeaderFinal: typeof MadisonopolyHeaderFinal;
  svg: "svg";
  columns: "div";
  ul: "ul";
  select: typeof Select;
  footerComponent: typeof FooterComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPrdct__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPrdct__VariantsArgs;
    args?: PlasmicPrdct__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPrdct__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPrdct__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPrdct__ArgProps,
      internalVariantPropNames: PlasmicPrdct__VariantProps,
    });

    return PlasmicPrdct__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrdct";
  } else {
    func.displayName = `PlasmicPrdct.${nodeName}`;
  }
  return func;
}

export const PlasmicPrdct = Object.assign(
  // Top-level PlasmicPrdct renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    madisonopolyHeaderFinal: makeNodeComponent("madisonopolyHeaderFinal"),
    svg: makeNodeComponent("svg"),
    columns: makeNodeComponent("columns"),
    ul: makeNodeComponent("ul"),
    select: makeNodeComponent("select"),
    footerComponent: makeNodeComponent("footerComponent"),

    // Metadata about props expected for PlasmicPrdct
    internalVariantProps: PlasmicPrdct__VariantProps,
    internalArgProps: PlasmicPrdct__ArgProps,
  }
);

export default PlasmicPrdct;
/* prettier-ignore-end */
