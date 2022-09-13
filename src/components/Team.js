import React from "react";
import TeamItem from "./TeamItem";
import { StaticImage } from "gatsby-plugin-image";

export default function Team() {
  return (
    <>
      <div class="container px-4 py-5" id="featured-3">
        <h1 class="text-center">Meet the team</h1>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <TeamItem name="Dumitrița TIUTION" description="No more, no less than a geodetic and geological engineer with land surveying and remote sensing background that identifies: who, what, when and how much does our clients and partners need">
            <StaticImage src="../images/dumi.jpg"/>
          </TeamItem>
          <TeamItem name="Marco BISEGNA" description="A business developer who aims to promote a virtuous approach to the surrounding world through satellite technologies. Centered on business development and sustainability with a focus on the circular economy systems.">
            <StaticImage src="../images/marco.jpeg" />
          </TeamItem>
          <TeamItem name="Catalin SABOU" description="A satellite data analyst, passionate about the 'eyes in the sky', with the help of which we can see, analyze and understand much better the environment in which we live. Focused on data acquisition, processing and interpretation, offering reliable results and solutions.">
            <StaticImage src="../images/cata.jpg"/>
          </TeamItem>
          <TeamItem name="Flavio CORDARI" description="A Computer engineer and reasercher willing to understand the world a little more. Mainly into software development, cybersecurity, mathematics/physics, electronics and other geeky stuff.">
            <StaticImage src="../images/flavio.jpeg"/>
          </TeamItem>
        </div>
      </div>
    </>
  );
}
