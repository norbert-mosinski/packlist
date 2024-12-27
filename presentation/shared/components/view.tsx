import { ViewProps } from "../props/view-props";

export async function View(props: ViewProps) {
    return <div>{props.children}</div>
}