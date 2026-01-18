import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const timelineData = {
    education: [
      {
        year: "2020 - 2023",
        title: "Bachelor's in Computer Application",
        institution: "Tilak Maharashtra vidyapeeth",
        description:"secured 7.28 CGPA "        
      },
      {
        year: "2018 - 2020",
        title: "Maharashtra Board - HSC(Higher Secondary Certification)",
        institution: "Sardar Vallabhbhai Patel Vidyalaya and Jr. College",
        description: "secured 57.86%"
      }
    ],
    experience: [
      {
        year: "JAN 2024 - PRESENT",
        title: "Junior MERN Stack Developer",
        company: "Binnys Jewellery Pvt Ltd",
        description: "Developed a role-based web application with performance tracking and admin/sales dashboards."
      },
      {
        year: "JULY 2023 - MARCH 2024",
        title: "Junior Software Engineer",
        company: "Capritech Global Private Limited",
        description: "Designing and developing modern web applications using Next.js."
      },
      
    ]
  };

  return (
    <div className="max-w-6xl mx-auto" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="mb-4 border-gray-200 dark:border-gray-700">
        <motion.ul
        initial={{opacity: 0,x: -100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
          className="flex flex-wrap justify-center -mb-px text-xl font-medium text-center"
          role="tablist"
        >
          {['education', 'experience'].map((tab) => (
            <li key={tab} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-4 ${
                  activeTab === tab
                    ? 'text-yellow-400 border-yellow-400 '
                    : 'hover:text-yellow-400 hover:border-yellow-400 '
                }`}
                onClick={() => setActiveTab(tab)}
                type="button"
                role="tab"
                aria-controls={tab}
                aria-selected={activeTab === tab}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </motion.ul>
      </div>

      <div id="default-tab-content" className='mx-2'>
        {activeTab === 'education' && (
          <motion.div
            key="education"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-950"
            id="education"
            role="tabpanel"
          >
            <div className="timeline">
              {timelineData.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h3 className="text-lg font-semibold text-white">{item.year}</h3>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <h5 className="text-md font-medium text-white ">{item.institution}</h5>
                  <h6 className='text-md text-white'>{item.description}</h6>                  
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        {activeTab === 'experience' && (
          <motion.div
            key="experience"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="p-4 rounded-lg bg-gradient-to-b from-zinc-900 to-zinc-950"
            id="experience"
            role="tabpanel"
          >
            <div className="timeline">
              {timelineData.experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6 space-y-2"
                >
                  <h3 className="text-lg font-semibold text-white">{item.year}</h3>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <h5 className="text-md font-medium text-white ">{item.company}</h5>
                  <p className="text-sm text-white ">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience;
