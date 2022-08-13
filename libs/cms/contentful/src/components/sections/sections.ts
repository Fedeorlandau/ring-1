import type { FeaturesV1CMSReturn } from './FeaturesV1CMS';
import type { HeroV1CMSReturn } from './HeroV1CMS';
import type { ProductListV1CMSReturn } from './ProductListV1CMS';

export type CMSSections = Array<FeaturesV1CMSReturn | HeroV1CMSReturn | ProductListV1CMSReturn>;
