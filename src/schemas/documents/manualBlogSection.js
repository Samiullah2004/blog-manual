export default   {
    title: 'Manual Blog Section',
    name: 'manualBlogSection',
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
  