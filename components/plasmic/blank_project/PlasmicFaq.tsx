// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: 0zAjU9T0PQ
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
import MadisonopolyHeaderFinal from "../../MadisonopolyHeaderFinal"; // plasmic-import: zLYGck-fye5/component
import FooterComponent from "../../FooterComponent"; // plasmic-import: Mfi3gMBJIGb/component

import { useScreenVariants as useScreenVariantsabUxTrbG0Cf5V } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AbUXTrbG0Cf5V/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicFaq.module.css"; // plasmic-import: 0zAjU9T0PQ/css

export type PlasmicFaq__VariantMembers = {};

export type PlasmicFaq__VariantsArgs = {};
type VariantPropType = keyof PlasmicFaq__VariantsArgs;
export const PlasmicFaq__VariantProps = new Array<VariantPropType>();

export type PlasmicFaq__ArgsType = {};
type ArgPropType = keyof PlasmicFaq__ArgsType;
export const PlasmicFaq__ArgProps = new Array<ArgPropType>();

export type PlasmicFaq__OverridesType = {
  root?: p.Flex<"div">;
  madisonopolyHeaderFinal?: p.Flex<typeof MadisonopolyHeaderFinal>;
  h1?: p.Flex<"h1">;
  footerComponent?: p.Flex<typeof FooterComponent>;
};

export interface DefaultFaqProps {}

function PlasmicFaq__RenderFunc(props: {
  variants: PlasmicFaq__VariantsArgs;
  args: PlasmicFaq__ArgsType;
  overrides: PlasmicFaq__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsabUxTrbG0Cf5V()
  });

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

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__tWxRk)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"Frequently Asked Questions"}
              </h1>

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__yuOCv)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__xTgOp
                    )}
                  >
                    {"How long does shipping take?"}
                  </h4>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sjyAz
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "We will be shipping Madisonopoly with USPS, so the ETA should be around 1-3 days most of the time."
                      : "We will be shipping Madisonopoly with USPS, so the ETA should be around 1-3 days most of the time."}
                  </div>

                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : false
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yBdoN
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "I didn't know the Snipcart guys were into herbs as well! How beautiful is that Planty theme. I'm going to launch a killer JAMstack e-commerce store using this for sure."
                        : "We will be shipping Madisonopoly with USPS, so the ETA should be around 1-3 days most of the time."}
                    </div>
                  ) : null}
                </p.Stack>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__wd2T)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4___3N7Tf
                    )}
                  >
                    {"How do refunds and returns work?"}
                  </h4>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sLl48
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Please send us an email if you would like a return or refund. \n\nWe have a 30 day money back guarantee policy. \n\nwe will issue your refund as soon as possible and we will make sure you have a great experience with us."
                      : "Please send us an email if you would like a return or refund. We have a 30 day money back guarantee policy. And we will issue your refund as soon as possible."}
                  </div>
                </p.Stack>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___9XBwf)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__lnlx9
                    )}
                  >
                    {"What's down the road with Madisonopoly?"}
                  </h4>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5QPYa
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Our vision is to create a community of badgers  because being badger is an identity that you carry with you no matter where you live. \n\nWe are currently in the talks of offering discounts to people who are in Madisonopoly community, as well as organizing events. Stay tooned !!"
                      : "Our vision is to create a community of badgers  because being badger is an identity that you carry with you no matter where you live. We are currently in the talks of offering discounts to people who are in madisonopoly community, as well as organizing events. Stay tooned !!"}
                  </div>
                </p.Stack>
              ) : null}
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__k5JiX)}
                >
                  <h4
                    className={classNames(
                      projectcss.all,
                      projectcss.h4,
                      projectcss.__wab_text,
                      sty.h4__qdta4
                    )}
                  >
                    {"How can I contribute to this project?"}
                  </h4>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__soUpV
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "The reason why we launched this project is to connect with Badgers and have a common identity which all can stand behind. Please don't hesitate to reach out to us. We will be more than happy to have a talk and get to know each other :)"
                      : "The reason why we launched this project is to connect with Badgers and have a common identity which all can stand behind. Please don't hesitate to reach out to us. We will be more than happy to have a talk and get to know each other :)"}
                  </div>
                </p.Stack>
              ) : null}
            </div>
          ) : null}

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
  root: ["root", "madisonopolyHeaderFinal", "h1", "footerComponent"],
  madisonopolyHeaderFinal: ["madisonopolyHeaderFinal"],
  h1: ["h1"],
  footerComponent: ["footerComponent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  madisonopolyHeaderFinal: typeof MadisonopolyHeaderFinal;
  h1: "h1";
  footerComponent: typeof FooterComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaq__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaq__VariantsArgs;
    args?: PlasmicFaq__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaq__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFaq__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFaq__ArgProps,
          internalVariantPropNames: PlasmicFaq__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFaq__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaq";
  } else {
    func.displayName = `PlasmicFaq.${nodeName}`;
  }
  return func;
}

export const PlasmicFaq = Object.assign(
  // Top-level PlasmicFaq renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    madisonopolyHeaderFinal: makeNodeComponent("madisonopolyHeaderFinal"),
    h1: makeNodeComponent("h1"),
    footerComponent: makeNodeComponent("footerComponent"),

    // Metadata about props expected for PlasmicFaq
    internalVariantProps: PlasmicFaq__VariantProps,
    internalArgProps: PlasmicFaq__ArgProps
  }
);

export default PlasmicFaq;
/* prettier-ignore-end */
