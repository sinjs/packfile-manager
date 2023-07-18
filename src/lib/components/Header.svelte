<script lang="ts">
  import { pkg } from "../const";

  function addPack() {}

  import iconAdd from "../icons/add.svg";
</script>

<div class="w-full flex flex-row p-3 justify-between items-center bg-zinc-900">
  <div>
    <span class="font-bold text-2xl">PackfileManager</span>
    <span class="text-base self-end mx-2">v{pkg.version}</span>
  </div>
  <div>
    <button
      type="button"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      on:click={addPack}>Add Modpack</button
    >
    <button
      type="button"
      class="rounded-md bg-zinc-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600"
      ><picture
        ><source
          width="200"
          height="200"
          src={iconAdd}
          type="image/svg"
        /></picture
      > Settings</button
    >
  </div>
</div>
