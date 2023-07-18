import * as ts from "tauri-settings";
import { getDotNotation } from "tauri-settings/dist/utils/dot-notation";
import type { Path } from "tauri-settings/dist/types/dot-notation";

interface Schema {
  packfiles: URL[];
}

export const manager = new ts.SettingsManager<Schema>(
  {
    packfiles: [],
  },
  { prettify: true }
);

export const set = manager.set;
export const get = manager.get;
export const sync = manager.syncCache;

export class Manager {
  initialized = false;

  private constructor() {}
  async initialize() {
    if (this.initialized === false) {
      await manager.initialize().then(async (s) => {
        await manager.syncCache();
      });
      this.initialized = true;
    }
  }

  private static _instance = new Manager();
  static async init() {
    await this._instance.initialize();
  }
}

// Utility functions
export async function addPackfile(url: string) {
  const packfiles = await get("packfiles");
  return await set("packfiles", packfiles.concat(new URL(url)));
}

export async function removePackfile(url: string) {
  const packfiles = await get("packfiles");
  const cmp_url = new URL(url);

  return await set(
    "packfiles",
    packfiles.filter((u) => u.toString() !== cmp_url.toString())
  );
}
