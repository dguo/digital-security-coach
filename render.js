/* Fill in the main div in index.html with pre-rendered HTML.
   This should speed up the initial load, help search engine spiders,
   and allow a non-blank experience for users with JS turned off. */

/* eslint-env node */
/* eslint-disable no-console */

import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const mainDiv = /<div id="main">.*<\/div>/;
const indexFile = './public/index.html';

const indexContent = fs.readFileSync(indexFile, 'utf-8');
if (!mainDiv.test(indexContent)) {
    console.error("Error: main div doesn't exist");
    process.exit(1);
}

const html = ReactDOMServer.renderToString(<App />);
const output = indexContent.replace(mainDiv, `<div id="main">${html}</div>`);

if (output.indexOf('data-reactroot') === -1) {
    console.error("Error: reactroot attribute isn't in output");
    process.exit(1);
}

fs.writeFileSync(indexFile, output);

console.log('Rendering complete');
