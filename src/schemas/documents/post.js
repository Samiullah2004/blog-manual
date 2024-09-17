export default  {
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'content', title: 'Content' },
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
      title: 'JSON-LD',
      name: 'JSONLD',
      type: 'text',
      group: 'meta',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      group: 'meta',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
      initialValue: false,
      group: 'general',
    },

    {
      title: 'Manual',
      name: 'manual',
      type: 'boolean',
      initialValue: false,
      group: 'general',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'general',
      validation: (Rule) => Rule.required(),
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      group: 'content',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'reference',
      to: { type: 'category' },
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
      group: 'content',
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}
