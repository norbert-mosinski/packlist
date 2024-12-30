import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
    appearence: 'input-label' | 'input-error'
}

export function Presentation(props: Props) {
    const classNames = new Map<typeof props['appearence'], string>();
    classNames.set('input-label', '');
    classNames.set('input-error', 'text-red-400');
    const className = classNames.get(props.appearence);
    return <p className={className}>{props.children}</p>
}