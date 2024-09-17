import { groq } from 'next-sanity'
import classnames from 'classnames'
import Slider from 'react-slick';
import BlogCard from '../../components/blog-card/index'
 
export default function ManualBlogSection({otherClasses,manual}) {
  const manualBlogSectionClasses = classnames(otherClasses);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 668,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    
    ],
  };

  return (
    <section className="background" data-testid='manual-blog-section'>
      <div className="card-container">
        <Slider {...settings}>
          {manual?.map((node, index) => (
            <div key={index} >
              <BlogCard {...node} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
export const MANUAL_BLOG_SECTION_FRAGMENT = groq`
_type == "manualBlogSection"=>{
  _type, 
  identifier,
  "manual":*[_type == 'post' && manual == true]{
    "slug":slug.current,
    title,
    categories->{
      title,
    },
    author->{
      name,
    },
    publishedAt,
    readTime,
    
  } 
}`