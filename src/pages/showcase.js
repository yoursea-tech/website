import * as React from "react";
import { useEffect } from "react";
import '../../node_modules/reveal.js/dist/reveal.css'
import '../../node_modules/reveal.js/dist/theme/black.css'


const ShowcasePage = () => {
  useEffect(() => {
    import(/* webpackChunkName: "Reveal" */ '../../node_modules/reveal.js/dist/reveal').then( module1 => {
      const Reveal = module1.default
      import(/* webpackChunkName: "Markdown" */ '../../node_modules/reveal.js/plugin/markdown/markdown.esm').then(module2 => {
        const Markdown = module2.default
        let deck = new Reveal(document.querySelector(".deck"), {
          embedded: true,
          plugins: [Markdown]
        });
        deck.initialize();
      })
    })
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
