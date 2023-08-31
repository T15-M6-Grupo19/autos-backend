import { Repository } from "typeorm";
import { Comment } from "../../entities/comments.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { commentResponseSchema } from "../../schemas/comment.schema";
import { TCreateCommentResponse } from "../../interfaces/comment.interface";
import { User } from "../../entities/users.entity";

export const updateCommentService = async (
  commentId: string,
  newText: string,
  userId: string
): Promise<TCreateCommentResponse> => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const comment = await commentRepo.findOne({
    where: { id: commentId },
    relations: { user: true, ad: true },
  });

  if (comment?.user.id != userId) {
    throw new AppError("Insufficient Permission", 403);
  }

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  comment.comment_text = newText;

  await commentRepo.save(comment);

  return commentResponseSchema.parse(comment);
};
