import type { App } from "vue";
import FontAwesomePlugin from "./FontAwesome";
import GlobalComponentsPlugin from "./GlobalComponentsPlugin";
import "@/assets/style.css";

export default function(app: App){
  app.use(FontAwesomePlugin)
  app.use(GlobalComponentsPlugin)
}