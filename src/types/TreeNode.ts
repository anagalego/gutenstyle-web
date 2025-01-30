export type TreeNode = {
    name: string;
    id?: string;
    icon?: string;
    path?: string;
    labels?: string;
    children?: TreeNode[];
};