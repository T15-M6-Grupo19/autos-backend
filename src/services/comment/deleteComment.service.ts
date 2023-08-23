import { Repository } from "typeorm";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entity";

export const deleteCommentService = async (
  commentId: string,
  userId: string
): Promise<void> => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);

  const comment = await commentRepo.findOne({
    where: { id: commentId },
    relations: { user: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user.id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  await commentRepo.remove(comment);
};
