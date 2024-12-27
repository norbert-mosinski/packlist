import { View } from "@/presentation/shared/components/view";
import { PacklistCreateViewProps } from "../props/packlist-create-view-props";
import { TextInput } from "@/presentation/shared/components/text-input";
import { Text } from "@/presentation/shared/components/text";

export async function PacklistCreateView(props: PacklistCreateViewProps){
    

    return <View>
        <Text appearence="input-label">Name</Text>
        <TextInput></TextInput>
        <Text appearence="input-label">Items</Text>
    </View>
}
