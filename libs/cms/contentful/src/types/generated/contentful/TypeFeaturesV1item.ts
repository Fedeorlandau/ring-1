import * as Contentful from 'contentful';

export interface TypeFeaturesV1itemFields {
  title: Contentful.EntryFields.Symbol;
  subtitle: Contentful.EntryFields.Symbol;
}

export type TypeFeaturesV1item = Contentful.Entry<TypeFeaturesV1itemFields>;
