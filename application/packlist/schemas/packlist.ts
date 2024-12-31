import { z } from 'zod';
// Applications definition of packlist.
// Basically data layers definition exptended by the apps context
export const packlistSchema = z.object({
    name: z.string().min(1, "Name is required"),
});