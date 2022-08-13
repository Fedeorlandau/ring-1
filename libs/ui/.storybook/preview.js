import 'src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Ring', 'Pages', 'Sections', 'Modules', 'Elements', 'Foundation'],
    },
  },
};

export const decorators = [(Story) => <Story />];
