import React from "react";
import TeamItem from "./TeamItem";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";

export default function Team() {
  const { t } = useTranslation()

  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h1 className="text-center">Team</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <TeamItem name="Dumitrița TIUTION" description={t('dumi_desc')}>
            <StaticImage src="../images/dumi.jpg" alt="dumi"/>
          </TeamItem>
          <TeamItem name="Marco BISEGNA" description={t('marco_desc')}>
            <StaticImage src="../images/marco.jpeg" alt="marco"/>
          </TeamItem>
          <TeamItem name="Catalin SABOU" description={t('cata_desc')}>
            <StaticImage src="../images/cata.jpg" alt="cata"/>
          </TeamItem>
          <TeamItem name="Flavio CORDARI" description={t('flavio_desc')}>
            <StaticImage src="../images/flavio.jpeg" alt="flavio"/>
          </TeamItem>
        </div>
      </div>
    </>
  );
}
