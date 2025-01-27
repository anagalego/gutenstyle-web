import { alegreya_regular } from '@/app/layout';

export interface HeadingProps {
    text?: string;
}

export default function Heading({
    text = "Heading"
}: HeadingProps) {
    return (
        <h1 className={`${alegreya_regular.className} space-x-4 text-6xl`}>
            {text}
        </h1>
    )
}