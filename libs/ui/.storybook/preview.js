import '!style-loader!css-loader!postcss-loader!../src/styles/global.css';

// next/image
import * as NextImage from 'next/image';
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

// parameters
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

// decorators
export const decorators = [(Story) => <Story />];
