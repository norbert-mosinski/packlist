import { PView } from "@/presentation/shared/components/view";
import { DListCreateForm } from "../list-create-form";

export interface Props {

}

// component is kept serverside as no js needed
// data version for ListCreateForm is used.
export function Presentation(props: Props) {
    return <PView>
        <a href="/list">Back</a>
        <DListCreateForm></DListCreateForm>
    </PView>
}