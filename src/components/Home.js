import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const Home = () => {

  const containerVariants = {
    'hidden': {
      opacity: 0,
      x : '100vh'
    },
    'visible': {
      x : 0,
      opacity : 1,
      transition: {delay : 1, duration : 2}
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut', duration: 1.2
      }
    }
  };

  const buttonVariants = {
    'hover': {
      scale: 1.15,
      textShadow: '0px 0px 8px rgb(255, 255, 255)',
      boxShadow: '0px 0px 8px rgb(255, 255, 255)',
      transition: {
        yoyo: Infinity
      }
    },
    visible: {
      transition: { delay: 4, duration: 1 },
      x: [-20, 0, 20, -20, 0]
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      className="home container"
      initial = 'hidden'
      animate = 'visible'
      exit="exit"
    >
      <motion.h2 animate={{
        fontSize: 60
      }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;