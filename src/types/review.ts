export type Review = {
  id: string;
  name: string;
  country?: string;     // India, UAE, etc
  comment: string;
  avatar?: string;      // client photo
  video?: string;       // video file or embed link
};

