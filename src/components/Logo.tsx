import { alegreya_regular } from '@/app/layout';
import Link from 'next/link';

export default function Logo() {
    
    return (
        <Link href='/'>
            <div className='w-full p-2 flex items-center'>
                <h1 className={`${alegreya_regular.className} space-x-4 text-3xl font-bold tracking-wide`}>
                    Gutenstyle
                </h1>
            </div>
        </Link>
    )
}