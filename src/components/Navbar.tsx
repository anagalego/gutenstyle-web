import React from 'react';

import Link from './Link';

export interface NavbarProps {
    brand?: string;
    hyperlink?: string;

    onClick?: () => void;
}

export default function Navbar({

}: NavbarProps) {

  return (
    <nav className='w-80 h-full p-12 flex flex-col content-between p-8'>
        <div className='space-x-4 text-2xl'>
            <Link
            text='Gutenstyle'
            path='#'
            />
            <input className="bg-stone-100 w-full" type="text" placeholder="Search"/>
        </div>
        <div className='space-x-8 text-xl'>

        </div>
        <ul className='space-y-2 text-lg'>
            <li>
                <Link
                text='Get started'
                path='https://github.com/anagalego'
                />
            </li>
            <li>
                <Link
                text='New in'
                path='https://github.com/anagalego'
                />
            </li>
            <li>
                <ul>
                    <span className="text-lg">About</span>
                    <Link
                    text='Purpose'
                    path='https://github.com/anagalego'
                    />
                    <Link
                    text='Showcase'
                    path='https://github.com/anagalego'
                    />
                </ul>
            </li>
            <li>
                <ul>
                    <span className="text-lg">Design</span>
                    <Link
                    text='Tokens'
                    path='https://github.com/anagalego'
                    />
                    <Link
                    text='Foundations'
                    path='https://github.com/anagalego'
                    />
                </ul>
            </li>
            <li>
                <ul>
                    <span className="text-lg">Components</span>
                    <Link
                    text='Overview'
                    path='https://github.com/anagalego'
                    />
                    <Link
                    text='Accordion'
                    path='https://github.com/anagalego'
                    />
                     <Link
                    text='Button'
                    path='https://github.com/anagalego'
                    />
                </ul>
            </li>
        </ul>
    </nav>
  );
}
