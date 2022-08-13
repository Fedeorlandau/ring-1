export interface BlogPostV1Storyblok {
  title?: string;
  body?: any;
  _uid: string;
  component: 'BlogPostV1';
  [k: string]: any;
}

export interface CardsV1Storyblok {
  cards: CardsV1CardStoryblok[];
  _uid: string;
  component: 'CardsV1';
  [k: string]: any;
}

export interface CardsV1CardStoryblok {
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  image: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: 'CardsV1-Card';
  [k: string]: any;
}

export interface CarouselV1Storyblok {
  images?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  }[];
  _uid: string;
  component: 'CarouselV1';
  [k: string]: any;
}

export interface ContentPageStoryblok {
  layout?: string;
  sections?: (
    | BlogPostV1Storyblok
    | CardsV1Storyblok
    | CarouselV1Storyblok
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeaderV2Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | ProductDetailV3Storyblok
    | ProductListV1Storyblok
    | VideoV1Storyblok
  )[];
  metaTitle?: string;
  metaDescription?: string;
  _uid: string;
  component: 'ContentPage';
  [k: string]: any;
}

export interface DefaultLayoutStoryblok {
  header?: (
    | BlogPostV1Storyblok
    | CardsV1Storyblok
    | CarouselV1Storyblok
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeaderV2Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | ProductDetailV3Storyblok
    | ProductListV1Storyblok
    | VideoV1Storyblok
  )[];
  footer?: (
    | BlogPostV1Storyblok
    | CardsV1Storyblok
    | CarouselV1Storyblok
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeaderV2Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | ProductDetailV3Storyblok
    | ProductListV1Storyblok
    | VideoV1Storyblok
  )[];
  _uid: string;
  component: 'DefaultLayout';
  [k: string]: any;
}

export interface FeaturesV1Storyblok {
  pretitle: string;
  title: string;
  subtitle: string;
  features: FeaturesV1FeatureStoryblok[];
  _uid: string;
  component: 'FeaturesV1';
  [k: string]: any;
}

export interface FeaturesV1FeatureStoryblok {
  title: string;
  subtitle: string;
  _uid: string;
  component: 'FeaturesV1-Feature';
  [k: string]: any;
}

export interface FooterV1Storyblok {
  _uid: string;
  component: 'FooterV1';
  [k: string]: any;
}

export interface GlobalStoryblok {
  header?: (
    | BlogPostV1Storyblok
    | CardsV1Storyblok
    | CarouselV1Storyblok
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeaderV2Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | ProductDetailV3Storyblok
    | ProductListV1Storyblok
    | VideoV1Storyblok
  )[];
  footer?: (
    | BlogPostV1Storyblok
    | CardsV1Storyblok
    | CarouselV1Storyblok
    | FeaturesV1Storyblok
    | FooterV1Storyblok
    | HeaderV1Storyblok
    | HeaderV2Storyblok
    | HeroV1Storyblok
    | HeroV2Storyblok
    | ProductDetailV3Storyblok
    | ProductListV1Storyblok
    | VideoV1Storyblok
  )[];
  _uid: string;
  component: 'Global';
  [k: string]: any;
}

export interface GlobalConfigStoryblok {
  metaTitle: string;
  metaDescription: string;
  metaOpenGraphImage?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  favicon?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  revalidate: number;
  _uid: string;
  component: 'GlobalConfig';
  [k: string]: any;
}

export interface HeaderV1Storyblok {
  title: string;
  logo: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  navigation: HeaderV1NavigationItemLevelOneStoryblok[];
  primaryButtonLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  primaryButtonTitle: string;
  secondaryButtonLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  secondaryButtonTitle: string;
  _uid: string;
  component: 'HeaderV1';
  [k: string]: any;
}

export interface HeaderV1NavigationItemLevelOneStoryblok {
  title: string;
  link:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  items?: any[];
  _uid: string;
  component: 'HeaderV1-NavigationItemLevelOne';
  [k: string]: any;
}

export interface HeaderV1NavigationItemLevelTwoStoryblok {
  title: string;
  link:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  _uid: string;
  component: 'HeaderV1-NavigationItemLevelTwo';
  [k: string]: any;
}

export interface HeaderV2Storyblok {
  title?: string;
  navigation?: HeaderV2NavigationItemStoryblok[];
  _uid: string;
  component: 'HeaderV2';
  [k: string]: any;
}

export interface HeaderV2NavigationItemStoryblok {
  title: string;
  link?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  items?: HeaderV2NavigationItemStoryblok[];
  _uid: string;
  component: 'HeaderV2-NavigationItem';
  [k: string]: any;
}

export interface HeroV1Storyblok {
  title: string;
  logo: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  navigation?: HeroV1NavigationItemStoryblok[];
  titleFirstRow: string;
  titleSecondRow: string;
  subtitle: string;
  buttonPrimaryText?: string;
  buttonPrimaryLink?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  buttonSecondaryText?: string;
  buttonSecondaryLink?:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  image: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: 'HeroV1';
  [k: string]: any;
}

export interface HeroV1NavigationItemStoryblok {
  title: string;
  link:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  _uid: string;
  component: 'HeroV1-NavigationItem';
  [k: string]: any;
}

export interface HeroV2Storyblok {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink:
    | {
        cached_url?: string;
        linktype?: string;
        [k: string]: any;
      }
    | {
        id?: string;
        cached_url?: string;
        linktype?: 'story';
        [k: string]: any;
      }
    | {
        url?: string;
        cached_url?: string;
        linktype?: 'asset' | 'url';
        [k: string]: any;
      }
    | {
        email?: string;
        linktype?: 'email';
        [k: string]: any;
      };
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: 'HeroV2';
  [k: string]: any;
}

export interface ProductDetailV3Storyblok {
  _uid: string;
  component: 'ProductDetailV3';
  [k: string]: any;
}

export interface ProductListV1Storyblok {
  title?: string;
  _uid: string;
  component: 'ProductListV1';
  [k: string]: any;
}

export interface VideoV1Storyblok {
  video: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  autoPlay?: boolean;
  _uid: string;
  component: 'VideoV1';
  [k: string]: any;
}
