import { TreeNode } from "@/types/TreeNode";

export const navbarData = [
    {
        name: "Get started"
    },
    {
        name: "New in"
    },
    {
        name: "About",
        children: [
            { name: "Purpose" },
            { name: "Showcase" }
        ]
    },
    {
        name: "Design",
        children: [
            { name: "Tokens" },
            { name: "Foundations" }
        ]
    },
    {
        name: "Components",
        children: [
            { labels: "generic", name: "Overview" },
            { labels: "atom", name: "Avatar" },
            { labels: "atom", name: "Button" },
            { labels: "atom", name: "Checkbox" },
            { labels: "atom", name: "Chip" },
            { labels: "atom", name: "Date input" },
            { labels: "atom", name: "Heading" },
            { labels: "atom", name: "Icon" },
            { labels: "atom", name: "Image" },
            { labels: "atom", name: "Keyboard control" },
            { labels: "atom", name: "Label" },
            { labels: "atom", name: "Link" },
            { labels: "organism", name: "Navigation" },
            { labels: "atom", name: "Progress bar" },
            { labels: "atom", name: "Progress indicator" },
            { labels: "atom", name: "Radio button" },
            { labels: "atom", name: "Rating" },
            { labels: "organism", name: "Search" },
            { labels: "atom", name: "Separator" },
            { labels: "atom", name: "Slider" },
            { labels: "atom", name: "Spiner" },
            { labels: "atom", name: "Stepper" },
            { labels: "atom", name: "Text input" },
            { labels: "atom", name: "Textarea" },
            { labels: "atom", name: "Toggle" },
            { labels: "organism", name: "Treeview" }
        ]
    },
];

function assignIds(nodes: TreeNode[], parentId: string = ""): TreeNode[] {
    return nodes.map((node, index) => {
        const newId = parentId ? `${parentId}-${index}` : `${index}`;
        return {
            ...node,
            id: newId,
            children: node.children ? assignIds(node.children, newId) : undefined,
        };
    });
}

export const navbarDataWithIds = assignIds(navbarData);
