import { useSelector } from "react-redux"

const Footer = () => {

  const navigation = useSelector(state => state.nav)

  return (
    <footer className='bg-gray-900'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          {navigation.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-gray-400 hover:text-gray-300 transition'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className='mt-8 text-center text-base text-gray-500'>
          &copy; 2022 Nayless - all rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer