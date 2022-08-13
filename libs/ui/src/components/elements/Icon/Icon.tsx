import {
  BookmarkAltIcon as BookmarkAltIconOutline,
  CalendarIcon as CalendarIconOutline,
  ChartBarIcon as ChartBarIconOutline,
  CursorClickIcon as CursorClickIconOutline,
  PhoneIcon as PhoneIconOutline,
  PlayIcon as PlayIconOutline,
  RefreshIcon as RefreshIconOutline,
  ShieldCheckIcon as ShieldCheckIconOutline,
  SupportIcon as SupportIconOutline,
  ViewGridIcon as ViewGridIconOutline,
} from '@heroicons/react/outline';
import React from 'react';

const mapping = {
  BookmarkAltIconOutline,
  CalendarIconOutline,
  ChartBarIconOutline,
  CursorClickIconOutline,
  PhoneIconOutline,
  PlayIconOutline,
  RefreshIconOutline,
  ShieldCheckIconOutline,
  SupportIconOutline,
  ViewGridIconOutline,
};

export type IconProps = {
  className: string;
  name:
    | 'BookmarkAlt'
    | 'Calendar'
    | 'ChartBar'
    | 'CursorClick'
    | 'ShieldCheck'
    | 'Play'
    | 'Phone'
    | 'Refresh'
    | 'Support'
    | 'ViewGrid';
  type: 'Outline';
};

export function Icon({ name, type, ...props }: IconProps) {
  const Component = mapping[`${name}Icon${type}`];

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} />;
}
