# React Carousel

This is a library of reusable React carousel .
A React carousel component is a UI element that enables users to browse through a series of images or content with navigation arrows and indicators. It's flexible, customizable, and can be used in various contexts, such as image galleries or product carousels, to create engaging user interfaces.

## Installation

To install the library, you can use NPM or Yarn:

```js
npm install react-carousel-x
```

## Usage

To use the components in your project, import them from the library and use them in your React components. For example:

Import the css files to work

```js
import 'react-carousel-x/dist/index.css'
```

## Basic Example

```js
import Carousel from 'react-carousel-x'
import 'react-carousel-x/dist/index.css'

function App() {
  return (
    <div>
      <section>
        <h2>Default</h2>
        {/* {Carousel} */}
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
    </div>
  )
}
```

## Contributing

If you would like to contribute to the library, please fork the repository and submit a pull request with your changes. We appreciate your contributions!

## License

This library is released under the MIT License. See the LICENSE file for more information.
