import DemoArea from "@/components/custom/DemoArea";
import Heading, { FontType } from "@/components/Heading";
import Index from "@/components/Index";
import Paragraph from "@/components/Paragraph";

import { buttonPropertiesDataWithIds } from "@/data/component-properties/button-data"

const mockData = {
    title: "Button",
    topics: [
      "Live demo",
      "Purpose",
      "Usage",
      "Best practices",
      "Content",
      "Behavior",
      "Accessibility",
      "Resources",
      "Implementation",
      "API"
    ]
}  

export default function ButtonComponentPage() {
  return (<>
    <div className='w-full h-fit p-2 bg-white rounded-[20px]'>
      <div className='w-full h-80 bg-teal-950 text-white rounded-[16px] px-8 py-6 flex items-end'>
        <Heading
          text={mockData.title}
          font={FontType.serif}
        />
      </div>
      <div className='grid grid-cols-[1fr_320px]'>
        <div>
          <section className='p-8 text-lg'>
            <Heading
              text="Live demo"
              sticky
            />
            <DemoArea properties={buttonPropertiesDataWithIds}/>    
            <Heading
              text="Variants"
              size="5xl"
            />
          </section>
          <section className='p-8 text-lg'>
            <Heading
              text="Color"
              sticky
            />
            <Paragraph />
          </section>
          <section className='p-8 text-lg'>
            <Heading
              text="Color"
              sticky
            />
            <Paragraph />
          </section>
          <section className='p-8 text-lg'>
            <Heading
              text="Color"
              sticky
            />
            <Paragraph />
          </section>
          <section className='p-8 text-lg'>
            <Heading
              text="Color"
              sticky
            />
            <Paragraph />
          </section>
          <section className='p-8 text-lg'>
            <Heading
              text="Color"
              sticky
            />
            <Paragraph />
          </section>
        </div>
        <Index topics={mockData.topics}/>
      </div>
    </div>
  </>
    
  );
}
