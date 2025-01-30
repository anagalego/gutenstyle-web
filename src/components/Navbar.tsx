import React from 'react';

import Input from './Input';
import Logo from './Logo';
import Social from './Social';
import TreeView from './TreeView';

import { navbarDataWithIds } from '@/data/navbar-data';

export default function Navbar() {
  return (
    <nav className='w-80 h-full sticky flex p-8 flex-col space-y-8 text-xl'>
        <div>
            <Logo />
            <Input />
        </div>
        <TreeView treeData={navbarDataWithIds}/>
        <Social />
    </nav>
  );
}