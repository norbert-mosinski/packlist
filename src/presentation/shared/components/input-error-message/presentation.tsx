import { PropsWithChildren } from "react";
import { PText } from "../text";

export interface Props extends PropsWithChildren {

}

export function Presentation(props: Props) {
    return <PText appearence={"input-error"}>{props.children}</PText>
}