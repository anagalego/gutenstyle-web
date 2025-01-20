import Link from '../components/Link'

export default function Home() {
  return (
    <div className='w-full h-full p-8'>
      <div className='h-full grid grid-cols-[1fr_320px] items-center justify-items-center bg-white rounded-t-[20px]'>
        <main className='w-full p-8'>
          <div className='w-full h-80 bg-teal-950 rounded-2xl text-white'>
            Foundations
          </div>
        </main>
        <div className='w-80 p-8'>
          <ul className='space-y-2 text-lg'>
            <li>
              <Link
              text='Get started'
              path='https://github.com/anagalego'
              />
            </li>
            <li>
              <Link
              text='New in'
              path='https://github.com/anagalego'
              />
            </li>
            <li>
              <Link
              text='About'
              path='https://github.com/anagalego'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
