import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren, HtmlHTMLAttributes<HTMLFormElement> {

}

// Wrapper for native element to allow global styling
export function Presentation(props: Props) {
    const {children, ...formProps} = props;

    return <form {...formProps}>{children}</form>
}