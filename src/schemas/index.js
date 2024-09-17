import { genericTwoColumnSection } from './documents/genericTwoColumnSection'
import { pages } from './documents/pages'
import { bodyPortableText } from './objects/bodyPortableText'
import { button } from './objects/button'
import { iframe } from './objects/iframe'
import { customImage } from './objects/image'
import { youtube } from './objects/youtube'

import author from './documents/author'
import category from './documents/category'
import featuredBlogSection from './documents/featuredBlogSection'
import post from './documents/post'
import blogHubSection from './documents/blogHubSection'
import manualBlogSection from './documents/manualBlogSection'
export const schemaTypes = [
  // documents
  pages,
  genericTwoColumnSection,

  // objects
  bodyPortableText,
  customImage,
  button,
  iframe,
  youtube,

 
  author,
  category,
  featuredBlogSection,
  post,
  blogHubSection,
  manualBlogSection
]
