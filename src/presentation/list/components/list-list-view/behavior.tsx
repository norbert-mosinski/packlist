import { List } from "@/application/list/models/list";
import { Presentation } from "./presentation";

export type Props = {
    lists: List[];
};

export function Behavior(props: Props)
{
    return <Presentation lists={props.lists}></Presentation>
}