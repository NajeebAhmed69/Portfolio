// ImageSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from "../RevealOnScroll";

const Image = () => {
    return (

        <RevealOnScroll>

<motion.section 
            className="min-h-screen flex items-center justify-center bg-black"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img 
                src="/najeeb.jpg" 
                alt="Profile" 
                className="w-80 h-80 rounded-full object-cover border-4 border-[#6f6c6c] shadow-lg"
            />
        </motion.section>



        </RevealOnScroll>
    );
};

export default Image;
