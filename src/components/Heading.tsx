import { alegreya_regular, karla_regular, roboto_mono } from '@/app/layout';

export enum FontType {
    sans = "alegreya_regular",
    serif = "karla_regular",
    mono = "roboto_mono"
}

export interface HeadingProps {
    text: string;
    size?: string;
    font?: FontType;
    sticky?: boolean;
}

export default function Heading({
    text = "Heading",
    size = "6xl",
    font = FontType.sans,
    sticky = false
}: HeadingProps) {
    const fontType = {
        [FontType.sans]: karla_regular,
        [FontType.serif]: alegreya_regular,
        [FontType.mono]: roboto_mono
    } 
    
    const selectedFont = fontType[font];
    
    if(!selectedFont) {
        console.error(`Font "${font}" not found.`);
        return null;
    }

    const selectedPosition = sticky ? 'sticky -top-8 pt-16 pb-8 bg-white' : '';
    
    return (
        <h1 className={`${selectedFont.className} space-x-4 text-${size} ${selectedPosition}`}>
            {text}
        </h1>
    )
}