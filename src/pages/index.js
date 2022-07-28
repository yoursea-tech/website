import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div class="body-wrap">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand header-brand">
              <StaticImage
                class="header-logo-image"
                src="../images/yoursea-icon.svg"
                alt="Logo"
              />
              <h1 class="m-0">YourSEA</h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h2 class="hero-title mt-0">Find better spots</h2>
                <p class="hero-paragraph">
                  We are building next generation services to help you choose
                  the best sea spot wherever you go.
                </p>
                <div class="hero-cta">
                  <Link class="button button-primary" to="/survey">
                    Take our survey
                  </Link>
                  <Link class="button" to="/showcase">
                    View our presentation
                  </Link>
                </div>
              </div>
              <div class="hero-figure anime-element">
                <svg
                  class="placeholder"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                    style={{ fill: "transparent" }}
                  />
                </svg>
                <div
                  class="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                ></div>
                <div class="hero-figure-box hero-figure-box-05"></div>
                <div class="hero-figure-box hero-figure-box-06"></div>
                <div class="hero-figure-box hero-figure-box-07"></div>
                <div
                  class="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div className="features-title">
                <h2>Meet the team</h2>
              </div>
              <div class="features-wrap">
                <div
                  class="feature text-center is-revealing"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <StaticImage
                        src="../images/martina.jpg"
                        alt="Feature 03"
                      />
                    </div>
                    <h4 class="feature-title mt-24">Martina FREZZA</h4>
                    <p class="text-sm mb-0">
                      An Environmental engineer, passionate about finding a more
                      sustainable world. Focused on data research and analyst,
                      believes that satellite data can be helpful in changing
                      the world
                    </p>
                  </div>
                </div>
                <div
                  class="feature text-center is-revealing"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <StaticImage src="../images/dumi.jpg" alt="Feature 04" />
                    </div>
                    <h4 class="feature-title mt-24">Dumitrița TIUTION</h4>
                    <p class="text-sm mb-0">
                    No more, no less than a geodetic and geological engineer with land surveying and remote sensing background that identifies: who, what, when and how much does our clients and partners need
                    </p>
                  </div>
                </div>
                <div
                  class="feature text-center is-revealing"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <StaticImage src="../images/cata.jpg" alt="Feature 01" />
                    </div>
                    <h4 class="feature-title mt-24">Catalin SABOU</h4>
                    <p class="text-sm mb-0">
                      A satellite data analyst, passionate about the "eyes in
                      the sky", with the help of which we can see, analyze and
                      understand much better the environment in which we live.
                      Focused on data acquisition, processing and
                      interpretation, offering reliable results and solutions.
                    </p>
                  </div>
                </div>
                <div
                  class="feature text-center is-revealing"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <StaticImage
                        src="../images/marco.jpeg"
                        alt="Feature 02"
                      />
                    </div>
                    <h4
                      class="feature-title mt-24"
                      data-sal="zoom-out"
                      data-sal-delay="100"
                      data-sal-duration="500"
                      data-sal-easing="ease"
                    >
                      Marco BISEGNA
                    </h4>
                    <p class="text-sm mb-0">
                      A business developer who aims to promote a virtuous
                      approach to the surrounding world through satellite
                      technologies. Centered on business development and
                      sustainability with a focus on the circular economy
                      systems.
                    </p>
                  </div>
                </div>
                <div
                  class="feature text-center is-revealing"
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="500"
                  data-sal-easing="ease"
                >
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <StaticImage
                        src="../images/flavio.jpeg"
                        alt="Feature 05"
                      />
                    </div>
                    <h4 class="feature-title mt-24">Flavio CORDARI</h4>
                    <p class="text-sm mb-0">
                      A Computer engineer and reasercher willing to understand
                      the world a little more. Mainly into software development,
                      cybersecurity, mathematics/physics, electronics and other
                      geeky stuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section class="pricing section">
          <div class="container-sm">
            <div class="pricing-inner section-inner">
              <div class="pricing-header text-center">
                <h2 class="section-title mt-0">Unlimited for all</h2>
                <p class="section-paragraph mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut ad quis nostrud.
                </p>
              </div>
              <div class="pricing-tables-wrap">
                <div class="pricing-table">
                  <div class="pricing-table-inner is-revealing">
                    <div class="pricing-table-main">
                      <div class="pricing-table-header pb-24">
                        <div class="pricing-table-price">
                          <span class="pricing-table-price-currency h2">$</span>
                          <span class="pricing-table-price-amount h1">49</span>
                          <span class="text-xs">/month</span>
                        </div>
                      </div>
                      <div class="pricing-table-features-title text-xs pt-24 pb-24">
                        What you will get
                      </div>
                      <ul class="pricing-table-features list-reset text-xs">
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                        <li>
                          <span>Lorem ipsum dolor sit nisi</span>
                        </li>
                      </ul>
                    </div>
                    <div class="pricing-table-cta mb-8">
                      <a
                        class="button button-primary button-shadow button-block"
                        href="#"
                      >
                        Pre order now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="cta section">
          <div class="container">
            <div class="cta-inner section-inner">
              <h3 class="section-title mt-0">Still not convinced on buying?</h3>
              <div class="cta-cta">
                <a class="button button-primary button-wide-mobile" href="#">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <footer class="site-footer">
        <div class="container">
          <div class="site-footer-inner">
            <div class="brand footer-brand">
              {/* <StaticImage
                class="header-logo-image"
                src="../images/yoursea-icon.svg"
                alt="Logo"
              /> */}
            </div>
            <ul class="footer-links list-reset">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <ul class="footer-social-links list-reset">
              <li>
                <a href="#">
                  <span class="screen-reader-text">Facebook</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="screen-reader-text">Twitter</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="screen-reader-text">Google</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div class="footer-copyright">
              &copy; 2022 YourSEA, all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
