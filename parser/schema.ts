import { z } from "zod";

export const metadataSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(5),
  category: z.string().min(1),
  component: z.any(),
});
