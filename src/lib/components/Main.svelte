<script lang="ts">
  import {
    ModLoader,
    Packfile,
    fetchPackfileFromURL,
  } from "@packfile/packfile-ts";
  import Modpack from "./Modpack.svelte";
  import { packfiles as packfileUrls } from "../stores";
  import { get } from "svelte/store";

  $: files = <Packfile[]>[];

  async function getPackfiles() {
    try {
      await packfileUrls.reload();
      for await (const url of get(packfileUrls)) {
        files = files.concat(await fetchPackfileFromURL(url.toString()));
      }
    } catch (error) {
      console.trace(error);
      throw error;
    }
  }
</script>

<div class="p-3">
  {#await getPackfiles()}
    {#each files as file}
      <Modpack packfile={file} />
    {/each}
  {:catch e}
    Error: {e}
  {/await}
</div>
