import { AnimatePresence, motion } from 'framer-motion'

const MobileLayout = () => {
  return (
    <AnimatePresence>
      <motion.div
        key='mobileLayout'
        transition={{delay: 0.3}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className='absolute top-[64px] bottom-0 left-0 right-0 flex items-center justify-center'>
          <iframe
            className='h-[620px] w-[358px] emulator__item shadow-2xl'
            src='https://bmicalc-react.herokuapp.com/'
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MobileLayout
