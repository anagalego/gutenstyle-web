import React from 'react';

import NorthEastIcon from '@mui/icons-material/NorthEast';

export interface LinkProps {
    text?: string;
    path?: string;
    newTabIcon?: boolean;

    onClick?: () => void;
}

export default function Link({
    text = 'Link!',
    path,
    newTabIcon = false 
}: LinkProps) {

    return (
        <a href={path} className='flex items-center space-x-1'>
            <span className='self-center font-semibold whitespace-nowrap'>{text}</span>
            {newTabIcon && <NorthEastIcon sx={{ fontSize: 24, '& path': { strokeWidth: 0, stroke: 'black' } }}/>}
        </a>
    );
}
