import * as Contentful from 'contentful';
import { TypeIconFields } from './TypeIcon';

export interface TypeFeaturesV1itemFields {
  title: Contentful.EntryFields.Symbol;
  subtitle: Contentful.EntryFields.Symbol;
  icon: Contentful.Entry<TypeIconFields>;
}

export type TypeFeaturesV1item = Contentful.Entry<TypeFeaturesV1itemFields>;
