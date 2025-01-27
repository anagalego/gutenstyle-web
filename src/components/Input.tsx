import { karla_regular } from '@/app/layout';

import Icon from './Icon';
import KeyboardCtrl from './KeyboardCtrl';

export default function Input() {
    
    return (
        <div className='bg-stone-200 flex items-center space-x-1 w-full h-12 p-2 rounded-lg'>
            <Icon icon="MdSearch" />
            <input
                className={`${karla_regular.className} w-full bg-transparent`}
                type="text"
                placeholder="Search"
            />
            <KeyboardCtrl text='⌘'/>
            <KeyboardCtrl text='K'/>
        </div>
    )
}