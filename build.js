const esbuild = require("esbuild");

const BANNER = `// ==UserScript==
// @name BC Long Crafts
// @namespace https://www.bondageprojects.com/
// @version 1.0.0
// @description Long Craft Descriptions for BC
// @author 
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @match http://localhost:*/*
// @grant none
// @run-at document-end
// ==/UserScript==

`;

esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  sourcemap: true,
  minify: true,
  banner: {
    js: BANNER,
  },
  outfile: 'out/longcraft.user.js',
})
