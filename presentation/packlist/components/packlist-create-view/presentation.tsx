import { PView } from "@/presentation/shared/components/view";
import { DPacklistCreateForm } from "../packlist-create-form";

export interface Props {

}

export async function Presentation(props: Props) {
    return <PView>
        <DPacklistCreateForm></DPacklistCreateForm>
    </PView>
}