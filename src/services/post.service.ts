import prisma from '@/prisma/prisma';
import { IPost } from '@/types/types';
import logger from '@/utils/logger';
import { Post } from '@prisma/client';

export class PostService {
  async createPost(post: IPost): Promise<Post | null> {
    try {
      const newPost = await prisma.post.create({
        data: {
          title: post.title,
          content: post.content,
          published: post.published,
          author: { connect: { id: post.authorId } },
        },
      });
      logger.info(`Post created: ${newPost.title}`);
      return newPost;
    } catch (error) {
      logger.error(`Failed to create post: ${error.message}`);
      return null;
    }
  }
}
