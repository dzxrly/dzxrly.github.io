import { defineBoot } from '#q-app/wrappers';
import { EventBus } from 'quasar';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  const bus = new EventBus<{
    'set-background-cover': (arg: boolean) => void;
  }>();
  app.provide('eventBus', bus);
});
