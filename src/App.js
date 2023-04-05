import logo from "./logo.svg";

import Carousel from "./CarouselComp";
import "./index.css";
// import "react-carousel-x/dist/index.css";

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

      <section>
        <h2>No pagination</h2>
        <Carousel paginationType="none">
          <>
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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

      <section>
        <h2>No arrows</h2>
        <Carousel
          paginationType="dots"
          carousel-controls="none"
          carousel-scrollbar="auto"
          carousel-snapstop="auto"
          aria-label="Featured Items Carousel"
        >
          <>
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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

      <section>
        <h2>No scrollbar</h2>
        <Carousel paginationType="dots" aria-label="Featured Items Carousel">
          <>
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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
            <div className="gui-carousel--snap">
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

      <section>
        <h2>1 at a time</h2>
        <Carousel
          paginationType="dots"
          snapTop="always"
          aria-label="Featured Items Carousel"
        >
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

      <>
        <section className="scrollhint">
          <header>
            <h2>Scroll Hint</h2>
            <p>custom CSS</p>
          </header>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="none"
            carousel-snapstop="auto"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
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
              <div className="gui-carousel--snap">
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
              <div className="gui-carousel--snap">
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
            </div>
          </div>
        </section>
        <section className="scrollhint">
          <header>
            <h2>Scroll Start</h2>
            <p>plus scroll hint style</p>
          </header>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="auto"
            carousel-snapstop="auto"
            carousel-start={2}
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
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
              <div className="gui-carousel--snap">
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
              <div className="gui-carousel--snap">
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
            </div>
          </div>
        </section>
        <section className="fullwidth">
          <h2>Fullwidth</h2>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="auto"
            carousel-snapstop="auto"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
                <figure className="captioned-image">
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
              <div className="gui-carousel--snap">
                <figure className="captioned-image">
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
              <div className="gui-carousel--snap">
                <figure className="captioned-image">
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
            </div>
          </div>
        </section>
        <section className="constrained">
          <h2>Constrained width</h2>
          <div
            className="gui-carousel"
            carousel-pagination="gallery"
            carousel-controls="auto"
            carousel-scrollbar="auto"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/1.jpg"
                    alt="black shirt with a magical archer"
                  />
                  <figcaption>
                    <a href="#">"Archer Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/2.jpg"
                    alt="black shirt with a masked warrior riding a cat pig"
                  />
                  <figcaption>
                    <a href="#">"Warrior Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/3.jpg"
                    alt="black shirt with a hooded skateboarder and the words Shred Seattle"
                  />
                  <figcaption>
                    <a href="#">"Shred Seattle Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/4.jpg"
                    alt="black shirt with a black and white graphic of a space astronaught"
                  />
                  <figcaption>
                    <a href="#">"Astronaught Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/5.jpg"
                    alt="black shirt with a hooded and paint covered person kneeling in front of the woods"
                  />
                  <figcaption>
                    <a href="#">"In Nature Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/6.jpg"
                    alt="dark gray tank top with of a person with a dog"
                  />
                  <figcaption>
                    <a href="#">"Best Friend Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility captioned-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/7.jpg"
                    alt="black shirt with a gameboy avatar character mid jump"
                  />
                  <figcaption>
                    <a href="#">"Retro Kid Tee" by TenHun</a>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="paged-collections">
          <h2>Paged Collections</h2>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="auto"
            carousel-snapstop="always"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/1.jpg"
                    alt="black shirt with a magical archer"
                  />
                  <figcaption>
                    <h4>The Archer</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/2.jpg"
                    alt="black shirt with a masked warrior riding a cat pig"
                  />
                  <figcaption>
                    <h4>Warrior</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/3.jpg"
                    alt="black shirt with a hooded skateboarder and the words Shred Seattle"
                  />
                  <figcaption>
                    <h4>Shred Seattle</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/4.jpg"
                    alt="black shirt with a black and white graphic of a space astronaught"
                  />
                  <figcaption>
                    <h4>Astronaught</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1500}
                    height={1500}
                    src="./images/5.jpg"
                    alt="black shirt with a hooded and paint covered person kneeling in front of the woods"
                  />
                  <figcaption>
                    <h4>In Nature</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/6.jpg"
                    alt="dark gray tank top with of a person with a dog"
                  />
                  <figcaption>
                    <h4>Best Friend</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tank</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/7.jpg"
                    alt="black shirt with a gameboy avatar character mid jump"
                  />
                  <figcaption>
                    <h4>Statix Boy</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
                <figure className="product-image">
                  <img
                    loading="lazy"
                    width={1200}
                    height={1200}
                    src="./images/8.jpg"
                    alt="black shirt with a character on a bike and the text Ride Or Die"
                  />
                  <figcaption>
                    <h4>Ride or Die</h4>
                    <div>
                      by <a href="#">TenHun</a>
                    </div>
                    <small>Cotton Tee</small>
                    <div>
                      $29<sup>99</sup>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Testimonials</h2>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="none"
            carousel-snapstop="auto"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
                <figure className="animate-visibility testimonial">
                  <blockquote cite="https://www.huxley.net/bnw/four.html">
                    <p>
                      Words can be like X-rays, if you use them properly—they’ll
                      go through anything. You read and you’re pierced.
                    </p>
                  </blockquote>
                  <figcaption>
                    —Aldous Huxley, <cite>Brave New World</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility testimonial">
                  <blockquote cite="https://www.huxley.net/bnw/four.html">
                    <p>
                      Words can be like X-rays, if you use them properly—they’ll
                      go through anything. You read and you’re pierced.
                    </p>
                  </blockquote>
                  <figcaption>
                    —Aldous Huxley, <cite>Brave New World</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="gui-carousel--snap">
                <figure className="animate-visibility testimonial">
                  <blockquote cite="https://www.huxley.net/bnw/four.html">
                    <p>
                      Words can be like X-rays, if you use them properly—they’ll
                      go through anything. You read and you’re pierced.
                    </p>
                  </blockquote>
                  <figcaption>
                    —Aldous Huxley, <cite>Brave New World</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className="hubs">
          <header>
            <h2>Hubs Example</h2>
            <small>custom pagination and animation</small>
          </header>
          <div
            className="gui-carousel"
            carousel-pagination="dots"
            carousel-controls="auto"
            carousel-scrollbar="auto"
            carousel-snapstop="always"
            aria-label="Featured Items Carousel"
          >
            <div className="gui-carousel--scroller">
              <div className="gui-carousel--snap">
                <div className="win-8-example">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="gui-carousel--snap">
                <div className="win-8-example v2">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="gui-carousel--snap">
                <div className="win-8-example v3">
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
