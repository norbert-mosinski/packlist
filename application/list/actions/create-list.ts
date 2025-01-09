"use server"
import { z } from "zod";
import { prisma } from "../../../infrastructure/prisma/facades/prisma";

// Local definition for payload, as used only here
// Separate from actual list in order to keep separation
// Allows specific business rules for given use case
// that may differ from applications list definition
const payloadSchema = z.object({
    name: z.string().min(1, "Name is required"),
});

type Payload = z.infer<typeof payloadSchema>;

export async function createList(payload: Payload) {
    try {
        payloadSchema.parse(payload);
        await prisma.list.create({
            data: {
                name: payload.name,
            },
        });
        // todo factory for result
        // global action result is defined for easier handling in upper layer
        return { success: true, errors: null };
    } catch (e) {
        if (e instanceof z.ZodError) {
            // todo factory for result
            return { success: false, errors: e.format() };
        }
        throw e;
    }
}