import { mockIPC } from "@tauri-apps/api/mocks";
(function () {
  if (
    typeof import.meta.env.DEV === "boolean" &&
    import.meta.env.DEV === true &&
    typeof window.__TAURI_IPC__ !== "function"
  ) {
    const { trace, debug, error } = console;
    function d(...params: any[]): void {
      debug("[IPC-DEBUG]", ...params);
    }

    d("tauri ipc not set, env development");
    d("settings tauri ipc");

    window.ipc = {
      postMessage(args: string) {
        throw new Error("not tauri env");
      },
    };
    mockIPC((cmd, args) => {
      d("ipc command", cmd, args);
    });
  }
})();
