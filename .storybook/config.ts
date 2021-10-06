import { configure, addParameters } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

// Redux
import { withProvider } from './withProvider';

addDecorator(withProvider);

setConsoleOptions({
  panelExclude: [],
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.tsx
configure(require.context('..', true, /\.stories\.tsx?$/), module);
