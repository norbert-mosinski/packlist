"use client"
import { TextProps } from "../props/text-props";

export function Text(props: TextProps) {
    return <p>{props.children}</p>
}