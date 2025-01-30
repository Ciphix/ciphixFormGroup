/**
 * This file was generated from CiphixFormGroup.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, ReactNode } from "react";
import { EditableValue, ListValue, ReferenceValue, ReferenceSetValue } from "mendix";
import { Big } from "big.js";

export interface CiphixFormGroupContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    content?: ReactNode;
    innerClass: string;
    innerStyle: string;
    linkedAttribute?: EditableValue<Big | any | boolean | Date | string>;
    linkedAssociation?: ReferenceValue | ReferenceSetValue;
    objectsDatasource?: ListValue;
}

export interface CiphixFormGroupPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    innerClass: string;
    innerStyle: string;
    linkedAttribute: string;
    linkedAssociation: string;
    objectsDatasource: {} | { caption: string } | { type: string } | null;
}
