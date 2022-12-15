/**
 * This file was generated from BizzomateFormGroup.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, ReactNode } from "react";
import { EditableValue, ListValue, ReferenceValue, ReferenceSetValue } from "mendix";
import { Big } from "big.js";

export interface BizzomateFormGroupContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    content: ReactNode;
    innerClass: string;
    innerStyle: string;
    linkedAttribute?: EditableValue<Big | any | boolean | Date | string>;
    linkedAssociation?: ReferenceValue | ReferenceSetValue;
    objectsDatasource?: ListValue;
}

export interface BizzomateFormGroupPreviewProps {
    readOnly: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    innerClass: string;
    innerStyle: string;
    linkedAttribute: string;
    linkedAssociation: string;
    objectsDatasource: {} | { type: string } | null;
}
