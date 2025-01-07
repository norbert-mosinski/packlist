import { PView } from "@/presentation/shared/components/view";
import {PText} from "@/presentation/shared/components/text"

type Packlist = {
    name: string;
};

export interface Props {
    packlists: Packlist[]
}

export async function Presentation(props: Props) {
    return <PView>
        <div className="flex flex-col">
        <a href="/">Back</a>
        <a href="/packlist/create">Create</a>
        <PText appearence="title3">Lists:</PText>
        {props.packlists.map(packlist => <PText appearence="body">{packlist.name}</PText>)}
</div>
    </PView>
}