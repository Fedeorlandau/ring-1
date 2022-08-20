import type { BlogPostListV1CMSType, BlogPostListV1SectionType } from './BlogPostList';
import type { FeaturesV1CMSType, FeaturesV1SectionType } from './Features';
import type { HeroV1CMSType, HeroV1SectionType } from './Hero';
import type { NavbarV1CMSType, NavbarV1sectionType } from './Navbar';
import type { ProductListV1CMSType, ProductListV1SectionType } from './ProductList';

export type Sections = Array<
  BlogPostListV1SectionType | FeaturesV1SectionType | HeroV1SectionType | NavbarV1sectionType | ProductListV1SectionType
>;

export type CMSSections = Array<
  BlogPostListV1CMSType | FeaturesV1CMSType | HeroV1CMSType | NavbarV1CMSType | ProductListV1CMSType
>;
