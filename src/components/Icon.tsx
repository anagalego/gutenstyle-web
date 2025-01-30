import React from "react";
import * as MaterialIcons from "react-icons/md";
import * as FontAwesomeIcons from "react-icons/fa";

export enum IconCollection {
    MaterialIcons = "MaterialIcons",
    FontAwesomeIcons = "FontAwesomeIcons",
}

export interface IconProps {
    icon: string;
    collection?: IconCollection;
    size?: number;
}

export default function Icon({
    icon = "MdSearch",
    collection = IconCollection.MaterialIcons,
    size = 24
}: IconProps) {
    const iconCollections = {
        [IconCollection.MaterialIcons]: MaterialIcons,
        [IconCollection.FontAwesomeIcons]: FontAwesomeIcons
    };

    const SelectedCollection = iconCollections[collection];
    const SelectedIcon = SelectedCollection[icon as keyof typeof SelectedCollection] as React.ComponentType<{ size: number }>;

    if (!SelectedIcon) {
        console.error(`Icon "${icon}" does not exist in ${collection}.`);
        return null;
    }

    return (
        <div className="w-8 h-8 flex justify-center items-center">
            <SelectedIcon size={size} />
        </div>
    );
}
