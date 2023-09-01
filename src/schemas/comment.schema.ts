import { z } from "zod";
import { createdUserSchema } from "./user.schema";
import { salesAdSchema } from "./salesAd.schemas";

export const commentResponseSchema = z.object({
  id: z.string(),
  comment_text: z.string(),
  user: createdUserSchema,
  created_at: z.date(),
  ad: salesAdSchema.omit({
    photos: true
  }),
});

export const getCommentsSchema = commentResponseSchema.array();
