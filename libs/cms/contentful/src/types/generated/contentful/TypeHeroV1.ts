import * as Contentful from 'contentful';
import { TypePageFields } from './TypePage';

export interface TypeHeroV1Fields {
  title: Contentful.EntryFields.Symbol;
  logo: Contentful.Asset;
  navigation: Contentful.Entry<TypePageFields>[];
  titleFirstRow: Contentful.EntryFields.Symbol;
  titleSecondRow: Contentful.EntryFields.Symbol;
  subtitle: Contentful.EntryFields.Symbol;
  buttonPrimaryText: Contentful.EntryFields.Symbol;
  buttonPrimaryLink: Contentful.Entry<TypePageFields>;
  buttonSecondaryText: Contentful.EntryFields.Symbol;
  buttonSecondaryLink: Contentful.Entry<TypePageFields>;
  image: Contentful.Asset;
}

export type TypeHeroV1 = Contentful.Entry<TypeHeroV1Fields>;
