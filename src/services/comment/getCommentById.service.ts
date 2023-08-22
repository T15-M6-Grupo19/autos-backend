import { Repository } from "typeorm";
import { Comment } from "../../entities/comments.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { TCreateCommentResponse } from "../../interfaces/comment.interface";
import { commentResponseSchema } from "../../schemas/comment.schema";

export const getCommentByIdService = async (
  commentId: string
): Promise<TCreateCommentResponse> => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);

  const comment = await commentRepo.findOne({
    where: { id: commentId },
    relations: { user: true, ad: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  return commentResponseSchema.parse(comment);
};
