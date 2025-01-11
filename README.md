# Website
<a href="https://gyang0.github.io" target="_blank">Link</a>

Just some random stuff and a collection of projects


## Notes for future me:
- When running locally, CORS might block images because they begin with `file://`. Using VS Code's Live Server extension solves this.
- An external database is specifically avoided to make things faster. I don't have much to store anyway.
- Project data is stored as JSON, and website posts are stored as markdown files.
- Any images I need go in the `images` folder, in whatever category they're best suited for. Remember to <a href="https://tinypng.com/">minify images</a>.
- Libraries used:
  - <a href="https://github.com/markedjs/marked">Marked</a> for markdown -> HTML conversion
  - <a href="https://katex.org/">KaTeX</a> for math rendering
  - <a href="https://highlightjs.org/">Highlight.js</a> for styling code blocks
  - <a href="https://www.chartjs.org/">Chart.js</a> for graphs