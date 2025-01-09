import { ButtonHTMLAttributes, HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
    appearence: 'input-label' | 'input-error' | 'title3' | 'body'
}

export function Presentation(props: Props) {
    const classNames = new Map<typeof props['appearence'], string>();
    classNames.set('input-label', '');
    classNames.set('input-error', 'text-red-400');
    classNames.set('title3', 'text-xl');
    classNames.set('body', '');
    const className = classNames.get(props.appearence);
    return <p className={className}>{props.children}</p>
}