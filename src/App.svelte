<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import Main from "./lib/components/Main.svelte";
  import ModalOuter from "./lib/components/base/ModalOuter.svelte";
  import { closeModal } from "./lib/stores";
</script>

<ModalOuter>
  <div slot="backdrop" class="backdrop" on:click={closeModal} />
  <main class="h-screen w-screen bg-zinc-800 text-zinc-50">
    <Header />

    <Main />
  </main>
</ModalOuter>
