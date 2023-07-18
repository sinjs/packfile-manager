import { writable } from "svelte/store";
import * as settings from "./data";

export function createPackfiles() {
  const { subscribe, set, update } = writable<URL[]>(new Array<URL>());

  return {
    subscribe,
    add: async (urlstr: string) => {
      await settings.Manager.init();
      const urls = await settings.get("packfiles");
      const url = new URL(urlstr);

      update((a) => a.concat(url));
      await settings.set("packfiles", urls.concat(url));
    },
    remove: async (urlstr: string) => {
      await settings.Manager.init();
      const urls = await settings.manager.get("packfiles");
      const url = new URL(urlstr);

      update((a) => a.filter((e) => e !== url));
      await settings.manager.set(
        "packfiles",
        urls.filter((e) => e !== url)
      );
    },
    reload: async () => {
      await settings.Manager.init();
      const urls = await settings.manager.get("packfiles");
      set(urls);
    },
  };
}

export const packfiles = createPackfiles();
export const showModal = writable(false);
export * from "./stores/modal";
