import prisma from '@/prisma/prisma';
import { IUser } from '@/types/types';
import logger from '@/utils/logger';
import { User } from '@prisma/client';

export class UserService {
  async createUser(user: IUser): Promise<User | null> {
    try {
      const newUser = await prisma.user.create({ data: user });

      logger.info(`User created: ${newUser.email}`);
      return newUser;
    } catch (error) {
      logger.error(`Failed to create user: ${error.message}`);
      return null;
    }
  }
}
