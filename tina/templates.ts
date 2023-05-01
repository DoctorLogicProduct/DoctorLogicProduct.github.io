import type { TinaField } from "tinacms";
export function box_gridFields() {
  return [
    {
      type: "string",
      name: "block",
      label: "Block",
    },
    {
      type: "object",
      name: "box",
      label: "Box",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "image",
          name: "background_image",
          label: "Background Image",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "string",
          name: "action",
          label: "Call To Action",
        },
      ],
    },
  ] as TinaField[];
}
export function case_study_featureFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "per_row_count",
      nameOverride: "per-row-count",
      label: "Per Row Count",
      options: ["2", "3"],
    },
    {
      type: "object",
      name: "practices",
      label: "Featured Case Studies",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Practice Name",
        },
      ],
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "Button Link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "Button Label",
        },
      ],
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "link_id",
          nameOverride: "link-id",
          label: "Link ID",
        },
        {
          type: "string",
          name: "link_label",
          nameOverride: "link-label",
          label: "Link Label",
        },
      ],
    },
  ] as TinaField[];
}
export function component_page_builderFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "boolean",
      name: "alt_header",
      nameOverride: "alt-header",
      label: "Alt Header",
    },
    {
      type: "boolean",
      name: "marketing_header",
      label: "Marketing Header",
    },
    {
      type: "boolean",
      name: "marketing_footer",
      label: "Marketing Footer",
    },
    {
      type: "string",
      name: "tracking_number",
      nameOverride: "tracking-number",
      label: "Tracking Number",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "object",
      name: "page_class",
      label: "Page Class",
      list: true,
      fields: [
        {
          type: "string",
          name: "class",
          label: "Class Name",
        },
      ],
    },
    {
      type: "boolean",
      name: "gsap",
      label: "GSAP",
    },
    {
      type: "string",
      name: "custom_js",
      label: "Custom Java Script File",
    },
    {
      type: "string",
      name: "description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "meta_image",
      label: "Meta Image",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Page Sections",
      name: "page_sections",
      templates: [
        {
          fields: hero_with_imageFields(),
          label: "Hero With Image",
          name: "hero_with_image",
          nameOverride: "hero-with-image",
        },
        {
          fields: hero_with_background_imageFields(),
          label: "Hero With Background Image",
          name: "hero_with_background_image",
          nameOverride: "hero-with-background-image",
        },
        {
          fields: hero_no_imageFields(),
          label: "Hero No Image",
          name: "hero_no_image",
          nameOverride: "hero-no-image",
        },
        {
          fields: hero_with_iframe_formFields(),
          label: "Hero With Iframe Form",
          name: "hero_with_iframe_form",
          nameOverride: "hero-with-iframe-form",
        },
        {
          fields: hero_with_formFields(),
          label: "Hero With Form",
          name: "hero_with_form",
          nameOverride: "hero-with-form",
        },
        {
          fields: featureFields(),
          label: "Feature",
          name: "feature",
        },
        {
          fields: text_componentFields(),
          label: "Text Component",
          name: "text_component",
          nameOverride: "text-component",
        },
        {
          fields: item_grid_componentFields(),
          label: "Item Grid Component",
          name: "item_grid_component",
          nameOverride: "item-grid-component",
        },
        {
          fields: image_group___outside_styles_requiredFields(),
          label: "Image Group - Outside Styles Required",
          name: "image_group",
          nameOverride: "image-group",
        },
        {
          fields: wistia_embedFields(),
          label: "Wistia Embed",
          name: "wistia_embed",
          nameOverride: "wistia-embed",
        },
        {
          fields: case_study_featureFields(),
          label: "Case Study Feature",
          name: "case_study_feature",
          nameOverride: "case-study-feature",
        },
      ],
    },
  ] as TinaField[];
}
export function content_featureFields() {
  return [
    {
      type: "string",
      name: "block",
      label: "block",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "media",
      label: "Featured Media",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "string",
      name: "media_alignment",
      label: "Media Alignment",
      options: ["Left", "Right"],
    },
  ] as TinaField[];
}
export function content_feature_ctaFields() {
  return [
    {
      type: "string",
      name: "block",
      label: "block",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "media",
      label: "Featured Media",
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
    {
      type: "string",
      name: "media_alignment",
      label: "Media Alignment",
      options: ["Left", "Right"],
    },
    {
      type: "object",
      name: "cta",
      label: "Call To Action",
      fields: [
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
      ],
    },
  ] as TinaField[];
}
export function featureFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "btn-link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "btn-label",
        },
      ],
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Popover",
      list: true,
      fields: [
        {
          type: "string",
          name: "link_id",
          nameOverride: "link-id",
          label: "Link ID",
        },
        {
          type: "string",
          name: "link_label",
          nameOverride: "link-label",
          label: "Link Label",
        },
      ],
    },
    {
      type: "image",
      name: "img",
      label: "Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Alt Text",
    },
    {
      type: "string",
      name: "img_alignment",
      label: "Image Alignment",
      options: ["Left", "Right"],
    },
  ] as TinaField[];
}
export function form_landing_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "object",
      name: "page_class",
      label: "Page Class",
      list: true,
      fields: [
        {
          type: "string",
          name: "class",
          label: "Class Name",
        },
      ],
    },
    {
      type: "string",
      name: "meta_image",
      label: "Meta Image",
    },
    {
      type: "string",
      name: "description",
      label: "Meta Description",
    },
    {
      type: "string",
      name: "headline",
      label: "Page Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Page Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "form_src",
      label: "Form Source",
    },
    {
      type: "string",
      name: "form_height",
      label: "Form Height",
    },
    {
      type: "image",
      name: "img_src",
      label: "Landing Page Image",
    },
    {
      type: "string",
      name: "img_alt",
      label: "Landing Page Image Alt Text",
    },
  ] as TinaField[];
}
export function hero_no_imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "component_css",
      label: "component css",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "btn-link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "btn-label",
        },
      ],
    },
  ] as TinaField[];
}
export function hero_with_background_imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component Custom Class",
    },
    {
      type: "image",
      name: "bg_img",
      label: "Background Image",
    },
    {
      type: "object",
      name: "tagline",
      label: "Tagline",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Tagline",
        },
      ],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "wistia_link_id",
          nameOverride: "wistia-link-id",
          label: "Wistia ID",
        },
        {
          type: "string",
          name: "wistia_link_label",
          nameOverride: "wistia-link-label",
          label: "Link Label",
        },
      ],
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "Button Label",
        },
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "Button Link",
        },
      ],
    },
  ] as TinaField[];
}
export function hero_with_formFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "image",
      name: "bg_img",
      label: "Background Image",
    },
    {
      type: "object",
      name: "tagline",
      label: "Tagline",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Tagline",
        },
      ],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "Button Label",
        },
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "Button Link",
        },
      ],
    },
    {
      type: "string",
      name: "form_template",
      label: "Form Template",
    },
    {
      type: "string",
      name: "form_handler",
      label: "Form Handler",
    },
  ] as TinaField[];
}
export function hero_with_iframe_formFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "image",
      name: "bg_img",
      label: "Background Image",
    },
    {
      type: "object",
      name: "tagline",
      label: "Tagline",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Tagline",
        },
      ],
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "Button Label",
        },
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "Button Link",
        },
      ],
    },
    {
      type: "string",
      name: "form_src",
      label: "Pardot form URL",
    },
    {
      type: "string",
      name: "form_height",
      label: "Form Height",
    },
  ] as TinaField[];
}
export function hero_with_imageFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "btn-link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "btn-label",
        },
      ],
    },
    {
      type: "object",
      name: "text_link",
      nameOverride: "text-link",
      label: "Text Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "text_link_link",
          nameOverride: "text-link-link",
          label: "Link URL",
        },
        {
          type: "string",
          name: "text_link_label",
          nameOverride: "text-link-label",
          label: "Link Label",
        },
      ],
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "wistia_link_id",
          nameOverride: "wistia-link-id",
          label: "Wistia ID",
        },
        {
          type: "string",
          name: "wistia_link_label",
          nameOverride: "wistia-link-label",
          label: "Link Label",
        },
      ],
    },
    {
      type: "image",
      name: "img",
      label: "Image",
    },
    {
      type: "string",
      name: "alt",
      label: "Alt Text",
    },
  ] as TinaField[];
}
export function image_group___outside_styles_requiredFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "string",
      name: "tagline",
      label: "Tagline",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Section Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "items",
      label: "Item",
      list: true,
      fields: [
        {
          type: "string",
          name: "class",
          label: "Item Class",
        },
        {
          type: "boolean",
          name: "img",
          label: "Image Trigger",
        },
        {
          type: "image",
          name: "src",
          label: "Image",
        },
        {
          type: "string",
          name: "headline",
          label: "Item Headline",
        },
        {
          type: "string",
          name: "text",
          label: "Item Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "Button Link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "Button Label",
        },
      ],
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "link_id",
          nameOverride: "link-id",
          label: "Wistia ID",
        },
        {
          type: "string",
          name: "link_label",
          nameOverride: "link-label",
          label: "Link Label",
        },
      ],
    },
  ] as TinaField[];
}
export function item_grid_componentFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "image",
      name: "background_image",
      nameOverride: "background-image",
      label: "Background Image",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
    },
    {
      type: "string",
      name: "per_row_count",
      nameOverride: "per-row-count",
      label: "Per Row Count",
      options: ["3", "4"],
    },
    {
      type: "object",
      name: "items",
      label: "Item",
      list: true,
      fields: [
        {
          type: "object",
          name: "img",
          label: "Item Image",
          list: true,
          fields: [
            {
              type: "image",
              name: "src",
              label: "Image",
            },
            {
              type: "string",
              name: "alt",
              label: "Alt Text",
            },
          ],
        },
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
        {
          type: "object",
          name: "link",
          label: "Link",
          list: true,
          fields: [
            {
              type: "string",
              name: "link_link",
              nameOverride: "link-link",
              label: "Link",
            },
            {
              type: "string",
              name: "link_label",
              nameOverride: "link-label",
              label: "Label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "btn-link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "btn-label",
        },
      ],
    },
  ] as TinaField[];
}
export function page_builderFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Page Sections",
      name: "page_sections",
      templates: [
        {
          fields: box_gridFields(),
          label: "box-grid",
          name: "box_grid",
          nameOverride: "box-grid",
        },
        {
          fields: content_featureFields(),
          label: "content-feature",
          name: "content_feature",
          nameOverride: "content-feature",
        },
        {
          fields: content_feature_ctaFields(),
          label: "content-feature-cta",
          name: "feature_cta",
          nameOverride: "feature-cta",
        },
      ],
    },
  ] as TinaField[];
}
export function post_templateFields() {
  return [
    {
      type: "string",
      name: "post_title",
      label: "Post Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Post Date",
      required: true,
    },
    {
      type: "string",
      name: "post_author",
      label: "Author",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "post_intro",
      label: "Post Intro",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "image",
      name: "post_image",
      label: "Post Image",
    },
    {
      type: "string",
      name: "post_highlight",
      label: "Post Highlight",
    },
    {
      type: "string",
      name: "post_type",
      label: "Post Type",
      list: true,
      options: ["blog", "press-release", "update"],
    },
    {
      type: "string",
      name: "product",
      label: "Related Product",
      list: true,
      options: [
        "website management",
        "social reputation",
        "content multiplier",
        "lead generator",
        "success insights",
        "growth accelerators",
        "search amplifier",
      ],
    },
  ] as TinaField[];
}
export function test_tagsFields() {
  return [
    {
      type: "string",
      name: "tag_1",
      label: "tag 1",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "tag_2",
      label: "tag 2",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function text_componentFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "object",
      name: "headline",
      label: "Headline",
      list: true,
      fields: [
        {
          type: "string",
          name: "headline",
          label: "Headline",
        },
      ],
    },
    {
      type: "object",
      name: "img",
      label: "Image",
      list: true,
      fields: [
        {
          type: "image",
          name: "img_src",
          label: "Image",
        },
        {
          type: "string",
          name: "img_alt",
          label: "Alt Text",
        },
      ],
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "btn",
      label: "Button",
      list: true,
      fields: [
        {
          type: "string",
          name: "btn_link",
          nameOverride: "btn-link",
          label: "btn-link",
        },
        {
          type: "string",
          name: "btn_label",
          nameOverride: "btn-label",
          label: "btn-label",
        },
      ],
    },
    {
      type: "object",
      name: "link",
      label: "Text Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "string",
          name: "label",
          label: "Label",
        },
      ],
    },
    {
      type: "object",
      name: "wistia_link",
      nameOverride: "wistia-link",
      label: "Wistia Link",
      list: true,
      fields: [
        {
          type: "string",
          name: "link_id",
          nameOverride: "link-id",
          label: "Link ID",
        },
        {
          type: "string",
          name: "link_label",
          nameOverride: "link-label",
          label: "Link Label",
        },
      ],
    },
  ] as TinaField[];
}
export function wistia_embedFields() {
  return [
    {
      type: "string",
      name: "component",
      label: "Component",
    },
    {
      type: "string",
      name: "component_css",
      label: "Component CSS",
    },
    {
      type: "string",
      name: "class",
      label: "Class",
    },
    {
      type: "string",
      name: "headline",
      label: "Headline",
    },
    {
      type: "string",
      name: "text",
      label: "Text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "wistia_id",
      nameOverride: "wistia-id",
      label: "Wistia ID",
    },
  ] as TinaField[];
}
