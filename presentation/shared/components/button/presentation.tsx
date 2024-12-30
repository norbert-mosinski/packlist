import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
    appearence? : 'primary'
}

export function Presentation(props: Props) {
    const className = '';
    const {appearence, ...buttonProps} = props;

    return <button className={className} {...buttonProps}>{props.children}</button>
}