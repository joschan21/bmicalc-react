import { motion } from 'framer-motion'

const Header = ({ title, description }) => {
  return (
    <div className='relative pt-6 pb-16 sm:pb-24'>
      <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6'>
        <motion.div className='text-center lg:text-left'>
          <motion.h1 className='text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl'>
            <motion.span animate={{ opacity: [0, 1], y: [20, 0] }} className='block'>
              Let's calculate your
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ delay: 0.15 }}
              className='block text-indigo-600'>
              {title}!
            </motion.span>
          </motion.h1>
          <motion.p
            transition={{ delay: 0.3 }}
            animate={{ opacity: [0, 1], y: [20, 0] }}
            className='mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            {description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Header
