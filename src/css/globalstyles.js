import { injectGlobal } from 'styled-components'

import haymakerFontEot from './fonts/haymaker-webfont.eot'
import haymakerFontEotIefix from './fonts/haymaker-webfont.eot?#iefix'
import haymakerFontTtf from './fonts/haymaker-webfont.ttf'
import haymakerFontWoff from './fonts/haymaker-webfont.ttf'
import haymakerFontSvg from './fonts/haymaker-webfont.svg'
import blanchFontEot from './fonts/blanch_caps_inline-webfont.eot'
import blanchFontEotIefix from './fonts/blanch_caps_inline-webfont.eot?#iefix'
import blanchFontTtf from './fonts/blanch_caps_inline-webfont.ttf'
import blanchFontWoff from './fonts/blanch_caps_inline-webfont.ttf'
import blanchFontSvg from './fonts/blanch_caps_inline-webfont.svg?#blanchcaps_inline'

injectGlobal`

@font-face {
  font-family: "haymakerregular";
  src: url(${haymakerFontEot});
  src: url(${haymakerFontEotIefix}) format('embedded-opentype'),
       url(${haymakerFontWoff}) format('woff'),
       url(${haymakerFontTtf}) format('truetype'),
       url(${haymakerFontSvg}) format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'blanchcaps_inline';
  src: url(${blanchFontEot});
  src: url(${blanchFontEotIefix}) format('embedded-opentype'),
       url(${blanchFontWoff}) format('woff'),
       url(${blanchFontTtf}) format('truetype'),
       url(${blanchFontSvg}) format('svg');
  font-weight: normal;
  font-style: normal;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden] {
  display: none;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}
a:focus {
  outline: thin dotted;
}
a:active,
a:hover {
  outline: 0;
}
h1 {
  font-size: 2em;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: 700;
}
dfn {
  font-style: italic;
}
mark {
  background: #ff0;
  color: #000;
}
code,
kbd,
pre,
samp {
  font-family: monospace, serif;
  font-size: 1em;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
q {
  quotes: 2 1C 2 1D 2 18 2 19;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
}
button,
input {
  line-height: normal;
}
button,
html input[type=button],
input[type=reset],
input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
input[disabled] {
  cursor: default;
}
input[type=checkbox],
input[type=radio] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0;
}
input[type=search] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
input[type=search]::-webkit-search-cancel-button,
input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}
textarea {
  overflow: auto;
  vertical-align: top;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body,
figure {
  margin: 0;
}
legend,
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  background: #d4d4d4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', 'Calibri', sans-serif;
  font-size: 2rem;
}
h1 {
  font-family: 'blanchcaps_inline', sans-serif;
  text-align: center;
  font-weight: normal;
  margin: 0;
}
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-family: 'haymakerregular', sans-serif;
}
h2 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
}
h3 {
  font-size: 3rem;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
button,
input[type=submit] {
  text-transform: uppercase;
  background: none;
  border: 1px solid #000;
  font-weight: 600;
  font-size: 1.5rem;
  font-family: 'Open Sans', 'Calibri', sans-serif;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  position: relative;
  z-index: 2;
}
button[disabled],
input[type=submit][disabled] {
  color: #d12028;
  background: #fff;
  border-color: #d12028;
  -webkit-transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
          transform: rotate(-10deg) scale(2) translateX(50%) translateY(-50%);
}
button[disabled]:hover,
input[type=submit][disabled]:hover {
  color: #d12028;
  cursor: not-allowed;
}
button[disabled]:after,
input[type=submit][disabled]:after {
  display: none;
}
button:after,
input[type=submit]:after {
  content: '';
  z-index: -1;
  display: block;
  background: #000;
  position: absolute;
  width: 100%;
  height: 0;
  left: 0;
  top: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
button:hover,
input[type=submit]:hover,
button:focus,
input[type=submit]:focus {
  color: #fff;
  outline: 0;
}
button:hover:after,
input[type=submit]:hover:after,
button:focus:after,
input[type=submit]:focus:after {
  height: 100%;
}
`
