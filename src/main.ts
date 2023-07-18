import "./lib/fonts/inter";
import "./styles.css";
import "./lib/ipc";
import App from "./App.svelte";
import { manager } from "./lib/data";

const app = new App({
  target: document.getElementById("app"),
});

setInterval(async () => {
  let n = Date.now;
  let t = n();
  console.debug(`[sync-loop] sync settings`);
  await manager.syncCache().then(() => {
    console.debug(`[sync-loop] finish sync settings in ms ${n() - t}`);
  });
}, 60000);

export default app;
