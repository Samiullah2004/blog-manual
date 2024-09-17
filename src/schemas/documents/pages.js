export const pages = {
  title: 'Pages',
  name: 'pages',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'content', title: 'Content', default: true },
    { name: 'meta', title: 'Meta' },
  ],
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
      group: 'meta',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      group: 'meta',
    },
    {
      title: 'JSON-LD',
      name: 'JSONLD',
      type: 'text',
      group: 'meta',
    },
    {
      title: 'Slug',
      description: 'Exclude leading and trailing backslashes',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
      group: 'general',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    },
    {
      title: 'Index Status',
      name: 'indexed',
      type: 'string',
      options: {
        list: [
          { title: 'Index', value: 'index' },
          { title: 'No Index & Allowed', value: 'noIndex&Allowed' },
          { title: 'No Index & Disallowed', value: 'noIndex&Disallowed' },
        ],
      },
      initialValue: 'index',
      group: 'meta',
    },
    {
      title: 'Page Builder',
      name: 'pageBuilder',
      type: 'array',
      group: 'content',
      of: [
        {
          title: 'Generic Two Column Section',
          name: 'genericTwoColumnSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{ type: 'genericTwoColumnSection' }],
        },
        {
          title: 'Blog Hub Section',
          name: 'blogHubSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{ type: 'blogHubSection' }],
        },
        {
          title: 'Featured Blog Section',
          name: 'featuredBlogSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{ type: 'featuredBlogSection' }],
        },
        {
          title: 'Manual Blog Section',
          name: 'manualBlogSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{ type: 'manualBlogSection' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'No title' }) {
      return {
        title,
      }
    },
  },
}
