import { karla_regular } from '@/app/layout';

export interface KeyboardCtrlProps {
    text?: string;
}

export default function KeyboardCtrl({
    text
}: KeyboardCtrlProps) {
    return (
        <div className='bg-white border border-stone-300 h-8 mb-1 p-2 flex items-center rounded-lg shadow-keyboardCtrl'>
            <p className={`${karla_regular.className}`}>
                {text}
            </p>
        </div>
    )
}