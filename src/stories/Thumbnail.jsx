import React from 'react'
import Carousel from '../CarouselComp'

const Thumbnail = () => {
  return (
    <section>
      <h2>Thumbnails</h2>
      <Carousel paginationType="gallery">
        <>
          <div>
            <figure className="animate-visibility captioned-image">
              <img
                loading="lazy"
                width={1280}
                height={720}
                src="https://picsum.photos/seed/this/1280/720.webp"
                alt="Blue ocean with a large wave"
              />
              <figcaption>
                <a href="#">Learn more about large ocean waves</a>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="animate-visibility captioned-image">
              <img
                loading="lazy"
                width={1280}
                height={720}
                src="https://picsum.photos/seed/is/1280/720.webp"
                alt="Frosty orange desert sunset"
              />
              <figcaption>
                <a href="#">Learn more about warm deserts</a>
              </figcaption>
            </figure>
          </div>
          <div>
            <figure className="animate-visibility captioned-image">
              <img
                loading="lazy"
                width={1280}
                height={720}
                src="https://picsum.photos/seed/a/1280/720.webp"
                alt="African sahara with a giraffe"
              />
              <figcaption>
                <a href="#">Learn more about giraffe's</a>
              </figcaption>
            </figure>
          </div>
        </>
      </Carousel>
    </section>
  )
}

export default Thumbnail
