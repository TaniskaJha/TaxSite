import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const About = () => (
  <>
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <div className="flex justify-center items-center gap-2 ">
          <div className="flex-1 ">
            {/* Content */}
          </div>
        </div>

        <motion.div variants={staggerContainer} className="w-full h-[600px] mt-[8px] flex flex-row items-stretch justify-center gap-9 z-1">
          {/* White Box 1 */}
          <motion.div
            className="flex-1 bg-gray-200 p-6 h-full relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
            }}
          >
            <motion.div>
              <motion.img
                src="/pink.png"
                alt="Pink"
                className="absolute top-[-30px] left-[-20px] w-25 h-25 ml-1 "
                style={{ zIndex: -1 }}
                animate={{
                  rotate: 360, // Full rotation in degrees
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              />
            </motion.div>
            <div className="white-blur"></div>
            <h3 style={{ color: '#6E747B', fontFamily: 'Space Grotesk', fontSize: '37px', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>
              GST SEARCH
            </h3>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-500 rounded w-full p-2"
              />
              <div className=" h-10 w-19 bg-white border-gray-500 p-1 rounded">
                <img
                  src="pinksearch.png"
                  alt="Search Icon"
                  className="h-full"
                />
              </div>
            </div>
          </motion.div>
          
          {/* White Box 2 */}
          <motion.div
            className="flex-1 bg-gray-200 p-6 h-full relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
            }}
          >
            <motion.div>
              <motion.img
                src="/purple.png"
                alt="Purple"
                className="absolute top-[-30px] left-[-20px] w-25 h-25 ml-1 "
                style={{ zIndex: -1 }}
                animate={{
                  rotate: 360, // Full rotation in degrees
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              />
            </motion.div>
            <div className="white-blur"></div>
            <h3 style={{color: '#6E747B', fontFamily: 'Space Grotesk', fontSize: '37px', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>
              COMPANY SEARCH
            </h3>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-500 rounded w-full p-2"
              />
              <div className=" h-10 w-19 bg-white border-gray-500 p-1 rounded">
                <img
                  src="purplesearch.png"
                  alt="Search Icon"
                  className="h-full"
                />
              </div>
            </div>
          </motion.div>
          
          {/* White Box 3 */}
          <motion.div
            className="flex-1 bg-gray-200 p-6 h-full relative"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
            }}
          >
            <motion.div>
              <motion.img
                src="/blue.png"
                alt="Blue"
                className="absolute top-[-30px] left-[-20px] w-25 h-25 ml-1 "
                style={{ zIndex: -1 }}
                animate={{
                  rotate: 360, // Full rotation in degrees
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'linear',
                }}
              />
            </motion.div>
            <div className="white-blur"></div>
            <h3 style={{ color: '#6E747B', fontFamily: 'Space Grotesk', fontSize: '37px', fontWeight: 'bold', textAlign: 'center', margin: '0' }}>
              BUY SERVICES
            </h3>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="h-10 w-19 bg-white border-gray-500 p-1 rounded"
              />
              <div className=" h-10 w-19 bg-black p-1 rounded">
                <img
                  src="bluesearch.png"
                  alt="Search Icon"
                  className="h-full"
                />
              </div>
            </div>

            <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 1.2 }}
  className="w-full h-[450px] mt-[8px] flex flex-col items-stretch justify-center gap-8"
>
  <div className="bg-[#FB8D8F] text-white rounded-lg p-6 h-[100px] relative">
    <h3 style={{ marginTop: '-8px', marginBottom: '9px', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
      AUDIT
    </h3>
    <div className="absolute bottom-0 left-0 right-0 text-center bg-white text-black rounded-b-lg p-2">
      $5000
    </div>
  </div>
  
  <div className="bg-[#BFBFDF] text-white rounded-lg p-6 h-[100px] relative">
    <h3 style={{ marginTop: '-8px', marginBottom: '9px', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
      TAXATION
    </h3>
    <div className="absolute bottom-0 left-0 right-0 text-center bg-white text-black rounded-b-lg p-2">
      $3000
    </div>
  </div>
  
  <div className="bg-[#376a7b] text-white rounded-lg p-6 h-[100px] relative">
    <h3 style={{ marginTop: '-8px', marginBottom: '9px', color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>
      CERTIFICATION
    </h3>
    <div className="absolute bottom-0 left-0 right-0 text-center bg-white text-black rounded-b-lg p-2">
      $7000
    </div>
  </div>
</motion.div>





</motion.div>

        </motion.div>
      </motion.div>

      <div style={{ minHeight: '100vh' }}></div>
    </section>
    
  </>
);

export default About;
