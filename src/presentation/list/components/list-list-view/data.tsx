import { listLists } from "@/application/list/actions/list-lists";
import { Behavior } from "./behavior";

export async function Data()
{
    const lists = await listLists();

    return <Behavior lists={lists}></Behavior>
}