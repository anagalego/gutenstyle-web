import React from 'react';

export interface ButtonProps {
    mode?: 'light' | 'dark'; // default: 'light'
    appearance?: 'primary' | 'secondary' | 'danger'; // default: 'primary'
    type?: 'solid' | 'outline' | 'ghost' | 'typo'; // default: 'solid'
    size?: 'small' | 'medium' | 'large'; // default: 'medium'

    text?: string;
    iconLeft?: string;
    iconRight?: string;
    counter?: number;

    onClick?: () => void;
}

export default function Button({
    mode = 'light',
    appearance = 'primary',
    type = 'solid',
    size = 'medium',
    text = 'Click me!',
    iconLeft,
    iconRight,
    counter,
    onClick,
}: ButtonProps) {
    const hasIconLeft = !!iconLeft;
    const hasIconRight = !!iconRight;
    const hasCounter = counter !== undefined;

    const buttonClass = `
        h-12 px-4 flex items-center justify-center gap-2 rounded
        ${mode === 'dark' ? 'bg-gray-900 text-white' : ''}
        ${appearance === 'primary' ? 'bg-blue-500 text-white' : ''}
        ${appearance === 'secondary' ? 'bg-gray-500 text-white' : ''}
        ${appearance === 'danger' ? 'bg-red-500 text-white' : ''}
        ${type === 'outline' ? 'border-2 border-current bg-transparent' : ''}
        ${type === 'ghost' ? 'bg-transparent text-current' : ''}
        ${size === 'small' ? 'text-sm py-2' : ''}
        ${size === 'medium' ? 'text-md py-3' : ''}
        ${size === 'large' ? 'text-lg py-4' : ''}
    `;

    return (
        <button className={buttonClass.trim()} onClick={onClick}>
        {hasIconLeft && <img src={iconLeft} alt='icon-left' className='h-6 w-6' />}
        {text && <span>{text}</span>}
        {hasIconRight && <img src={iconRight} alt='icon-right' className='h-6 w-6' />}
        {hasCounter && (
            <span
            className='ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs'
            aria-label={`Counter: ${counter}`}
            >
            {counter}
            </span>
        )}
        </button>
    );
}
