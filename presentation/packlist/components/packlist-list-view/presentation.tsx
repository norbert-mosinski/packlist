import { PView } from "@/presentation/shared/components/view";

export interface Props {

}

export async function Presentation(props: Props) {
    return <PView>
        <div className="flex flex-col">
        <a href="/">Back</a>
        <a href="/packlist/create">Create</a>
List view
</div>
    </PView>
}