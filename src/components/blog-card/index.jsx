import { groq } from 'next-sanity'
import classnames from 'classnames'

export const fragment = groq`
`

export default function BlogCard({slug,title,categories,author,publishedAt,readTime}) {
 
const date = new Date(publishedAt);
 
const options = {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
};
 
const formattedDate = date.toLocaleDateString('en-US', options);
  return (
    <div className="card" data-testid='blog-card'>
     
        <span className='category'>{categories.title}</span>
        <h3 className='title'>{title}</h3>
        <div className='info'>
          <div className=''>
            <h5 className='name'>{author.name}</h5>
            <p className='date'>{formattedDate}</p>
          </div>
          <span className='readTime'>{readTime}</span>
        </div>
      
    </div>
  )
}

