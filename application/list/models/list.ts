import { z } from 'zod';
import { listSchema } from '../schemas/list';

export type List = z.infer<typeof listSchema>;