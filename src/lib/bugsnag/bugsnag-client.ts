import Bugsnag, { Client } from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import { environment } from '~/environment';

let bugsnagClient: Client | undefined;

if (environment.bugsnagApiKey) {
  bugsnagClient = Bugsnag.start({
    apiKey: environment.bugsnagApiKey,
    plugins: [new BugsnagPluginReact()],
  });
} else {
  console.warn('Bugsnag API key not set');
}

export { bugsnagClient };
