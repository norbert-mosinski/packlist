"use server"
import { List } from "../models/list";
import { prisma } from "../../../infrastructure/prisma/facades/prisma";

export async function listLists(): Promise<List[]>
{
    const dataLists = await prisma.list.findMany();
    const lists = dataLists.map(list => ({
        id: list.id,
        name: list.name,
    }));

    return lists;
}