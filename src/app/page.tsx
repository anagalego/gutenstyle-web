import Heading from '@/components/Heading';
import Index from '@/components/Index'

const pageData = {
  title: "Foundations",
  topics: [
    "Color",
    "Typography",
    "Iconography",
    "Spacing",
    "Grid"
  ]
}

export default function Home(

) {
  return (<>
    <div className='w-full h-full p-2 bg-white rounded-t-[20px]'>
      <div className='w-full h-80 bg-teal-950 text-white rounded-[16px] px-8 py-6 flex items-end'>
        <Heading
          text={pageData.title}
        />
      </div>
      <div className='h-full grid grid-cols-[1fr_320px]'>
        <section className='p-8 text-lg'>
          <h1>Color</h1>
          <p>Gutenstyle is an adaptable system of guidelines, components, and tools that support the best practices of user interface design.
            Backed by open-source code, Gutenstyle streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.</p>
          <p>Material Design: (https://m3.material.io/styles/icons/designing-icons)</p>
        </section>
        <Index topics={pageData.topics}/>
      </div>
    </div>
  </>
    
  );
}
