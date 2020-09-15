import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
    animationOne: {
        x: [-40, 40],
        y: [0, -190],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 1
            },
            y: {
                yoyo: Infinity,
                duration: 1,
                ease: 'easeOut'
            }
        }
    },
    animationTwo: {
        x: 0,
        y: [0, -150],
        transition: {
            y: {
                yoyo: Infinity,
                duration: 1,
                ease: 'easeOut'
            }
        }
    },
};  

const Loader = props => {

    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo")

    return (
        <>
            <motion.div 
                onClick={() => {
                    console.log("Clicked");
                    cycleAnimation()
                }}
                className="loader" 
                variants={loaderVariants}
                animate={animation}
            >
            </motion.div>
        </>
    );
};

export default Loader;