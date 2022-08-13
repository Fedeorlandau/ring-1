import type { States } from 'src/types';

export type StateParser = {
  value: string;
  state?: States;
};
export function stateParser({ value, state }: StateParser) {
  switch (state) {
    case 'hover':
      return `hover:${value}`;

    default:
      return value;
  }
}
