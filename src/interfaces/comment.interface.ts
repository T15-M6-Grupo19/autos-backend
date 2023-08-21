import { z } from "zod";
import {
  commentResponseSchema,
  getCommentsSchema,
} from "../schemas/comment.schema";

export type TCreateCommentResponse = z.infer<typeof commentResponseSchema>;
export type TGetAllCommentsResponse = z.infer<typeof getCommentsSchema>;
