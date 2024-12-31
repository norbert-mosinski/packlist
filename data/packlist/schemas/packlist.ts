import { z } from 'zod';

// Datas definition of packlist.
// Defines packlist on data level, without context.
export const packlistSchema = z.object({
    name: z.string(),
});