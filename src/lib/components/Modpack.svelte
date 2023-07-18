<script lang="ts">
  import type { Packfile } from "@packfile/packfile-ts";
  export const packfile: Packfile = undefined;
</script>

<div class="w-full rounded-md bg-zinc-700 p-3 flex">
  <p><span class="font-bold">{packfile.meta.name}</span></p>
  <p>{packfile.meta.description}</p>
</div>
