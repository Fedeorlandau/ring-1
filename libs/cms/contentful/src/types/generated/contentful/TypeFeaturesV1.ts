import * as Contentful from 'contentful';
import { TypeFeaturesV1itemFields } from './TypeFeaturesV1item';

export interface TypeFeaturesV1Fields {
  pretitle: Contentful.EntryFields.Symbol;
  title: Contentful.EntryFields.Symbol;
  subtitle: Contentful.EntryFields.Symbol;
  features: Contentful.Entry<TypeFeaturesV1itemFields>[];
}

export type TypeFeaturesV1 = Contentful.Entry<TypeFeaturesV1Fields>;
