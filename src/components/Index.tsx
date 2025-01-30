import Link from './Link';

export interface IndexProps {
    topics: string[];
}

export default function Index({
    topics = [
        "Preface",
        "Chapter I",
        "Chapter II",
        "Chapter III",
        "Chapter IV",
        "Chapter V",
    ]
}: IndexProps) {
    return (
        <ul className='h-screen sticky -top-8 p-8 pt-16 space-y-2 text-lg'>
            {topics.map((topic) => (
            // eslint-disable-next-line react/jsx-key
            <li>
                <Link
                key={topic}
                text={topic}
                path='#'
                />
            </li>
            ))}
        </ul>
    )
}