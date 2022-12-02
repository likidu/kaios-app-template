<script lang="ts">
  import Router, { location, pop } from 'svelte-spa-router';

  import OnyxApp from '@/ui/components/app/OnyxApp.svelte';
  import { Onyx } from '@/ui/services';
  import { OnyxKeys } from 'onyx-keys';

  import AppMenu from '@/lib/components/AppMenu.svelte';

  import { Comment, Home, Login, NotFound, User } from '@/lib/routes';
  import { settings } from '@/lib/stores/settings';

  OnyxKeys.setOptions({
    repeatDelay: 2000,
    repeatRate: 2000,
  });

  const routes = {
    '/': Home,
    '/login': Login,
    '/user': User,
    '/comment/:id': Comment,
    '*': NotFound,
  };

  const keyMan = OnyxKeys.subscribe(
    {
      onBackspace: async () => {
        // If on the main screen, let KaiOS minimize the app
        if ($location === '/') {
          console.log('exit app');
          return;
        }

        pop();
      },
    },
    { priority: 4 },
  );

  $: Onyx.settings.update($settings);
</script>

<OnyxApp>
  <AppMenu slot="app-menu" />
  <Router {routes} />
</OnyxApp>
