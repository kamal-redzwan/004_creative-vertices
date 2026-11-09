import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";
import { emdashStorefrontData } from "./data/emdash-cms";

const swatchSchema = z.object({
  hex: z.string(),
  label: z.string(),
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const flexibleTextSchema = z
  .union([z.string(), z.array(z.record(z.unknown()))])
  .nullable()
  .optional();

function resolvePreviewImage(
  rawImage: Record<string, unknown>,
): Record<string, unknown> {
  if (typeof rawImage.src === "string" && rawImage.src.length > 0) {
    return rawImage;
  }
  if (typeof rawImage.url === "string" && rawImage.url.length > 0) {
    return { ...rawImage, src: rawImage.url };
  }
  if (
    typeof rawImage.previewUrl === "string" &&
    rawImage.previewUrl.length > 0
  ) {
    return { ...rawImage, src: rawImage.previewUrl };
  }

  const meta =
    rawImage.meta && typeof rawImage.meta === "object"
      ? (rawImage.meta as Record<string, unknown>)
      : undefined;

  const storageKey =
    (typeof meta?.storageKey === "string" && meta.storageKey) ||
    (typeof rawImage.storageKey === "string" && rawImage.storageKey) ||
    (typeof rawImage.id === "string" && rawImage.id) ||
    "";

  if (storageKey) {
    const src = storageKey.startsWith("/")
      ? storageKey
      : `/_emdash/api/media/file/${storageKey}`;
    return { ...rawImage, src };
  }

  return rawImage;
}

export const templateSchema = z
  .object({
    id: z.string(),
    slug: z.string().nullable(),
    status: z.string(),
    title: z.string(),
    subtitle: z.string(),
    featured: z.boolean().optional(),
    tier: z.enum(["PREMIUM", "FREE"]),
    price: z.number(),
    price_display: z.string().optional(),
    industry: z.enum([
      "Health & Practice",
      "Online Shop",
      "Landing Page",
      "Professional Services",
      "Food & Drink",
      "Studios & Agencies",
      "Software & SaaS",
      "Retail & Product",
      "Travel & Leisure",
      "Personal & Writing",
      "Arts & Culture",
      "Blog",
    ]),
    industry_label: z.string().optional(),
    style: z.string(),
    style_tag: z.string().optional(),
    feature_bullet: z.string().optional(),
    swatches: z.array(swatchSchema).optional(),
    typefaces: z.array(z.string()).optional(),
    swatches_typefaces: z.unknown(),
    page_count: z.number(),
    grid_row_role: z.enum(["top-2col", "body-3col"]).optional(),
    emdash_collection: z.string().optional(),
    dom_nodes_count: z.number().optional(),
    css_payload: z.string(),
    routes_included: z.array(z.string()).optional(),
    polar_checkout_url: z.string().optional(),
    about_info: flexibleTextSchema,
    pages_info: flexibleTextSchema,
    tech_stack: flexibleTextSchema,
    design_rationale: flexibleTextSchema,
    target_audience: flexibleTextSchema,
    engineering_principles: flexibleTextSchema,
    getting_started: flexibleTextSchema,
    faq_items: z
      .preprocess((val) => {
        if (typeof val === "string") {
          try {
            return JSON.parse(val);
          } catch {
            return [];
          }
        }
        return val;
      }, z.array(faqItemSchema).nullable().optional())
      .optional(),
    preview_image: z.record(z.unknown()),
    preview_alt: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    publishedAt: z.coerce.date().nullable(),
  })
  .transform((data) => ({
    ...data,
    slug: data.slug || data.id,
    preview_image: resolvePreviewImage(data.preview_image),
  }));

export const benefits = /* @__PURE__ */ defineCollection({
  loader: async () => emdashStorefrontData.benefits,
  schema: z.object({
    id: z.string(),
    code_ref: z.string(),
    title: z.string(),
    summary: z.string(),
    metric_label: z.string(),
    metric_value: z.string(),
    spec_snippet: z.string(),
    emphasized: z.boolean().optional(),
  }),
});

export const faqs = /* @__PURE__ */ defineCollection({
  loader: async () => emdashStorefrontData.faqs,
  schema: z.object({
    id: z.string(),
    question: z.string(),
    answer: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  benefits,
  faqs,
};
