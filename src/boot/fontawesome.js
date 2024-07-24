// src/boot/fontawesome.js

import { boot } from "quasar/wrappers";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import { fas } from "@fortawesome/fontawesome-free/js/all.js";
import { fab } from "@fortawesome/fontawesome-free/js/all.js"; // Add this line
import { Quasar } from "quasar";

export default boot(({ app }) => {
  Quasar.iconSet.set("fontawesome-v5", { ...fas, ...fab }); // Add fab icons
});
