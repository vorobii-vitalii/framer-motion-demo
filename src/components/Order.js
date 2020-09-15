import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Order = ({ pizza, setShowModal }) => {

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
  }


  const orderVariants = {
    'init': {
      opacity: 0,
      y : '100vh'
    },
    'anim': {
      opacity: 1,
      y  : 0,
      transition: {
        delay: 1,
        duration: 1.5
      }
    },
    exit: {
      x: '-100vw',
      transition: {
        ease: 'easeInOut', duration: 1.2
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);

  return (
    <motion.div 
      className="container order"
      variants={containerVariants}  
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      <motion.div variants={orderVariants} initial="init" animate="anim">
         {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;