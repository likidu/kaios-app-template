<script lang="ts">
  import Typography from '@/ui/components/Typography.svelte';
  import View from '@/ui/components/view/View.svelte';
  import ViewContent from '@/ui/components/view/ViewContent.svelte';

  export let params: { id: number };
</script>

<View>
  <ViewContent>
    <Typography align="center">This is comment: {params.id}</Typography>
  </ViewContent>
</View>
