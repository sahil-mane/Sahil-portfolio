import { SOCIAL_MEDIA_LINKS } from "../constants"
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex justify-center items-center">
            <motion.figure
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5,delay:1}}
            >
                <h2 className="text-4xl font-bold tracking-wider">SAHIL MANE</h2>
                <div className="bg-yellow-400 h-3 w-14 rounded-br-xl"></div>
            </motion.figure>
        </div>
        <div className="flex justify-center items-center gap-8">
            {SOCIAL_MEDIA_LINKS.filter(data => data.href != "").map((link,index)=>(
                <motion.a
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.2,delay:0.5 * index}} 
                key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </motion.a>
            ))}
        </div>
        <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
            &copy;SAHIL MANE. All rights reserved.
        </p>
    </div>
  )
}

export default Footer