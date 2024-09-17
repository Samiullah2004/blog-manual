export default  {
  title: 'Blog Hub Section',
  name: 'blogHubSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      subtitle: 'mainHeading',
    },
  },
}
