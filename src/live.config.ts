import { defineLiveCollection } from "astro:content";
import { emdashLoader } from "emdash/runtime";
import { templateSchema } from "./content.config";

export const collections = {
  _emdash: defineLiveCollection({ loader: emdashLoader() }),
  templates: defineLiveCollection({
    loader: emdashLoader({
      collection: "cv_storefront_templates",
      urlPattern: "/templates/[slug]",
    }),
    schema: templateSchema,
  }),
};
