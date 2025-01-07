import { listPacklists } from "@/application/packlist/actions/list-packlists";
import { Behavior } from "./behavior";

export async function Data()
{
    const packlists = await listPacklists();

    return <Behavior packlists={packlists}></Behavior>
}