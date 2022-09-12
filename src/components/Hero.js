import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Hero() {
  return (
    <>
      <div class="px-4 py-5 text-center text-black bg-dark bg-opacity-25 rounded-5">
        <StaticImage class="" src="../images/trident.png" />
        <h1 class="display-1 fw-bold">YourSEA</h1>
        <h2 class="display-5 fw-bold text-white">Find better spots</h2>
        <div class="col-lg-6 mx-auto text-white">
          <p class="lead mb-4">
            Next generation water quality index built upon satellite and ground
            data.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/it/survey" type="button" class="btn btn-dark btn-lg px-4 gap-3">
                Sondaggio
            </Link>
            <Link to="/ro/survey" type="button" class="btn btn-dark btn-lg px-4 gap-3">
                Sondaj
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
