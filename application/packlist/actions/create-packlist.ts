import { PacklistRepository } from "@/data/packlist/repositories/packlist-repository";
import { CreatePacklistPayload } from "../payloads/create-packlist-payload";

export async function createPacklist(payload: CreatePacklistPayload)
{
    const packlistRepository = new PacklistRepository();
    
    // validate
    // create
    // return
}