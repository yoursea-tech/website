import * as React from "react";
import { useEffect, useRef } from "react";
import '../../node_modules/reveal.js/dist/reveal.css'
import '../../node_modules/reveal.js/dist/theme/sky.css'


const PresentationPage = () => {
  const deckEl = useRef(null)
  useEffect(() => {
    import(/* webpackChunkName: "Reveal" */ 'reveal.js').then( module1 => {
      const Reveal = module1.default
      import(/* webpackChunkName: "Markdown" */ 'reveal.js/plugin/markdown/markdown.esm').then(module2 => {
        const Markdown = module2.default
        let deck = new Reveal(document.querySelector(".deck"), {
          embedded: true,
          plugins: [Markdown]
        });
        deckEl.current.style = 'height: ' + window.innerHeight + 'px'
        deck.initialize();
        deck.configure({
          backgroundTransition: 'convex'
        })
      })
    })
  }, []);

  return (
    <div className="reveal deck"  ref={deckEl}>
      <div className="slides">
        <section data-markdown='/showcase.md' data-transition="convex">
        </section>
      </div>
    </div>
  );
};

export default PresentationPage;
