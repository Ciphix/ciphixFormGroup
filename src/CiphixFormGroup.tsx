import { ReactElement, createElement, Fragment } from "react";
import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";
import { CiphixFormGroupContainerProps } from "../typings/CiphixFormGroupProps";
import { Alert } from "./components/Alert";

export function CiphixFormGroup(props: CiphixFormGroupContainerProps): ReactElement {
    const validationFeedback = props.linkedAssociation?.validation
        ? props.linkedAssociation?.validation
        : props.linkedAttribute?.validation;
    return (
        <Fragment>
            <div
                className={props.innerClass ? props.innerClass : undefined}
                style={props.innerStyle ? parseInlineStyle(props.innerStyle) : undefined}
            >
                {props.content}
            </div>
            <Alert>{validationFeedback}</Alert>
        </Fragment>
    );
}
