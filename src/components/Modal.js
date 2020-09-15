import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0
    }
}

const modalVariants = {
    init: {
        y: '-100vh',
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 3,
            delay: 0.7
        }
    },
    exit: {
        opacity: 0
    }
}

const Modal = ({showModal, setShowModal = () => {}}) => {
    return (
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
            {showModal && (
                <motion.div 
                    className="backdrop"
                    variants={backdrop}
                    animate="visible"
                    exit="hidden"
                    initial="hidden"
                >
                    <motion.div
                        variants={modalVariants} 
                        className="modal"
                        initial="init"
                        animate="animate"
                        exit="exit"
                    >
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button onClick={() => setShowModal(false)}>
                                Start again
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;