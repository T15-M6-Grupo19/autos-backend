import { Repository } from "typeorm";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comments.entity";
import { Ad } from "../../entities/ads.entity";

export const deleteCommentService = async (
  commentId: string,
  userId: string
): Promise<void> => {
  const commentRepo: Repository<Comment> = AppDataSource.getRepository(Comment);
  const adRepo: Repository<Ad> = AppDataSource.getRepository(Ad)

  const comment = await commentRepo.findOne({
    where: { id: commentId },
    relations: { user: true, ad: true },
  });

  const ad = await adRepo.findOne({
    where: {id: comment!.ad.id},
    relations: { user: true}
  }) 

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.user.id !== userId && ad!.user.id !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  await commentRepo.remove(comment);
};
