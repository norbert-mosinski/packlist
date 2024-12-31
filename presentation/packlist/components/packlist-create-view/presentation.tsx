import { PView } from "@/presentation/shared/components/view";
import { DPacklistCreateForm } from "../packlist-create-form";

export interface Props {

}

// component is kept serverside as no js needed
// data version for PacklistCreateForm is used.
export function Presentation(props: Props) {
    return <PView>
        <a href="/packlist">Back</a>
        <DPacklistCreateForm></DPacklistCreateForm>
    </PView>
}