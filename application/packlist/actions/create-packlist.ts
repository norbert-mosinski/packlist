import { PacklistRepository } from "@/data/packlist/repositories/packlist-repository";
import { z } from "zod";

const payloadSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

type Payload = z.infer<typeof payloadSchema>;

export async function createPacklist(payload: Payload) {
    const packlistRepository = new PacklistRepository();

    try {
        payloadSchema.parse(payload);
        // create
        // todo factory
        return { success: true, errors: null };
    } catch (e) {
        if (e instanceof z.ZodError) {
            // todo factory
            return { success: false, errors: e.format() };
        }
        throw e;
    }
}