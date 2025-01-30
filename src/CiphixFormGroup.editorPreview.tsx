import { ReactElement, createElement } from "react";
import { CiphixFormGroupPreviewProps } from "../typings/CiphixFormGroupProps";
import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

function parentInline(node?: HTMLElement | null): void {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

export function preview(props: CiphixFormGroupPreviewProps): ReactElement {
    return (
        <div ref={parentInline}>
            <props.content.renderer caption="Tooltip: Place widgets here">
                <div
                    className={props.innerClass ? props.innerClass : undefined}
                    style={props.innerStyle ? parseInlineStyle(props.innerStyle) : undefined}
                ></div>
            </props.content.renderer>
        </div>
    );
}
