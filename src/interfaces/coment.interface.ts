import { z } from "zod";
import { commentResponseSchema } from "../schemas/comment.schema";

export type TCreateCommentResponse = z.infer<typeof commentResponseSchema>;
