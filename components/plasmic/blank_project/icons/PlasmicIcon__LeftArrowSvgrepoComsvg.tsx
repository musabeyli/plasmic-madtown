// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LeftArrowSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LeftArrowSvgrepoComsvgIcon(
  props: LeftArrowSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 476.213 476.213"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M476.213 223.107H57.427l94.393-94.394-21.213-21.213L0 238.106l130.607 130.608L151.82 347.5l-94.393-94.393h418.786z"
        }
      ></path>
    </svg>
  );
}

export default LeftArrowSvgrepoComsvgIcon;
/* prettier-ignore-end */
