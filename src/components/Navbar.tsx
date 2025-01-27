import React from 'react';
import { FaNpm, FaGithub, FaFigma } from "react-icons/fa";

import Input from './Input';
import Logo from './Logo';
import TreeView from './TreeView';
import Link from './Link';

import { navbarDataWithIds } from '@/data/navbar-data';

export interface NavbarProps {
    brand?: string;
    hyperlink?: string;

    onClick?: () => void;   
}

export default function Navbar({

}: NavbarProps) {

  return (
    <nav className='w-80 h-full sticky flex p-8 flex-col space-y-8 text-xl'>
        <div>
            <Logo />
            <Input />
        </div>
        <TreeView treeData={navbarDataWithIds}/>
        <ul>
            <li className='flex space-x-1 items-center'>
                <FaNpm />
                <Link
                text='npm'
                path='https://www.npmjs.com/package/gutenstyle'
                newTab
                />
            </li>
            <li className='flex space-x-1 items-center'>
                <FaGithub />
                <Link
                text='github'
                path='https://github.com/anagalego/gutenstyle'
                newTab
                />
            </li>
            <li className='flex space-x-1 items-center'>
                <FaFigma />
                <Link
                text='figma'
                path='https://www.figma.com/'
                newTab
                />
            </li>
        </ul>
    </nav>
  );
}
