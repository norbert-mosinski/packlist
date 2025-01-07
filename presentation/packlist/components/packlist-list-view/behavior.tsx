import { Packlist } from "@/application/packlist/models/packlist";
import { Presentation } from "./presentation";

export type Props = {
    packlists: Packlist[];
};

export function Behavior(props: Props)
{
    return <Presentation packlists={props.packlists}></Presentation>
}