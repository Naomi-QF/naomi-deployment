/* eslint-disable no-undef */
/* eslint @typescript-eslint/no-var-requires: "off" */
const saveFile = require("fs").writeFileSync;
const pkgJsonPath =
  require.main.paths[1].split("node_modules")[0] + "package.json";
const json = require(pkgJsonPath);
// eslint-disable-next-line no-prototype-builtins
if (json.hasOwnProperty("homepage")) {
  json.homepage = "https://your-page.netlify.app/";
}
saveFile(pkgJsonPath, JSON.stringify(json, null, 2));