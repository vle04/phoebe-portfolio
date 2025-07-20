export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

export type BlockContent = unknown;

export type Project = {
  _id?: string;
  _createdAt?: string;
  thumbnail?: SanityImage;
  title: string;
  slug: { current: string };
  description?: string;
  date?: string;
  role?: string;
  programs?: string[];
  skills?: string[];
  overview?: BlockContent;
  problem?: BlockContent;
  images?: SanityImage[];
};
