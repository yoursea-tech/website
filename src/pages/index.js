import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import BGVideo from "../assets/video.webm";
import Hero from "../components/Hero";
import Team from "../components/Team";

const IndexPage = () => {
  return (
    <div style={{fontFamily: "'Source Sans Pro', sans-serif"}}>
      <header class="vh-100 position-relative overflow-hidden">
        <video
          autoplay="true"
          muted="true"
          loop="true"
          src={BGVideo}
          class="position-absolute top-50 start-50 translate-middle"
        ></video>
        <div class="position-absolute top-50 start-50 translate-middle">
          <Hero />
        </div>
      </header>

      <main>
        <section>
          <Team />
        </section>
      </main>

      <footer>
        <div class="container">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">2022, YourSEA</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
