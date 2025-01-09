import { SKILLS } from "../constants"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 py-10 px-2 lg:px-20">
        {SKILLS.filter(data => data.experience != 0).map((skill, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="mb-8 flex items-center justify-between">
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 text-xl lg:text-3xl">{skill.name}</h3>
            </div>
            <div className="text-md  font-semibold lg:text-xl w-1/3">
              <span className="text-md text-gray-700">{`${10 * skill.experience}%`}</span>
              <div className="relative w-full bg-yellow-200 rounded-full h-4 mb-4">
                <div
                  className="absolute top-0 left-0 bg-yellow-400 h-4 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${10 * skill.experience}%` }}
                ></div>
              </div>
              {/* Optional: Add experience percentage */}
              
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills