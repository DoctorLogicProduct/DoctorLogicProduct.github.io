import { defineConfig } from "tinacms";
import { box_gridFields } from "./templates";
import { case_study_featureFields } from "./templates";
import { component_page_builderFields } from "./templates";
import { content_featureFields } from "./templates";
import { content_feature_ctaFields } from "./templates";
import { featureFields } from "./templates";
import { form_landing_pageFields } from "./templates";
import { hero_no_imageFields } from "./templates";
import { hero_with_background_imageFields } from "./templates";
import { hero_with_formFields } from "./templates";
import { hero_with_iframe_formFields } from "./templates";
import { hero_with_imageFields } from "./templates";
import { image_group___outside_styles_requiredFields } from "./templates";
import { item_grid_componentFields } from "./templates";
import { page_builderFields } from "./templates";
import { post_templateFields } from "./templates";
import { test_tagsFields } from "./templates";
import { text_componentFields } from "./templates";
import { wistia_embedFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Landing Pages",
        name: "landing_pages",
        path: "landing-pages",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...component_page_builderFields(),
            ],
            label: "component-page-builder",
            name: "component_page_builder",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...form_landing_pageFields(),
            ],
            label: "form-landing-page",
            name: "form_landing_page",
          },
        ],
      },
      {
        format: "md",
        label: "Other Pages",
        name: "other_pages",
        path: "_pages",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Posts",
        name: "posts",
        path: "_posts",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "string",
            name: "post_title",
            label: "Post Title",
            description: "This is the title",
            isBody: true,
          },
          {
            type: "datetime",
            label: "Post Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "string",
            name: "post_author",
            label: "Post Author",
            description: "This is the author",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "post_intro",
            label: "Post Intro",
            description: "This is the post intro",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "post_highlight",
            label: "Post Highlight",
            description: "This is the highlight text",
            isBody: true,
          },
          {
            type: "string",
            label: "Post Type",
            name: "post_type",
            options: [
              { label: "Blog", value: "blog" },
              { label: "Press Release", value: "press-release" },
              { label: "Update", value: "update" }
            ],
          },
          {
            type: "string",
            label: "Related Product",
            name: "product",
            options: [
              { label: "Website Management", value: "website management" },
              { label: "Social Reputation", value: "social reputation" },
              { label: "Content Multiplier", value: "content multiplier" },
              { label: "Lead Generator", value: "lead generator" },
              { label: "Success Insights", value: "success insights" },
              { label: "Growth Accelerators", value: "growth accelerators" },
              { label: "Search Amplifier", value: "search amplifier" }
            ],
          }
        ],
      },
    ],
  },
});
