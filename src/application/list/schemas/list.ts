import { z } from 'zod';
// Applications definition of list.
// Basically data layers definition exptended by the apps context
export const listSchema = z.object({
    name: z.string().min(1, "Name is required"),
});