interface TCommenter {
  username: string;
  image_url: string;
  location: string;
}

export interface TComment {
  commenter: TCommenter;
  comment: string;
}

interface TUser {
  username: string;
  image_url: string;
  location: string;
}

export interface TCommunityPost {
  _id: string;
  user: TUser;
  message: string;
  comments: TComment[];
}
