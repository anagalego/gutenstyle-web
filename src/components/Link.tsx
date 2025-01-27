import React from 'react';

import Icon from './Icon';

export interface LinkProps {
    text?: string;
    path?: string;
    newTab?: boolean;

    onClick?: () => void;
}

export default function Link({
    text = 'Link!',
    path,
    newTab = false 
}: LinkProps) {

    return (
        <a href={path} className='flex items-center space-x-1 h-12 p-2'>
            <span className='self-center font-semibold whitespace-nowrap'>{text}</span>
            {newTab && <Icon icon="MdNorthEast" />}
        </a>
    );
}
