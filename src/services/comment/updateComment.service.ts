import { Repository } from "typeorm";
import { Comment } from "../../entities/comments.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { commentResponseSchema } from "../../schemas/comment.schema";
import { TCreateCommentResponse } from "../../interfaces/comment.interface";

export const updateCommentService = async (
  commentId: string,
  newText: string
): Promise<TCreateCommentResponse> => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);

  const comment = await commentRepo.findOne({
    where: { id: commentId },
    relations: { user: true, ad: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  comment.comment_text = newText;

  await commentRepo.save(comment);

  return commentResponseSchema.parse(comment);
};
