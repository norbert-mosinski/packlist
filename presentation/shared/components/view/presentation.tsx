import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
}

export function Presentation(props: Props) {
    return <div>{props.children}</div>
}