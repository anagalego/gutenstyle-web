import { Matter } from "@/types/custom/Matter"

const topicData = [
    {
        heading: "Button",
        matters: [
            "Live demo",
            "Purpose",
            "Usage",
            "Best practices",
            "Content",
            "Behavior",
            "Accessibility",
            "Resources",
            "Implementation",
            "API"
        ]
    }
]

function assignIds(nodes: Matter[], parentId: string = ""): Matter[] {
    return nodes.map((node, index) => {
        const newId = parentId ? `${parentId}-${index}` : `${index}`;
        return {
            ...node,
            id: newId
        };
    });
}

export const topicDataWithIds = assignIds(topicData);