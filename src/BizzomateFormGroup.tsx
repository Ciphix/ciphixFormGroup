import { ReactElement, createElement, Fragment } from "react";
import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";
import { BizzomateFormGroupContainerProps } from "../typings/BizzomateFormGroupProps";
import { Alert } from "./components/Alert";

export function BizzomateFormGroup(props: BizzomateFormGroupContainerProps): ReactElement {
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
