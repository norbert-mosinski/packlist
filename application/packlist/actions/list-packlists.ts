"use server"
import { PacklistRepository } from "@/data/packlist/repositories/packlist-repository";
import { Packlist } from "../models/packlist";

export async function listPacklists(): Promise<Packlist[]>
{
    const packlistRepository = new PacklistRepository();

    const dataPacklists = await packlistRepository.list();
    const packlists = dataPacklists.map(packlist => ({
        id: packlist.id,
        name: packlist.name,
    }));

    return packlists;
}