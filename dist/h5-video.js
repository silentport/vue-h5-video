!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("H5Video",[],e):"object"==typeof exports?exports.H5Video=e():t.H5Video=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=11)}([function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(9)(n,o);n.locals&&(t.exports=n.locals)},function(t,e){t.exports="data:image/png;base64,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"},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,r){"use strict";var n=r(0);r.n(n).a},function(t,e,r){var n=r(5);(t.exports=r(6)(!1)).push([t.i,'\n.video-wrapper[data-v-206bbad2] {\r\n  position: relative;\r\n  overflow: hidden;\n}\n.video-wrapper>.poster[data-v-206bbad2] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  background-repeat: no-repeat !important;\r\n  background-size: cover !important;\r\n  background-position: center !important;\n}\n.video-wrapper>.error[data-v-206bbad2] {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 0;\r\n  color: #ddd;\r\n  font-size: 12px;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  background-repeat: no-repeat !important;\r\n  background-size: cover !important;\r\n  background-position: center !important;\n}\n.loading[data-v-206bbad2]:after {\r\n  position: absolute;\r\n  content: "";\r\n  display: block;\r\n  width: 120px;\r\n  height: 120px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-image: url('+n(r(7))+');\r\n  background-size: contain;\n}\n.video-wrapper>video[data-v-206bbad2] {\r\n  width: 100%;\r\n  /* height: 100%; */\n}\n.video-wrapper>.control[data-v-206bbad2] {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: inherit;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.6);\n}\n.video-wrapper>.control>.play-icon[data-v-206bbad2],\r\n.video-wrapper>.control>.pause-icon[data-v-206bbad2] {\r\n  position: inherit;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\n}\n.video-wrapper>.title[data-v-206bbad2] {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 10px;\r\n  font-size: 15px;\r\n  text-align: left;\r\n  color: #ddd;\r\n  min-width: calc(100% - 210px);\r\n  max-width: calc(100% - 105px);\r\n  line-height: 15px;\r\n  margin-top: 0px;\r\n  z-index: 1;\n}\n.video-wrapper>.watermark[data-v-206bbad2] {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  z-index: 1;\n}\n.video-wrapper>.control>.progress[data-v-206bbad2] {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 0 5px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n  height: 40px;\r\n  color: #fff;\r\n  cursor: pointer;\n}\n.video-wrapper>.control>.progress>.progress-bar[data-v-206bbad2] {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  width: calc(100% - 260px);\r\n  margin-right: 10px;\r\n  position: relative;\n}\n.video-wrapper>.control>.progress>.progress-bar[data-v-206bbad2]:after {\r\n  background: #fff;\r\n  content: "";\r\n  display: block;\r\n  height: 5px;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\n}\n.video-wrapper>.control>.progress>.progress-bar>.has-play[data-v-206bbad2] {\r\n  height: 5px;\r\n  background: #bbb;\r\n  width: 0px;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 50%;\r\n  transform: translateY(-50%);\n}\n.video-wrapper>.control>.progress>.icon[data-v-206bbad2] {\r\n  position: relative;\r\n  width: 50px;\r\n  height: inherit;\r\n  cursor: pointer;\n}\n.video-wrapper>.control>.progress>.icon>.play-icon[data-v-206bbad2]::after {\r\n  display: block;\r\n  content: "";\r\n  width: 0px;\r\n  height: 0px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border: 10px solid transparent;\r\n  border-left: 15px solid #aaa;\n}\n.video-wrapper>.control>.progress>.icon>.pause-icon[data-v-206bbad2]::after {\r\n  display: block;\r\n  content: "";\r\n  width: 4px;\r\n  height: 15px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #aaa;\n}\n.video-wrapper>.control>.progress>.icon>.pause-icon[data-v-206bbad2]::before {\r\n  display: block;\r\n  content: "";\r\n  width: 4px;\r\n  height: 15px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-left: -10px;\r\n  transform: translate(-50%, -50%);\r\n  background: #aaa;\n}\n.video-wrapper>.control>.progress>.icon>button[data-v-206bbad2],\r\n.video-wrapper>.control>.progress>.screen-btn>button[data-v-206bbad2] {\r\n  outline: none;\r\n  border: none;\r\n  height: inherit;\r\n  width: 100%;\r\n  background: none;\r\n  cursor: pointer;\n}\n.video-wrapper>.control>.progress>.time[data-v-206bbad2] {\r\n  width: 160px;\n}\n.video-wrapper>.control>.progress>.screen-btn[data-v-206bbad2] {\r\n  width: 50px;\r\n  height: inherit;\r\n  cursor: pointer;\r\n  position: relative;\n}\n.video-wrapper>.control>.progress>.screen-btn[data-v-206bbad2]:after {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(0%, -50%);\r\n  content: "";\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-image: url('+n(r(8))+");\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: 0 0;\n}\r\n",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxcHgiICBoZWlnaHQ9IjE5MXB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtZWNsaXBzZSIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48cGF0aCBuZy1hdHRyLWQ9IiIgbmctYXR0ci1maWxsPSIjZmZmIiBzdHJva2U9Im5vbmUiIGQ9Ik0zMCA1MEEyMCAyMCAwIDAgMCA3MCA1MEEyMCAyMyAwIDAgMSAzMCA1MCIgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJyb3RhdGUoMjg2LjM4MiA1MCA1MS41KSI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGNhbGNNb2RlPSJsaW5lYXIiIHZhbHVlcz0iMCA1MCA1MS41OzM2MCA1MCA1MS41IiBrZXlUaW1lcz0iMDsxIiBkdXI9IjAuOXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L3BhdGg+PC9zdmc+"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAP4ElEQVR4Xu2defB31RzH32/ZoxFZB1GjCC2MHoyEQmkhkiVhxJAYy5TB2DMYJcvYB4N5ZHksFdlabIVilCwpkQaTLKlkp7c54+Ln6fl+77n33HvuOd/7vv/UzPd8Pp/3eX/O67nb9/s7hA87YAcWOkB7YwfswGIHDIhXhx1Y4oAB8fKwAwbEa8AO9HPAZ5B+vjlqJg4YkJk02tPs54AB6eebo2biQC9AJN0cwMsB7AbgNgD+CeAqAL8B8NcV9u5yAOcC+CKAM0iqhrlKCn2+L4CHAtgRwE1q0N1T440AbA1gcwCbAbgSwLcAPI3kL7vm7ASIpC0AnABgdwCdYrsKq2D8BQCOJHliyVol7Q/gaADblawzk7afALg3yd/G1ote5JJ2BvB1ADeITT6TcceQPLLEuUoKYBxRorYJNV0N4CEkT43REAVIc+a4BMANY5LOcMzLSb6qpHlLCpfAryhJU0FaAiS3JRnW9NIjFpDTADywLdmMPw/3IruS/HYJHki6M4DzStBSsIZLSIb75zRAJN0CwK98z9FmJU4luWfrqAwDJB0H4HEZStVeYh3Js5ZNovUMIulYAM+r3YkM+v8Rng6R/GOGWgtLSAr3iL/zvWJUF04h+eBUQM4Mlw9R5TzoXlNfZkm6F4Cl/yq6Tf91oPUyK+YMciGAbW1qlAP7kjwpauRIgyTtA+AzI6VftbR/IBleXSw8DMiwLd+DZHigMdkh6QEAvjSZgLoKX0Fy6UvTGEC+A2CXuuY9mdptSF40WXUAzUOVS6fUUFHtQS6xPgtg74omPZXUH5C821TF19aVdDaA8GLXx3IHvkxy6euLmDPIBgAH2ulWBw4n+fbWURkGSDoEwAczlKq9xAaSB6XegxiQ9mXwIwB3Ixm+tFnEIel4AA8vQky5IgxIht6Edw7h8e6k9x4bz1NS+FbrKQDWZfCg1hIGZOTOhWv9A0hePHKdXuklXRfAawE8G8B1eiVZ7SADMkJ/wxvzrwD4AID1NfwmRFL4fcQTmoct2wPYagRfakxZBiAkWx8G1OiuNQ/ngKS9mt8ahbNersOA5HLadfo7MBEcQbAB6d82R+ZwYEI4DEiOBrtGfwcmhsOA9G+dI8d2oAA4DMjYTXb+fg4UAocB6dc+R43pQEFwGJAxG+3c3R0oDA4D0r2FjhjLgQLhMCBjNdt5uzlQKBwGpFsbPXoMBwqGw4CM0XDnjHdgZDj+BiD1ayl+kx7fTo8c0oEMcITfunwuUbMBSTTQ4T0cyAEHyc9LSv3r+gakR38dkuBALjiCRAOS0CiH5ncgJxwGJH9/XTHBgdxwGJCEZjk0rwNTwGFA8vbY1Xo6IOlBzdOk1Eeum1IQHuU+PNyQb+pD34P0bJrD8jjQwBH+sOD1Rqi4FA6fQUZw3CmHc2BqOAzIcL10poEdKAEOAzJwU51uGAdKgcOADNNPZxnQgZLgMCADNtap0h0oDQ4Dkt5TZxjIgRLhMCADNddp0hwoFQ4DktZXRw/gQMlwGJABGuwU/R0YGY7wB8D3W/SGPFa136THOuVxgzqQAY5HkTwxVbQBSXXQ8Z0dqAUOX2J1bq0DUh2oCQ4Dktptx3dyoDY4DEin9npwigM1wmFAUjru2GgHaoXDgES32AP7OlAzHAakb9cdF+WApPs120SP8WOn8J5jkEe5yybjx7xRrfagrg40cHwBwA27xkaMzwKHzyARnfCQ7g6sChwGpHvvHdHiwCrBYUC83Ad1YNXgMCCDLo95J5N0XwAn137PsXEXfZM+73U9yOwlbQHgRwBuPUjC/0+S7YZ8U9oNyAgdnVtKSesBHDzCvCeFw5dYI3R0bikl3QLApSPMe3I4DMgIXZ1bSklPBPCBgeddBBwGZOCuzjGdpABHgGSooxg4DMhQLZ1xHkk/ALDDQBYUBYcBGairc04jKfysdb8BPCgODgMyQFfnnkLSqwC8NNGHIuEoCZD3ADg0weSrSN44Id6hPR2Q9EgAn+gZHsL+CeCRQ/yBhQQNC0MlXQEgvOfpe7yP5NK1zbbMkl4E4DVt45Z8fgHJ7RPiHdrTAUnXB3AOgD7+BzgeS/LjPcuPHibpOwB2SSj0apJLz7AxgOwK4MwEEW8j+ayEeIcmOCDp7gC+DaDLDlDFw9FcYh0N4IgEe3Yn+dVl8TGAhDHn9fxXKNTemeR3Eybh0EQHJD0JwLsid4IKly1PJnl8YtnRwyXdFUBYW5v1KHYRgG1JLt1rvRWQhtR7Azi9h5DjSR7QQ7xDBnZA0jYAPgQg9HLRcRKAp5D89cDlR0sn6fUAjuxR4PEkP9wWFwVIA8nTAbyzLeGaz38OYCeSv+8Q46EjOiAp9HtfAPcHsFvzjiRcx4d//E4m+ZURy4+SWlI4e4RNPvfsUGA9yUNixkcD0kASnoq8F8BNWpKH096+JH8RI8Jj7ECKA5KuDeAtAA6LyPNWAM8lGe6zWo9OgDSQBDieH55wALjTRhUuBvBGAO8gGXYp9WEHsjnQPJB4HoBHANhyTeFwnxFuxl9CMpwto4/OgKzNLOlmALZrbv4uI3ludGUPtAMjOSDpWgBuB2BrAOH/zyd5SZ9ySYD0KegYO1CTAwakpm5Za3YHDEh2y12wJgcMSE3dstbsDhiQ7Ja7YE0OGJCaumWt2R0wINktd8GaHDAgNXXLWrM7YECyW+6CNTlgQGrqlrVmd8CAZLfcBWtywIDU1C1rze6AAcluuQvW5IABqalb1prdAQOS3XIXrMkBA1JTt6w1uwMGJLvlLliTAwakpm5Za3YHDEh2y12wJgcMSE3dstbsDhiQ7Ja7YE0OGJCaumWt2R0wINktd8GaHDAgNXXLWrM7YECyW+6CNTlgQGrqlrVmd8CAZLfcBWtywIDU1C1rze6AAcluuQvW5IABqalb1prdAQOS3XIXrMkBA1JTt6w1uwO9AZF062bn27CVVdiP8OK2HUOzz84FZ+mApB0B3BTAnwFcSPJ3fY3oDIik3QG8stkIcm182KwzbB18LMnv9xXkODvQxwFJYR/4ZwAIW7DdYaMcPwZwHIA3d91UNhqQZqPENwE4vGUCYT+49wB4Jsl/9JmsY+xAFwck3bbZ6Tbsm77suBzAoSQ/GZu/CyAfAfCY2MQATgGwV+xuoh3yjjpU0lYBbgC7NJeQdwQQdus9D8A5zQalvfa7G1X4TJNLCpdSoS9hT8LY4zCSUVuaRwEi6WAA62Orrxl3DMk+m7z3KJUeIukgAO8HcIOWbE8lGbbD9jGxA5JOALB/Rxnhvnk3kt9oi2sFpNmo/QIA27Ql28Tn4XJrxxruSSSFba0/3GGOh5N8e4fxHjqwA5J2BnB2z7TnA9iB5NXL4mMAeQCAL/UUEcLeQPKIhPjRQyWFS8dwCdn12Jvk57sGefwwDkgK/0AdlpBtHcmzUgE5KmzAniDiHJLher7IQ9KjAHwUwGY9BF4Y9on34+0ezg0QIimcBbZLSPVikq9NBSQ8kTo0QcTlJLdMiB8tNOHMsVbTASTD420fmR2QdCWAGyeUfTfJp6cCsgHAgQkiQLL1Ui4lf5/YgeAIpd9HMuUfkD7yZx8jKayppfcPESZtIBkezCw8WheupJUDJPGyamMzTye5W0QzPGRABwzIgGauTSXp0QA+NmD6c0nuNGA+p4pwwIBEmNR1yMBnjv+UP43kHl21eHyaAwYkzb9rRI8ER6jzOpIvGliu07U4YEAGXCIjXFatVRdehH5vQLlOFeGAAYkwKWbIiGeOUP6zJPeJ0eExwzpgQAbwc2Q4LgOwE8nwRUYfmR0wIImGSwrvbsIj6jGO8EOch5A8fYzkztnugAFp92jhiJHPHH9q4DgjQaJDEx0wID0NlLQfgE/1/G5VW1XD0eZQps8NSA+jGzjCr8Wu3SO8LcRwtDmU8XMD0tFsw9HRsMqHG5AODTQcHcxakaEGJLKRhiPSqBUbZkAiGmo4Ikxa0SEGpKWxhmNFV37ktAzIEqNGhuMvAPYk6fcckYt1imEGZIHrGeB4GMmUP1IxxXqZXU0DsomWG47ZcbBwwgZkI2sMh+FY64ABWeOG4TAcGztgQBpHDIfh2JQDBgSA4TAcixyYPSCGw3Asc2DWgBgOw9HmwGwBMRxtS8OfBwdmCYjh8OKPdWB2gBiO2KXhcbM7g0h6KIDPjPRLwPDdKn99ZMW4ms0ZpIHjRABhl9KhD8MxtKOF5JsFIIajkNVWoYyVB8RwVLgqC5K80oAYjoJWWqVSVhYQw1HpiixM9koCYjgKW2UVy1k5QEaG428A9vIvASte8R2lrxQgYfECGOtRboBjf5Jf6Oixh1fswKoBEhbxGO85DEfFizxF+qoBkuLFoljDMYarleQ0IMsbZTgqWchjyTQgi501HGOtuoryGpBNN8twVLSIx5RqQK7pruEYc8VVltuA/H/DDEdlC3hsuQbkfw4bjrFXW4X5Dci/m2Y4Kly8OSQbEMORY51VW2PugPjMUe3SzSN8zoAYjjxrrOoqcwak5MZdAeBcAF8EsJ7kz0oWG7Q1C+nxAJ4M4IEj7R9fug2L9G0gedAy8WybmaQNAA5sGzfDz/8O4K0AXkgynPWKOyRtDeBTAHYpTlwZggxIhj6c2WzZdlWGWtElJG0D4FsAbhodNL+BBiRTz08g+YhMtVrLSAo/LQiXgtu3Dp73AAOSsf+HkFyfsd7CUpIOby7/SpBTsoZBADkFwB4lz7IQbd8luXMJWiRdAOBOJWgpXMPnSD4s9Sb9pwDuWPhES5F3S5K/nlJMc+/xkyk1VFT7bJL3SAXkMgBbVjTpKaXen+TXphQgKTzKPW1KDRXV/jHJ7VIBCc/+t6ho0lNK3Y9k+CPckx2S9gXw6ckE1FX4pyS3TQXkYgC3r2vek6ndlWR4tDrZIWlXAOHRs492B84iuS4VkE8COKC91uxH/BnAzUiG/052SNocQDjrbzaZiHoKH0PyyFRAwtvY4r9SUUBPjiN5cAE6wtdLwldhHlyCloI1CMBWJMM99sKj9asmIVLSeQDuXPBkp5Z2NYAdSJ4/tZCmX/ds3qJH9bcEzRNoOJXknm11owyUFG7SA2k+bW/a0ZeRPKrN7JyfS3oZgFfmrFlRrXAZfCuSV7ZpjgKk+VcpPD482ZBcw9KjSb6gzegpPpd0NIAjpqhdcM0/AVhH8vsxGqMBaSAJZ5JvArhLTPIVHxNexj2H5Eklz1PSPgDeDGDp48yS5zCQtnDPcWp44EQy+oulnQD5j1BJtwTwTgD3aV4ihq9+/wHALwD8caAJlZjmtwB+2Pwe5AySwfTiD0nXanq1d/MFxpsXL7q/wOsBCPMLT/PCLcElAMLL26NIXto1bS9AuhbxeDtQqwMGpNbOWXcWBwxIFptdpFYHDEitnbPuLA4YkCw2u0itDhiQWjtn3VkcMCBZbHaRWh0wILV2zrqzOPAvIZLqMrjB7oIAAAAASUVORK5CYII="},function(t,e,r){var n={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),a=null,s=0,l=[],p=r(10);function c(t,e){for(var r=0;r<t.length;r++){var o=t[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(h(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(h(o.parts[a],e));n[o.id]={id:o.id,refs:1,parts:s}}}}function d(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function A(t,e){var r=i(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),l.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,r);r.insertBefore(e,o)}}function u(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return f(e,t.attrs),A(t,e),e}function f(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function h(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var l=s++;r=a||(a=g(e)),n=b.bind(null,r,l,!1),o=b.bind(null,r,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",f(e,t.attrs),A(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=p(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),o=function(){u(r),r.href&&URL.revokeObjectURL(r.href)}):(r=g(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){u(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(t,e);return c(r,e),function(t){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}t&&c(d(t,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var w=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function b(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video-wrapper",style:{width:t.width,height:t.height}},[r("video",{ref:"video",attrs:{src:t.src,autoplay:t.autoplay,loop:t.loop,preload:t.preload},on:{ended:t.resetVideo,click:t.touch,"~canplay":function(e){return t.preparePlay(e)},error:t.errorHandler,timeupdate:t.progressHandler}},t._l(t.sources,function(t,e){return r("source",{key:e,attrs:{src:t}})})),t._v(" "),t.start||t.autoplay?t._e():r("div",{staticClass:"poster",class:{loading:t.isLoading},style:{background:"url("+t.poster+")"}}),t._v(" "),t.hasWatermark?r("img",{staticClass:"watermark",style:{width:t.watermarkWidth,"min-width":"80px","max-width":"180px"},attrs:{src:t.watermark,alt:"watermark"}}):t._e(),t._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:t.isControl,expression:"isControl"}],staticClass:"title",style:{width:t.titleWidth}},[t._v(t._s(t.title))]),t._v(" "),t.isError?r("div",{staticClass:"error"},[t._v("\n        "+t._s(t.errMsg)+"\n    ")]):t._e(),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isControl,expression:"isControl"}],staticClass:"control"},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.isPause&&!t.isLoading,expression:"isPause && !isLoading"}],staticClass:"play-icon",style:{width:t.iconWidth,"min-width":"40px"},attrs:{src:t.playIcon,alt:"play button"},on:{click:t.play}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!t.isPause,expression:"!isPause"}],staticClass:"pause-icon",style:{width:t.iconWidth,"min-width":"40px"},attrs:{src:t.pauseIcon,alt:"pause button"},on:{click:t.pause}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showControlBar&&!t.isLoading,expression:"showControlBar && !isLoading"}],staticClass:"progress"},[r("div",{staticClass:"icon"},[r("button",{directives:[{name:"show",rawName:"v-show",value:t.isPause,expression:"isPause"}],staticClass:"play-icon",on:{click:t.play}}),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.isPause,expression:"!isPause"}],staticClass:"pause-icon",on:{click:t.pause}})]),t._v(" "),r("div",{staticClass:"progress-bar",on:{touchstart:t.moveStart,touchmove:t.moveVideo,touchend:t.moveEnd,mousedown:t.moveStart,mousemove:t.moveVideo,mouseup:t.moveEnd}},[r("div",{ref:"hasPlay",staticClass:"has-play"})]),t._v(" "),r("div",{staticClass:"time"},[t._v("\n                "+t._s(t.current)+" / "+t._s(t.duration)+"\n            ")]),t._v(" "),r("div",{staticClass:"screen-btn",on:{click:t.fullScreen}},[r("button",{staticClass:"full-screen"})])])])])};n._withStripped=!0;var o={name:"h5-video",props:{src:String,poster:String,watermark:String,title:{type:String,default:()=>""},titleWidth:{type:String,default:()=>"calc(100% - 105px)"},showControlBar:{type:Boolean,default:()=>!0},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:()=>!1},loop:{type:Boolean,default:()=>!1},preload:{type:String,default:()=>"auto",validator:function(t){return"auto"===t||"mete"===t||"none"===t}},initWidth:{type:String,default:()=>"100%"},initHeight:{type:String,default:()=>"auto"},iconWidth:{type:String,default:()=>"4%"},watermarkWidth:{type:String,default:()=>"60px"},hasWatermark:{type:Boolean,default:()=>!1},playIcon:{type:String,default:()=>r(1)},pauseIcon:{type:String,default:()=>r(2)},errMsg:{type:String,default:()=>"加载失败，请检查网络！"}},data(){return{width:this.initWidth,height:this.initHeight,isPause:!0,isTouch:!1,isControl:!1,start:!1,video:null,hasPlay:null,timer:null,isLoading:!0,isError:!1,moveStarted:!0,duration:"00:00:00",current:"00:00:00"}},mounted(){this.$nextTick(function(){this.video=this.$refs.video,this.hasPlay=this.$refs.hasPlay,this.autoplay&&this.play()})},methods:{resetVideo(){this.isControl=!0,this.isPause=!0,this.start=!1,this.timer&&clearTimeout(this.timer),this.$emit("ended")},touch(){this.isControl||(this.isControl=!0,this.isPause||(this.timer=setTimeout(()=>{this.isControl=!1},3e3)))},play(){if(this.isPause){console.log(99),this.start=!0,this.video.play(),this.isPause=!1,this.isControl=!1;let t=this.video;t.parentNode.style.height=t.videoHeight*t.parentNode.clientWidth/t.videoWidth+"px",this.$emit("play")}},pause(){this.timer&&clearTimeout(this.timer),this.isPause||(this.video.pause(),this.isPause=!0,this.isControl=!0,this.$emit("pause"))},progressHandler(){this.current=this.timeFormatter(this.video.currentTime),this.hasPlay.style.width=100*this.video.currentTime/this.video.duration+"%",this.$emit("timeupdate")},preparePlay(){this.duration=this.timeFormatter(this.video.duration),setTimeout(()=>{this.isLoading=!1},400),this.autoplay||(this.isControl=!0),this.$emit("canplay")},timeFormatter(t){let e=Math.floor(t),r=parseInt(e/3600),n=parseInt(e%3600/60),o=parseInt(e%60);return(r=r<10?"0"+r:r)+":"+(n=n<10?"0"+n:n)+":"+(o=o<10?"0"+o:o)},fullScreen(){this.video.webkitRequestFullScreen()},moveVideo(t){if(this.moveStarted)return;let e=t.currentTarget.offsetWidth,r=(t.clientX||t.targetTouches[0].clientX)-t.currentTarget.offsetLeft;this.video.currentTime=this.video.duration*r/e,this.$forceUpdate()},moveStart(){this.moveStarted=!1,this.timer&&clearTimeout(this.timer)},moveEnd(){this.moveStarted=!0,this.timer=setTimeout(()=>{this.isControl=!1},3e3)},errorHandler(){setTimeout(()=>{this.$emit("error"),this.isLoading=!1,this.isError=!0},400)}}};r(3);var i=function(t,e,r,n,o,i,a,s){var l,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=r,p._compiled=!0),n&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var c=p.render;p.render=function(t,e){return l.call(e),c(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}(o,n,[],!1,null,"206bbad2",null);i.options.__file="src/Video.vue";var a=i.exports;r.d(e,"H5Video",function(){return a}),a.install=(t=>t.component(a.name,a))}])});