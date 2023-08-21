import { Repository } from "typeorm";
import { Ad } from "../../entities/ads.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { TCreateCommentResponse } from "../../interfaces/comment.interface";
import { commentResponseSchema } from "../../schemas/comment.schema";
import { User } from "../../entities/users.entity";
import { Comment } from "../../entities/comments.entity";

export const CreateCommentService = async (
  adId: string,
  userId: string,
  text: string
): Promise<TCreateCommentResponse> => {
  const adRepository: Repository<Ad> = AppDataSource.getRepository(Ad);
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id: userId } });
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const ad = await adRepository.findOne({ where: { id: adId } });
  if (!ad) {
    throw new AppError("Ad does not exists", 404);
  }

  const newComment: Comment = commentRepository.create({
    comment_text: text,
    ad: ad,
    user: user,
  });

  console.log(newComment);

  await commentRepository.save(newComment);

  return commentResponseSchema.parse(newComment);
};
