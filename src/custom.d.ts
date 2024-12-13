declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
