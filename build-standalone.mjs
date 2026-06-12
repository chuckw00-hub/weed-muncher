#!/usr/bin/env node
/* Builds standalone.html — a single portable file that opens via file://
   Run after any change to index.html, style.css, or game.js:
     node build-standalone.mjs */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const read = (f) => readFileSync(join(root, f), 'utf8');

const html = read('index.html')
  .replace(/[ \t]*<link rel="stylesheet"[^>]*\/>/, `  <style>\n${read('style.css').trim()}\n  </style>`)
  .replace(/[ \t]*<script src="\.\/game\.js"><\/script>/, `  <script>\n${read('game.js').trim()}\n  </script>`);

if (html.includes('href="./style.css"') || html.includes('src="./game.js"')) {
  throw new Error('Inlining failed — template markers not found.');
}

writeFileSync(join(root, 'standalone.html'), html);
console.log(`standalone.html written (${(html.length / 1024).toFixed(1)} KB)`);
