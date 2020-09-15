import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
 
const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

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

  const nextButtonVariants = {
    'away': {
      x : '-100vw'
    },
    'visible': {
      x: 0,
      transition: {duration : 1.2, delay : 0.5, stiffness: 300}
    }
  }

  return (
    <motion.div 
      variants={containerVariants}  
      initial="hidden"
      animate="visible"
      exit="exit"
      className="base container"
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li 
              key={base} 
              onClick={() => addBase(base)}
              whileHover = {{
                color: 'yellow', scale : 1.3, originX: 0
              }}
              transition = {{duration : 0.2}}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextButtonVariants}
          initial = 'away'
          animate = 'visible'
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover = {{
                scale: 1.1,
                boxShadow: '0px 0px 8px rgb(255, 255, 255)',
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;