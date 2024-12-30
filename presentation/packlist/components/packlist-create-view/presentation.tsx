import { View } from "@/presentation/shared/components/view";
import { DPacklistCreateForm } from "../packlist-create-form";

export interface Props {

}

export async function Presentation(props: Props) {
    return <View>
        <DPacklistCreateForm></DPacklistCreateForm>
    </View>
}