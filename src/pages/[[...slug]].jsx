import { groq } from 'next-sanity'

import ModuleRenderer, {
  fragment as MODULE_FRAGMENT,
} from '../components/module-renderer'
import { readToken } from '../lib/sanity.api'
import { getClient } from '../lib/sanity.client'

export const getPageQuery = (slug) => groq`
  *[_type == "pages" && slug.current == '${slug}'] {
  _type,
  _id,
  indexed,
  seoTitle,
  metaDescription,
  transparentNav,
  title,
  JSONLD,
 "slug": slug.current,
 pageBuilder[]->{
    ${MODULE_FRAGMENT}
}
  }
`
function Page(props) {
  const {
    page: { pageBuilder },
  } = props
  return (
    <>
      <ModuleRenderer modules={pageBuilder} />
    </>
  )
}

export async function getStaticPaths() {
  const client = getClient()
  const allSlugs = await client.fetch(
    groq`
      *[_type == "pages"] {    
        "title": title,
        "slug": slug.current
      }
    `,
  )

  return {
    paths:
      allSlugs?.map(({ slug }) => (slug !== '/' ? `/${slug}` : `${slug}`)) ||
      [],
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ draftMode = false, params }) => {
  try {
    let slug = '/'
    if (Object.keys(params || {}).length) {
      const { slug: currentSlug } = params
      slug = currentSlug?.join('/')
    }

    const client = getClient(draftMode ? readToken : undefined)
    if (!slug) throw new Error('No slug provided')
    const pageQuery = getPageQuery(slug)

    const pageData = await client.fetch(pageQuery)
    if (pageData?.length === 0) {
      return {
        notFound: true,
        props: {},
      }
    }
    const props = {
      draftMode,
      token: draftMode ? readToken : '',
      page: pageData[0],
      JSONLD: pageData[0]?.JSONLD || '',
      slug,
    }
    return {
      props,
      revalidate: 10,
    }
  } catch (error) {
    throw new Error(error)
  }
}

export default Page
