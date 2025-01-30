import { TreeNode } from "@/types/TreeNode"

const socialData = [
    {
        name: "npm",
        path: "https://www.npmjs.com/package/gutenstyle",
        icon: "FaNpm"  
    },
    {
        name: "github",
        path: "https://github.com/anagalego/gutenstyle",
        icon: "FaGithub"  
    },
    {
        name: "figma",
        path: "https://www.figma.com/",
        icon: "FaFigma"  
    }
]

function assignIds(nodes: TreeNode[]): TreeNode[] {
    return nodes.map((node, index) => {
        return {
            ...node,
            id: `${index}`
        };
    });
}

export const socialDataWithIds = assignIds(socialData);