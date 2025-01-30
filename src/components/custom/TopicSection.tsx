import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { topicData } from '@/data/topic-data';
import { Matter } from '@/types/custom/Matter';

interface TopicsProps {
    topics: Matter[];
}

interface TopicSectionProps {
    
}

export default function TopicSection({
    topics: topicData
}: TopicsProps) {
    return (
        {topicData.map((topic) => {
            <section className='p-8 text-lg'>
                <Heading
                text={topic}
                />
                <Paragraph text="Hello"/>
            </section>
        })}
    )
}