import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

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

  return (
    <motion.div 
      className="toppings container"
      variants={containerVariants}  
      initial="hidden"
      exit="exit"
      animate="visible"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
        <button>
          Order
        </button>
      </Link>

    </motion.div>
  )
}

export default Toppings;