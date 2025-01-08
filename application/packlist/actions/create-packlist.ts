"use server"
import { PacklistRepository } from "@/data/packlist/repositories/packlist-repository";
import { z } from "zod";

// Local definition for payload, as used only here
// Separate from actual packlist in order to keep separation
// Allows specific business rules for given use case
// that may differ from applications packlist definition
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
        // global action result is defined for easier handling in upper layer
        return { success: true, errors: null };
    } catch (e) {
        if (e instanceof z.ZodError) {
            // todo factory
            return { success: false, errors: e.format() };
        }
        throw e;
    }
}