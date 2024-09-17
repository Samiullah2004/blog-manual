import { StructureResolver } from 'sanity/desk'

export const SECTIONS = [
  {
    sectionType: 'genericTwoColumnSection',
    sectionTitle: 'Generic Two Columns Section',
  },
  {
    sectionType: 'blogHubSection',
    sectionTitle: 'Blog Hub Section',
  },
  {
    sectionType: 'featuredBlogSection',
    sectionTitle: 'Featured Blog Section',
  },
  {
    sectionType: 'manualBlogSection',
    sectionTitle: 'Manual Blog Section',
  },
]

export const structureResolver: StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Templates')
        .child(
          S.list()
            .title('Templates')
            .items([
              S.documentTypeListItem('pages').title('Pages'),
              // S.documentTypeListItem('industryPages').title('Industry Pages'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Sections')
        .child(
          S.list()
            .title('Sections')
            .items(
              SECTIONS.sort((a, b) =>
                a.sectionTitle.localeCompare(b.sectionTitle),
              ).map((section) => {
                return S.listItem()
                  .title(section.sectionTitle)
                  .child(S.documentTypeList(section.sectionType))
              }),
            ),
        ),
        S.divider(),
        S.listItem()
          .title('Posts')
          .child(
            S.list()
              .title('Posts')
              .items([
                S.documentTypeListItem('post').title('Post'),
                S.documentTypeListItem('author').title('Author'),
                S.documentTypeListItem('category').title('Category'),
              ]),
          ),
        S.divider(),
    ])
}
