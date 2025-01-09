import { PView } from "@/presentation/shared/components/view";
import {PText} from "@/presentation/shared/components/text"

type List = {
    name: string;
};

export interface Props {
    lists: List[]
}

export async function Presentation(props: Props) {
    return <PView>
        <div className="flex flex-col">
        <a href="/">Back</a>
        <a href="/list/create">Create</a>
        <PText appearence="title3">Lists:</PText>
        {props.lists.map(list => <PText appearence="body">{list.name}</PText>)}
</div>
    </PView>
}