import { z } from 'zod';
import { packlistSchema } from '../schemas/packlist';

export type Packlist = z.infer<typeof packlistSchema>;