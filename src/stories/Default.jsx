import React from 'react'
import PropTypes from 'prop-types'
import './button.css'
import Carousel from '../CarouselComp'
import '../index.css'

/**
 * Primary UI component for user interaction
 */
export const Default = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <section>
      <h2>Default</h2>
      <Carousel>
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
      </Carousel>
    </section>
  )
}

Default.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

Default.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
}
