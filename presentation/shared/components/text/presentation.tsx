import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
    appearence: 'input-label' | 'input-error'
}

export function Presentation(props: Props) {
    return <p>{props.children}</p>
}