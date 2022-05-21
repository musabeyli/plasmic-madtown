// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: SbmFAmFl460
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

import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicHeaderMadisonopoly.module.css"; // plasmic-import: SbmFAmFl460/css

import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: 7E0GT9i-81-/icon
import ShoppingCartIcon from "./icons/PlasmicIcon__ShoppingCart"; // plasmic-import: T3tWtDwVAV/icon

export type PlasmicHeaderMadisonopoly__VariantMembers = {};

export type PlasmicHeaderMadisonopoly__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderMadisonopoly__VariantsArgs;
export const PlasmicHeaderMadisonopoly__VariantProps =
  new Array<VariantPropType>();

export type PlasmicHeaderMadisonopoly__ArgsType = {};
type ArgPropType = keyof PlasmicHeaderMadisonopoly__ArgsType;
export const PlasmicHeaderMadisonopoly__ArgProps = new Array<ArgPropType>();

export type PlasmicHeaderMadisonopoly__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  aboutUs?: p.Flex<"a"> & Partial<LinkProps>;
  gameRules?: p.Flex<"a"> & Partial<LinkProps>;
  faq?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderMadisonopolyProps {
  className?: string;
}

function PlasmicHeaderMadisonopoly__RenderFunc(props: {
  variants: PlasmicHeaderMadisonopoly__VariantsArgs;
  args: PlasmicHeaderMadisonopoly__ArgsType;
  overrides: PlasmicHeaderMadisonopoly__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabUxTrbG0Cf5V(),
  });

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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__fqlNu)}
      >
        {true ? (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__qm4Bo
            )}
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
                  : ("478px" as const)
              }
              displayMaxHeight={"none" as const}
              displayMaxWidth={"684px" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"100%" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/blank_project/images/madisonopolyLogopng.png",

                fullWidth: 500,
                fullHeight: 500,
                aspectRatio: undefined,
              }}
              title={"Madisonopoly" as const}
            />
          </p.PlasmicLink>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vq9Wr)}
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
                  className={classNames(projectcss.all, sty.svg__niZen)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b146E
                )}
              >
                {"About Us"}
              </div>

              {true ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__ma1QS)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>

            <p.Stack
              as={p.PlasmicLink}
              data-plasmic-name={"gameRules"}
              data-plasmic-override={overrides.gameRules}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.gameRules
              )}
              component={Link}
              href={"/game-rules" as const}
              platform={"nextjs"}
            >
              {false ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__vPfnV)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nfVVz
                )}
              >
                {"Game rules"}
              </div>

              {false ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__ouFgX)}
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
                  className={classNames(projectcss.all, sty.svg__gLplc)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h2SrC
                )}
              >
                {"faq"}
              </div>

              {false ? (
                <Icon4Icon
                  className={classNames(projectcss.all, sty.svg__y6IfC)}
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
                  sty.link__e9A23
                )}
                component={Link}
                platform={"nextjs"}
              >
                {false ? (
                  <Icon4Icon
                    className={classNames(projectcss.all, sty.svg___9G0Jk)}
                    role={"img"}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mbTEj
                  )}
                >
                  {"Blog"}
                </div>

                {false ? (
                  <Icon4Icon
                    className={classNames(projectcss.all, sty.svg__h84Gu)}
                    role={"img"}
                  />
                ) : null}
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}

        <ShoppingCartIcon
          className={classNames(projectcss.all, sty.svg__e4M0M)}
          role={"img"}
        />
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "aboutUs", "gameRules", "faq"],
  img: ["img"],
  aboutUs: ["aboutUs"],
  gameRules: ["gameRules"],
  faq: ["faq"],
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
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderMadisonopoly__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderMadisonopoly__VariantsArgs;
    args?: PlasmicHeaderMadisonopoly__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeaderMadisonopoly__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeaderMadisonopoly__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeaderMadisonopoly__ArgProps,
      internalVariantPropNames: PlasmicHeaderMadisonopoly__VariantProps,
    });

    return PlasmicHeaderMadisonopoly__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderMadisonopoly";
  } else {
    func.displayName = `PlasmicHeaderMadisonopoly.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderMadisonopoly = Object.assign(
  // Top-level PlasmicHeaderMadisonopoly renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    gameRules: makeNodeComponent("gameRules"),
    faq: makeNodeComponent("faq"),

    // Metadata about props expected for PlasmicHeaderMadisonopoly
    internalVariantProps: PlasmicHeaderMadisonopoly__VariantProps,
    internalArgProps: PlasmicHeaderMadisonopoly__ArgProps,
  }
);

export default PlasmicHeaderMadisonopoly;
/* prettier-ignore-end */
