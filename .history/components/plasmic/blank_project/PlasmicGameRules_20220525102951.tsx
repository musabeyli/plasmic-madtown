// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wA73ZswqroE6r1m1xaxGJ1
// Component: f6N1udh8AA
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import { Document, Page } from "react-pdf";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: wA73ZswqroE6r1m1xaxGJ1/projectcss
import sty from "./PlasmicGameRules.module.css"; // plasmic-import: f6N1udh8AA/css

export type PlasmicGameRules__VariantMembers = {};

export type PlasmicGameRules__VariantsArgs = {};
type VariantPropType = keyof PlasmicGameRules__VariantsArgs;
export const PlasmicGameRules__VariantProps = new Array<VariantPropType>();

export type PlasmicGameRules__ArgsType = {};
type ArgPropType = keyof PlasmicGameRules__ArgsType;
export const PlasmicGameRules__ArgProps = new Array<ArgPropType>();

export type PlasmicGameRules__OverridesType = {
  root?: p.Flex<"div">;
  madisonopolyHeaderFinal?: p.Flex<typeof MadisonopolyHeaderFinal>;
};

export interface DefaultGameRulesProps {}

function PlasmicGameRules__RenderFunc(props: {
  variants: PlasmicGameRules__VariantsArgs;
  args: PlasmicGameRules__ArgsType;
  overrides: PlasmicGameRules__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  const [file, setFile] = useState("./sample.pdf");
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
          <Document
            file={file}
            // onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page />
          </Document>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "madisonopolyHeaderFinal"],
  madisonopolyHeaderFinal: ["madisonopolyHeaderFinal"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  madisonopolyHeaderFinal: typeof MadisonopolyHeaderFinal;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGameRules__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGameRules__VariantsArgs;
    args?: PlasmicGameRules__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGameRules__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGameRules__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicGameRules__ArgProps,
      internalVariantPropNames: PlasmicGameRules__VariantProps,
    });

    return PlasmicGameRules__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGameRules";
  } else {
    func.displayName = `PlasmicGameRules.${nodeName}`;
  }
  return func;
}

export const PlasmicGameRules = Object.assign(
  // Top-level PlasmicGameRules renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    madisonopolyHeaderFinal: makeNodeComponent("madisonopolyHeaderFinal"),

    // Metadata about props expected for PlasmicGameRules
    internalVariantProps: PlasmicGameRules__VariantProps,
    internalArgProps: PlasmicGameRules__ArgProps,
  }
);

export default PlasmicGameRules;
/* prettier-ignore-end */
