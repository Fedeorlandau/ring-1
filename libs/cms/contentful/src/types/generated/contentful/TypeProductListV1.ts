import * as Contentful from 'contentful';

export interface TypeProductListV1Fields {
  title?: Contentful.EntryFields.Symbol;
}

export type TypeProductListV1 = Contentful.Entry<TypeProductListV1Fields>;
