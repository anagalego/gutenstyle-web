'use client'

import React, { useState } from 'react';

import Icon from './Icon';
import { TreeNode } from '@/types/TreeNode';
import { navbarDataWithIds } from '@/data/navbar-data';

interface TreeViewProps {
    treeData: TreeNode[];
}

interface TreeNodeProps {
    node: TreeNode;
    isExpanded: boolean;
    toggleNode: (nodeId: string) => void;
}

export default function TreeView({
    treeData = navbarDataWithIds
}: TreeViewProps) {
    const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

    const toggleNode = (nodeId: string) => {
        setExpandedNodes((prev) =>
            prev.includes(nodeId)
                ? prev.filter((id) => id !== nodeId)
                : [...prev, nodeId]
        );
    };

    return (
        <div className="tree-view">
            {treeData.map((node) => (
                <TreeNodeComponent
                    key={node.id}
                    node={node}
                    isExpanded={expandedNodes.includes(node.id ?? '')}
                    toggleNode={toggleNode}
                />
            ))}
        </div>
    );
};

function TreeNodeComponent({
    node, isExpanded, toggleNode
}:TreeNodeProps) {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div>
            <span
                className={`flex space-x-2 font-bold h-12 p-2 ${hasChildren ? "pl-0" : "pl-8"}`}
                onClick={() => {
                    if (hasChildren && node.id) {
                        toggleNode(node.id);
                    }
                }}
            >
                {hasChildren && (isExpanded
                    ? <Icon icon="MdKeyboardArrowDown" />
                    : <Icon icon="MdKeyboardArrowRight" />)
                } {node.name}
            </span>
            {isExpanded && hasChildren && (
                <div className="pl-6">
                    {node.children?.map((child) => (
                        <p className="p-2" key={child.id}>
                            {child.name}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};
