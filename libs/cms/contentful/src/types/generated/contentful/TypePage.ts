import * as Contentful from 'contentful';
import { TypeFeaturesV1Fields } from './TypeFeaturesV1';
import { TypeHeroV1Fields } from './TypeHeroV1';
import { TypeProductListV1Fields } from './TypeProductListV1';

export interface TypePageFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  sections: Contentful.Entry<TypeFeaturesV1Fields | TypeHeroV1Fields | TypeProductListV1Fields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
