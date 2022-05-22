// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: zLYGck-fye5
import React, { useEffect } from "react";

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

import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicMadisonopolyHeaderFinal.module.css"; // plasmic-import: zLYGck-fye5/css

import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 7E0GT9i-81-/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: T3tWtDwVAV/icon
import { Router, useRouter } from "next/router";
import CheckoutButtonHeader from "../../../pages/checkoutButtonHeader";

export type PlasmicMadisonopolyHeaderFinal__VariantMembers = {};

export type PlasmicMadisonopolyHeaderFinal__VariantsArgs = {};
type VariantPropType = keyof PlasmicMadisonopolyHeaderFinal__VariantsArgs;
export const PlasmicMadisonopolyHeaderFinal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicMadisonopolyHeaderFinal__ArgsType = {};
type ArgPropType = keyof PlasmicMadisonopolyHeaderFinal__ArgsType;
export const PlasmicMadisonopolyHeaderFinal__ArgProps =
  new Array<ArgPropType>();

export type PlasmicMadisonopolyHeaderFinal__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  aboutUs?: p.Flex<"a"> & Partial<LinkProps>;
  gameRules?: p.Flex<"a"> & Partial<LinkProps>;
  faq?: p.Flex<"a"> & Partial<LinkProps>;
  aboutUs2?: p.Flex<"a"> & Partial<LinkProps>;
  gameRules2?: p.Flex<"a"> & Partial<LinkProps>;
  faq2?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultMadisonopolyHeaderFinalProps {
  className?: string;
}

function PlasmicMadisonopolyHeaderFinal__RenderFunc(props: {
  variants: PlasmicMadisonopolyHeaderFinal__VariantsArgs;
  args: PlasmicMadisonopolyHeaderFinal__ArgsType;
  overrides: PlasmicMadisonopolyHeaderFinal__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabUxTrbG0Cf5V(),
  });
  const router = useRouter();

  const onSubmitShoppingCart = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
    });
    console.log(response.url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    console.log("Response: ", response);
    // router.push(response.url);
    // const data = await response.json();
    // console.log("POST: ", data);
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      {true ? (
        <p.PlasmicLink
          className={classNames(projectcss.all, projectcss.a, sty.link___5K86B)}
          component={Link}
          href={"/" as const}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("321px" as const)
                : ("197px" as const)
            }
            displayMaxHeight={"none" as const}
            displayMaxWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("395px" as const)
                : ("256px" as const)
            }
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("100%" as const)
                : ("100%" as const)
            }
            loading={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("lazy" as const)
                : ("lazy" as const)
            }
            src={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? {
                    src: "/plasmic/blank_project/images/madisonopolyLogopng.png",
                    fullWidth: 914,
                    fullHeight: 335,
                    aspectRatio: undefined,
                  }
                : {
                    src: "/plasmic/blank_project/images/madisonopolyLogopng.png",
                    fullWidth: 914,
                    fullHeight: 335,
                    aspectRatio: undefined,
                  }
            }
            title={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? ("Madisonopoly" as const)
                : ("Madisonopoly" as const)
            }
          />
        </p.PlasmicLink>
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__yZinR)}
        >
          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"aboutUs"}
            data-plasmic-override={overrides.aboutUs}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.aboutUs)}
            component={Link}
            href={"/about-us" as const}
            platform={"nextjs"}
          >
            {true ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__xum7Y)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Lb5U
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "About Us"
                : "About Us"}
            </div>

            {true ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__xkb7C)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"gameRules"}
            data-plasmic-override={overrides.gameRules}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.gameRules)}
            component={Link}
            href={"/game-rules" as const}
            platform={"nextjs"}
          >
            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__r5KUs)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__y1Lb
              )}
            >
              {"Game rules"}
            </div>

            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__opVT)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"faq"}
            data-plasmic-override={overrides.faq}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.faq)}
            component={Link}
            href={"/faq" as const}
            platform={"nextjs"}
          >
            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__nMvXz)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__orMh
              )}
            >
              {"faq"}
            </div>

            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg___7U2I)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__heOba
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__uM5D)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ez8C
                )}
              >
                {"Blog"}
              </div>

              {false ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__nYSoZ)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
        </p.Stack>
      ) : null}
      {true ? (
        <ShoppingCartIcon
          className={classNames(projectcss.all, sty.svg__nwJj)}
          role={"img"}
        />
      ) : null}
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qOs7F)}
        >
          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"aboutUs2"}
            data-plasmic-override={overrides.aboutUs2}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.aboutUs2)}
            component={Link}
            href={"/about-us" as const}
            platform={"nextjs"}
          >
            {true ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg___9Yso)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___9HaIn
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "About Us"
                : "About Us"}
            </div>

            {true ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__ujgLg)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"gameRules2"}
            data-plasmic-override={overrides.gameRules2}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.gameRules2)}
            component={Link}
            href={"/game-rules" as const}
            platform={"nextjs"}
          >
            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__chAi)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__joXsO
              )}
            >
              {"Game rules"}
            </div>

            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__ygDtM)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.Stack
            as={p.PlasmicLink}
            data-plasmic-name={"faq2"}
            data-plasmic-override={overrides.faq2}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.faq2)}
            component={Link}
            href={"/faq" as const}
            platform={"nextjs"}
          >
            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__yikr)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lIqGb
              )}
            >
              {"faq"}
            </div>

            {false ? (
              <Icon4Icon
                className={classNames(projectcss.all, sty.svg__m2To)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          {true ? (
            <CheckoutButtonHeader />
          ) : // <p.Stack
          //   as={p.PlasmicLink}
          //   hasGap={true}
          //   className={classNames(
          //     projectcss.all,
          //     projectcss.a,
          //     sty.link__kKZw8
          //   )}
          //   component={Link}
          //   // href={"/basic" as const}
          //   onClick={onSubmitShoppingCart}
          //   platform={"nextjs"}
          // >
          //   {false ? (
          //     <Icon4Icon
          //       className={classNames(projectcss.all, sty.svg__t9B30)}
          //       role={"img"}
          //     />
          //   ) : null}
          //   {true ? (
          //     <ShoppingCartIcon
          //       className={classNames(projectcss.all, sty.svg__f7Pm8)}
          //       role={"img"}
          //     />
          //   ) : null}
          // </p.Stack>
          null}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "aboutUs",
    "gameRules",
    "faq",
    "aboutUs2",
    "gameRules2",
    "faq2",
  ],
  img: ["img"],
  aboutUs: ["aboutUs"],
  gameRules: ["gameRules"],
  faq: ["faq"],
  aboutUs2: ["aboutUs2"],
  gameRules2: ["gameRules2"],
  faq2: ["faq2"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  aboutUs: "a";
  gameRules: "a";
  faq: "a";
  aboutUs2: "a";
  gameRules2: "a";
  faq2: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMadisonopolyHeaderFinal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMadisonopolyHeaderFinal__VariantsArgs;
    args?: PlasmicMadisonopolyHeaderFinal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMadisonopolyHeaderFinal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMadisonopolyHeaderFinal__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMadisonopolyHeaderFinal__ArgProps,
      internalVariantPropNames: PlasmicMadisonopolyHeaderFinal__VariantProps,
    });

    return PlasmicMadisonopolyHeaderFinal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMadisonopolyHeaderFinal";
  } else {
    func.displayName = `PlasmicMadisonopolyHeaderFinal.${nodeName}`;
  }
  return func;
}

export const PlasmicMadisonopolyHeaderFinal = Object.assign(
  // Top-level PlasmicMadisonopolyHeaderFinal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    gameRules: makeNodeComponent("gameRules"),
    faq: makeNodeComponent("faq"),
    aboutUs2: makeNodeComponent("aboutUs2"),
    gameRules2: makeNodeComponent("gameRules2"),
    faq2: makeNodeComponent("faq2"),

    // Metadata about props expected for PlasmicMadisonopolyHeaderFinal
    internalVariantProps: PlasmicMadisonopolyHeaderFinal__VariantProps,
    internalArgProps: PlasmicMadisonopolyHeaderFinal__ArgProps,
  }
);

export default PlasmicMadisonopolyHeaderFinal;
/* prettier-ignore-end */
