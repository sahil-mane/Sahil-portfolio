import { PROJECTS } from "../constants"
import Cards from "./Cards"
import {motion} from "framer-motion"

const containerVariants = {
  hidden:{opacity:0,y:-20},
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5,
      staggerChildren:0.4,
    },
  },
}

const itemVariants = {
  hidden:{opacity:0,y:0.8},
  visible:{opacity:1,scale:1,transition:{duration:0.5}}
}

const Projects = () => {
  return (
    <div id="projects" className="max-w-6xl mx-auto">
        <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}
        className="mt-20 text-center text-4xl font-semibold"
        >Projects</motion.h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}
        className="grid lg:grid-cols-3 grid-cols-1 py-8 ">
            {PROJECTS.map((project,index)=>(
                <motion.div
                variants={itemVariants} 
                key={index}>
                    <Cards image={project.image} githubUrl={project.githubUrl} liveUrl={project.liveUrl} title={project.title} subtitle={project.subtitle} />
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Projects