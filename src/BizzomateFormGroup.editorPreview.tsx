import { ReactElement, createElement } from "react";
import { BizzomateFormGroupPreviewProps } from "../typings/BizzomateFormGroupProps";
import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

export function preview(props: BizzomateFormGroupPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <div
                className={props.innerClass ? props.innerClass : undefined}
                style={props.innerStyle ? parseInlineStyle(props.innerStyle) : undefined}>
                {props.content.renderer}
            </div>
        </div>
    );
}

