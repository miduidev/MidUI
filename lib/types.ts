import { FC } from "react";

export type Metadata = {
  title: string;
  description: string;
  component: FC;
  category: string;
};

export type UIComponent = {
  metadata: Metadata;
  code: string[];
  files: string[];
};
