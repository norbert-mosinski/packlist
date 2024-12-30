import { ButtonHTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export function Presentation(props: Props) {
    const {...inputProps} = props;

    return <input {...inputProps} className="border b-app-input-border min-w-12 min-h-4 text-black" />
}