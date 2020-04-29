import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

// automatically import all files ending in *.stories.tsx
configure(require.context('..', true, /\.stories\.tsx?$/), module);
