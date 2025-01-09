import { ButtonHTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes, PropsWithChildren, forwardRef } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

// Wrapper for native element to allow global styling
export const Presentation = forwardRef<HTMLInputElement, PTextInputProps>((props: Props, ref) => {
    const {...inputProps} = props;

    return <input {...inputProps} ref={ref} className="border b-app-input-border min-w-12 min-h-4 text-black" />
})