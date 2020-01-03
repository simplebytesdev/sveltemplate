const Purgecss = require("purgecss");
const PurgeSvelte = require("purgecss-from-svelte");

const options = {
  content: ["./src/**/*.svelte"],
  extractors: [
    {
      extractor: PurgeSvelte,
      extensions: ["svelte"]
    }
  ]
};

module.exports = {
  plugins: [require("@fullhuman/postcss-purgecss")(options)],
}
