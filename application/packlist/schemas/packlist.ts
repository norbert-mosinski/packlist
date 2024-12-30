import { z } from 'zod';

export const packlistSchema = z.object({
    name: z.string().min(1, "Name is required"),
});