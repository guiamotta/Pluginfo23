import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

class PrismaService {
  async usernameExists(username: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    return !!user;
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    return user;
  }

  async createUser(username: string, passwordHash: string): Promise<User> {
    const newUser = await prisma.user.create({
      data: {
        username,
        passwordHash,
      },
    });

    return newUser;
  }
}

export default PrismaService;
