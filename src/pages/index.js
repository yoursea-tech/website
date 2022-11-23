import * as React from "react";
import BGVideo from "../assets/video.webm";
import PrevImg from "../images/prev-video.png";
import Hero from "../components/Hero";
import Team from "../components/Team";
import "../i18n";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { t } from "i18next";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const langs = [
  {
    lng: "en",
    flag: "usa",
  },
  {
    lng: "it",
    flag: "ita",
  },
  {
    lng: "ro",
    flag: "rou",
  },
];

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <header className="vh-100 position-relative overflow-hidden">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          src={BGVideo}
          className="position-absolute top-50 start-50 translate-middle"
          poster={PrevImg}
        ></video>
        <div className="position-absolute top-50 start-50 translate-middle w-75">
          <Hero />
        </div>
        <div className="position-absolute end-0 top-0">
          <ul className="m-2 list-group list-group-horizontal">
            {langs.map((e) => (
              <li
                className={
                  "list-group-item border-0 rounded-pill " +
                  (i18n.resolvedLanguage === e.lng
                    ? "bg-secondary"
                    : "bg-transparent")
                }
                onClick={() => i18n.changeLanguage(e.lng)}
                disabled={i18n.resolvedLanguage === e.lng}
              >
                <Flag code={e.flag} height="16" />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <main>
        <section>
          <Team />
        </section>
        <section id='help_us'>
          <div className="container px-4 py-5" id="featured-3">
            <h1 className="text-center">{t("help.title")}</h1>

            <p className="text-center">{t("help.description")} </p>
            <div  className="row g-4 py-5 justify-content-center">
              <div className="col-9 col-lg-6">
              <Link to='/survey'>
                <StaticImage src="../images/qrcode.png"/>
              </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          {/* <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul> */}
          <p className="text-center text-muted">2022, YourSEA</p>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
