import goku from '../assets/son_goku.gif'
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      <div className="relative flex min-h-screen items-end justify-center" id="hero">
        <motion.img
          src={goku}
          alt="goku"
          className='absolute inset-0 z-10 h-full w-full object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        />
        <motion.div
          className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
          initial={{ opacity: 0, y: 50 }} // Start 50px below the original position
          animate={{ opacity: 1, y: 0 }} // Move to the original position
          transition={{ duration: 4 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start 50px below the original position
          animate={{ opacity: 1, y: 0 }} // Move to the original position
          transition={{ duration: 4, delay: 1 }}
          className='z-20 mx-4 max-w-3xl pb-20'
        >
          <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>SAHIL MANE</h1>
          <p className='pt-2 font-semibold'>Frontend & Full stack developer</p>
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection