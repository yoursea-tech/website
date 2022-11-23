import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation()

  return (
    <>
      <div className="px-4 py-5 text-center text-black bg-dark bg-opacity-25 rounded-5">
        <StaticImage className="" src="../images/trident.png" alt="logo"/>
        <h1 className="display-1 fw-bold">YourSEA</h1>
        <h2 className="display-5 fw-bold text-white">{t("motto")}</h2>
        <Link to='mvp' ><button className="btn btn-primary">MVP</button></Link>
      </div>
    </>
  );
}
