import { Repository } from "typeorm";
import { Comment } from "../../entities/comments.entity";
import { AppDataSource } from "../../data-source";
import { TGetAllCommentsResponse } from "../../interfaces/comment.interface";
import { getCommentsSchema } from "../../schemas/comment.schema";

export const getCommentsService =
  async (): Promise<TGetAllCommentsResponse> => {
    const commentRepo: Repository<Comment> =
      AppDataSource.getRepository(Comment);

    const comments = await commentRepo.find({
      relations: { user: true, ad: true },
    });

    return getCommentsSchema.parse(comments);
  };
