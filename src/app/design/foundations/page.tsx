import Heading, { FontType } from '@/components/Heading';
import Index from '@/components/Index'
import Paragraph from '@/components/Paragraph';

const mockData = {
  title: "Foundations",
  topics: [
    "Color",
    "Typography",
    "Iconography",
    "Spacing",
    "Grid"
  ]
}

export default function DesignFoundationsPage() {
  return (<>
    <div className='w-full h-full p-2 bg-white rounded-t-[20px]'>
      <div className='w-full h-80 bg-teal-950 text-white rounded-[16px] px-8 py-6 flex items-end'>
        <Heading
          text={mockData.title}
          font={FontType.serif}
        />
      </div>
      <div className='grid grid-cols-[1fr_320px]'>
        <section className='p-8 text-lg'>
          <Heading
            text="Color"
            size='6xl'
          />
          <Paragraph />
        </section>
        <Index topics={mockData.topics}/>
      </div>
    </div>
  </>
    
  );
}
