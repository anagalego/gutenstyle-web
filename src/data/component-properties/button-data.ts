import { ButtonProperty } from "@/types/components/ButtonProperty"

const buttonPropertiesData = [
    {
        name: "mode",
        variants: [
            "light",
            "dark"
        ]
    },
    {
        name: "appearance",
        variants: [
            "primary",
            "secondary",
            "neutral"
        ]
    },
    {
        name: "type",
        variants: [
            "solid",
            "outlined",
            "ghost",
            "typo"
        ]
    },
    {
        name: "size",
        variants: [
            "small",
            "medium",
            "large"
        ]
    },
    {
        name: "state",
        variants: [
            "enabled",
            "hover",
            "focus",
            "active",
            "progress",
            "disabled"
        ]
    },
    {
        name: "hasText",
        booleanValue: true
    },
    {
        name: "text",
        stringValue: "Click me!"
    },
    {
        name: "hasIconLeft",
        booleanValue: true
    },
    {
        name: "iconLeft",
        stringValue: "MdFilterAlt"
    },
    {
        name: "hasIconRight",
        booleanValue: true
    },
    {
        name: "iconRight",
        stringValue: "MdDownload"
    },
    {
        name: "hasCounter",
        booleanValue: true
    },
    {
        name: "counter",
        numberValue: 16
    }
]

function assignIds(nodes: ButtonProperty[]): ButtonProperty[] {
    return nodes.map((node, index) => ({
        ...node,
        id: `${index}`
    }));
}

export const buttonPropertiesDataWithIds = assignIds(buttonPropertiesData);
