import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '/public/profile.jpg'; // Replace with your image path

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-between px-12">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold">Hi, I am Aakash Subedi</h1>
        <motion.div
          className="text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          I’m a <span className="text-blue-500">Designer</span>, <span className="text-green-500">Developer</span>, <span className="text-purple-500">Coder</span>
        </motion.div>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Download My CV</button>
          {/* Social Media Icons */}
        </div>
        <motion.div
          className="text-xl"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p>Years of experience: 5+</p>
          <p>Projects completed: 20+</p>
          <p>Technologies mastered: 10+</p>
          <p>Code commits: 5000+</p>
        </motion.div>
      </div>
      <div>
        <Image src={profilePic} alt="Aakash Subedi" className="rounded-full w-64" />
      </div>
    </section>
  );
};

export default Hero;
