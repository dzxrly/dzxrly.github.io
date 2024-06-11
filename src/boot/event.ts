import { boot } from 'quasar/wrappers';
import { EventBus } from 'quasar';

export default boot(({ app }) => {
  // Your boot file code
  const bus = new EventBus<{
    'set-background-cover': (arg: boolean) => void;
  }>();

  app.provide('eventBus', bus);
});
