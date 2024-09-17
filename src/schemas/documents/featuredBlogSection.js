export default   {
  title: 'Featured Blog Section',
  name: 'featuredBlogSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
