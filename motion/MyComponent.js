import React from "react";
import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div   drag="x"
                dragConstraints={{ left: -100, right: 100 }} style={{backgroundColor: 'red', height: 100, width: 100}} />
);
export default MyComponent;
