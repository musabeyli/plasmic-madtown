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
import * as React from "react";

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
import HeaderMadisonopoly from "../../HeaderMadisonopoly"; // plasmic-import: SbmFAmFl460/component
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent
import Select from "../../Select"; // plasmic-import: eL6LYOdI6RC/component
import Select__Option from "../../Select__Option"; // plasmic-import: ioSFR3lRmqr/component
import Button from "../../Button"; // plasmic-import: aOTvFzJBlc_/component
import FooterComponent from "../../FooterComponent"; // plasmic-import: Mfi3gMBJIGb/component

import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicPrdct.module.css"; // plasmic-import: ctEGS_j_Qt/css

import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: T3tWtDwVAV/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Tri1W4mor9t/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: M7J874mTSvr/icon
import { useRouter } from "next/router";

export type PlasmicPrdct__VariantMembers = {};

export type PlasmicPrdct__VariantsArgs = {};
type VariantPropType = keyof PlasmicPrdct__VariantsArgs;
export const PlasmicPrdct__VariantProps = new Array<VariantPropType>();

export type PlasmicPrdct__ArgsType = {};
type ArgPropType = keyof PlasmicPrdct__ArgsType;
export const PlasmicPrdct__ArgProps = new Array<ArgPropType>();

export type PlasmicPrdct__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  headerMadisonopoly?: p.Flex<typeof HeaderMadisonopoly>;
  columns?: p.Flex<"div">;
  ul?: p.Flex<"ul">;
  select?: p.Flex<typeof Select>;
  button?: p.Flex<typeof Button>;
  footerComponent?: p.Flex<typeof FooterComponent>;
};

export interface DefaultPrdctProps {}

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

  const router = useRouter();
  const navigateCheckout = (_event) => {
    router.push({
      pathname: "/checkout",
      query: { quantity: "2" },
    });
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
          {true ? (
            <ShoppingCartIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}

          <HeaderMadisonopoly
            data-plasmic-name={"headerMadisonopoly"}
            data-plasmic-override={overrides.headerMadisonopoly}
            className={classNames("__wab_instance", sty.headerMadisonopoly)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__mDtZy)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
            ) ? (
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1__xuXzl
                )}
              >
                {"Madisonopoly"}
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
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__hvLvu
                      )}
                    >
                      {"Madisonopoly"}
                    </h1>
                  ) : null}

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tIusW
                    )}
                  >
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
                      </ul>
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__gvTr)}>
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
                  >
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__hoiXq
                      )}
                      value={"value1" as const}
                    >
                      {"1"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__iuXtT
                      )}
                      value={"value2" as const}
                    >
                      {"2"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__q6Qru
                      )}
                      value={"value2 2" as const}
                    >
                      {"3"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option___0ZIi9
                      )}
                      value={"value2 3" as const}
                    >
                      {"4"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__ivQkk
                      )}
                      value={"value2 4" as const}
                    >
                      {"5"}
                    </Select__Option>
                  </Select>
                  <form action="/api/checkout_sessions" method="POST">
                    <section>
                      <button type="submit" role="link">
                        Checkout
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
                          border-radius: 6px;
                          margin-top: 24px;
                          justify-content: space-between;
                        }
                        button {
                          height: 36px;
                          background: #28282b;
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
                  </form>
                  {/* <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    showEndIcon={true}
                    onClick={navigateCheckout}
                  >
                    {"Buy"}
                  </Button> */}
                </div>
              </div>
            </div>
          </div>

          <FooterComponent
            data-plasmic-name={"footerComponent"}
            data-plasmic-override={overrides.footerComponent}
            className={classNames("__wab_instance", sty.footerComponent)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "svg",
    "headerMadisonopoly",
    "columns",
    "ul",
    "select",
    "button",
    "footerComponent",
  ],
  svg: ["svg"],
  headerMadisonopoly: ["headerMadisonopoly"],
  columns: ["columns", "ul", "select", "button"],
  ul: ["ul"],
  select: ["select"],
  button: ["button"],
  footerComponent: ["footerComponent"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  headerMadisonopoly: typeof HeaderMadisonopoly;
  columns: "div";
  ul: "ul";
  select: typeof Select;
  button: typeof Button;
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
    svg: makeNodeComponent("svg"),
    headerMadisonopoly: makeNodeComponent("headerMadisonopoly"),
    columns: makeNodeComponent("columns"),
    ul: makeNodeComponent("ul"),
    select: makeNodeComponent("select"),
    button: makeNodeComponent("button"),
    footerComponent: makeNodeComponent("footerComponent"),

    // Metadata about props expected for PlasmicPrdct
    internalVariantProps: PlasmicPrdct__VariantProps,
    internalArgProps: PlasmicPrdct__ArgProps,
  }
);

export default PlasmicPrdct;
/* prettier-ignore-end */