'use client'

import React from 'react';

import Icon, { IconCollection } from './Icon';
import Link from './Link';
import { TreeNode } from '@/types/TreeNode';
import { socialDataWithIds } from '@/data/social-data';

interface SocialListProps {
    socialData?: TreeNode[];  
}

export default function Social({
    socialData = socialDataWithIds
}: SocialListProps) {

  return (
    <ul>
        {socialData.map((node) => (
            <li className='flex space-x-1 items-center' key={node.id}>
                {node.icon && <Icon icon={node.icon} collection={IconCollection.FontAwesomeIcons}/>}
                <Link
                text={node.name}
                path={node.path}
                newTab
                />
            </li>
        ))}
    </ul>
  );
}
