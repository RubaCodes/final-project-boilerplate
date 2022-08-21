//richiedi bootstrap
window.Vue = require("vue");
//importa il componente App ,speciale , in una cartella a parte, il resto e' su components
import App from "./views/App";
//import del file routes.js
import router from "./routes.js";
//mount e render dell'app di vue
const app = new Vue({
    el: "#root",
    render: (h) => h(App),
    router,
});
