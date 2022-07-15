import * as React from "react";
import { useEffect } from "react";
import '../../node_modules/reveal.js/dist/reveal.css'
import '../../node_modules/reveal.js/dist/theme/black.css'
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const ShowcasePage = () => {
  useEffect(() => {
    let deck = new Reveal(document.querySelector(".deck"), {
      embedded: true,
      plugins: [Markdown]
    });
    deck.initialize();
  }, []);

  return (
    <div className="reveal deck" style={{height: '100vh'}}>
      <div className="slides">
        <section data-markdown='/showcase.md'>
        </section>
      </div>
    </div>
  );
};

export default ShowcasePage;
