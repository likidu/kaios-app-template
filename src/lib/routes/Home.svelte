<script lang="ts">
  import View from '@/ui/components/view/View.svelte';
  import ViewContent from '@/ui/components/view/ViewContent.svelte';
  import Typography from '@/ui/components/Typography.svelte';

  import svelteLogo from '@/assets/svelte.svg';
</script>

<View>
  <ViewContent>
    <Typography align="center">Home</Typography>
    <div>
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </div>
    <h1 class="text-slate-500">Vite + Svelte</h1>
  </ViewContent>
</View>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
</style>
