// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: Mfi3gMBJIGb
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
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: aOTvFzJBlc_/component

import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicFooterComponent.module.css"; // plasmic-import: Mfi3gMBJIGb/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Tri1W4mor9t/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: M7J874mTSvr/icon

export type PlasmicFooterComponent__VariantMembers = {};

export type PlasmicFooterComponent__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterComponent__VariantsArgs;
export const PlasmicFooterComponent__VariantProps =
  new Array<VariantPropType>();

export type PlasmicFooterComponent__ArgsType = {};
type ArgPropType = keyof PlasmicFooterComponent__ArgsType;
export const PlasmicFooterComponent__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterComponent__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultFooterComponentProps {
  className?: string;
}

function PlasmicFooterComponent__RenderFunc(props: {
  variants: PlasmicFooterComponent__VariantsArgs;
  args: PlasmicFooterComponent__ArgsType;
  overrides: PlasmicFooterComponent__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabUxTrbG0Cf5V()
  });

  return (
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
      <div className={classNames(projectcss.all, sty.freeBox__qtvQb)}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          hasGap={true}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__obIfG)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__oNxF)}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ("171px" as const)
                    : ("200px" as const)
                }
                displayMaxHeight={"none" as const}
                displayMaxWidth={"none" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"406px" as const}
                src={{
                  src: "/plasmic/blank_project/images/madisonopolyLogopng.png",
                  fullWidth: 914,
                  fullHeight: 335,
                  aspectRatio: undefined
                }}
              />
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.column__kjAw9)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kzA5C)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i0Kn3
                )}
              >
                {"About game"}
              </div>

              <Button
                className={classNames("__wab_instance", sty.button__iynee)}
                color={"clear" as const}
                link={"/game-rules" as const}
                showEndIcon={true}
                size={"minimal" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xUvxW
                  )}
                >
                  {"Game Rules"}
                </div>
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button___2XGXs)}
                color={"clear" as const}
                link={"/faq" as const}
                showEndIcon={true}
                size={"minimal" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dpewZ
                  )}
                >
                  {"FAQs"}
                </div>
              </Button>

              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__cudSo)}
                  color={"clear" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1PxHr
                    )}
                  >
                    {"Status"}
                  </div>
                </Button>
              ) : null}
            </p.Stack>
          </div>

          <div className={classNames(projectcss.all, sty.column__ie7Vy)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__rWe14)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lEk3W
                )}
              >
                {"Company"}
              </div>

              <Button
                className={classNames("__wab_instance", sty.button__yxM5)}
                color={"clear" as const}
                link={"/about-us" as const}
                showEndIcon={true}
                size={"minimal" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pd7L
                  )}
                >
                  {"About Us"}
                </div>
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__nhP1B)}
                color={"clear" as const}
                size={"minimal" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ckCPt
                  )}
                >
                  {"Email: contact@madisonopoly.com"}
                </div>
              </Button>

              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__byW3N)}
                  color={"clear" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jaLiM
                    )}
                  >
                    {"Careers"}
                  </div>
                </Button>
              ) : null}
              {true ? (
                <Button
                  className={classNames("__wab_instance", sty.button__vapLl)}
                  color={"clear" as const}
                  size={"minimal" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___0FlZ
                    )}
                  >
                    {"Media"}
                  </div>
                </Button>
              ) : null}
            </p.Stack>
          </div>
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterComponent__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterComponent__VariantsArgs;
    args?: PlasmicFooterComponent__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterComponent__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterComponent__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooterComponent__ArgProps,
      internalVariantPropNames: PlasmicFooterComponent__VariantProps
    });

    return PlasmicFooterComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterComponent";
  } else {
    func.displayName = `PlasmicFooterComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterComponent = Object.assign(
  // Top-level PlasmicFooterComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicFooterComponent
    internalVariantProps: PlasmicFooterComponent__VariantProps,
    internalArgProps: PlasmicFooterComponent__ArgProps
  }
);

export default PlasmicFooterComponent;
/* prettier-ignore-end */
