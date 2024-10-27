export interface IUser {
  email: string;
  password: string;
  name?: string;
}

export interface IPost {
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}
