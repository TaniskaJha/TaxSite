import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant, } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-start items-start gap-3 ">
        <div className="flex-1">
          <motion.button
            className="w-[30%] h-[45px] text-blue-500 rounded-full bg-white border-2 border-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GO TO SECTION
          </motion.button>

          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} mb-24`}>
            <span className="cis">Your Trusted</span>
            <span className="iq"> Tax</span>
            <span className="cis"> Advisor</span>
          </motion.h1>

          <div className="relative flex flex-col gap-3 mt-2">
            {/* GST SEARCH */}
            <div className="relative flex flex-col gap-2 mt-2">
              <motion.button
                className="relative w-[70%] h-[60px] font-bold rounded-full bg-white border-2 border-black "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ zIndex: 1 }}
              >
                <span
                  style={{
                    color: '#6E747B',
                    fontFamily: 'Space Grotesk',
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                  }}
                >
                  GST SEARCH
                </span>
                <div className="pink-blur"></div>
              </motion.button>
              <motion.div>
                <motion.img
                  src="/pink.png"
                  alt="Pink"
                  className="absolute top-[-20px] left-[-20px] w-12 h-12 ml-1 z-0"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </div>

            {/* COMPANY SEARCH */}
            <div className="relative flex flex-col gap-2 mt-2">
              <motion.button
                className="relative w-[70%] h-[60px] font-bold rounded-full bg-white border-2 border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ zIndex: 1 }}
              >
                <span
                  style={{
                    color: '#6E747B',
                    fontFamily: 'Space Grotesk',
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                  }}
                >
                  COMPANY SEARCH
                </span>
                <div className="purple-blur"></div>
              </motion.button>
              <motion.div>
                <motion.img
                  src="/purple.png"
                  alt="Pink"
                  className="absolute top-[-20px] left-[-20px] w-12 h-12 ml-1 z-0"
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
            </div>

            {/* BUY SERVICES */}
            <div className="relative flex flex-col gap-2 mt-2">
              <motion.button
                className="relative w-[70%] h-[60px] font-bold rounded-full bg-white border-2 border-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ zIndex: 1 }}
              >
                <span
                  style={{
                    color: '#6E747B',
                    fontFamily: 'Space Grotesk',
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                  }}
                >
                  BUY SERVICES
                </span>
                <div className="blue-blur"></div>
              </motion.button>
              <motion.div>
                <motion.img
                  src="/blue.png"
                  alt="Pink"
                  className="absolute top-[-20px] left-[-20px] w-12 h-12 ml-1 z-0"
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
            </div>
          </div>
        </div>

        <motion.div className="relative w-full md:-mt-[1px] -mt-[2px] flex w-1/2 justify-end">
          <video
            autoPlay
            loop
            muted
            className="sm:h-[470px] w-[1000px] object-cover z-10 relative"
            style={{ marginTop: '50px' }}
          >
            <source src="/mapmv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Grey button */}
          <motion.button
            className="w-[200px] h-[105px] rounded-full bg-gray-500 border-2 border-blue-500 relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: '37px',
              backdropFilter: 'blur(15px)',
              boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
              position: 'absolute',
              bottom: '2%',
              right: '42%',
              zIndex: 10,
            }}
          >
            <h3 style={{ marginTop: '-8px', marginBottom: '9px', color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>
              LEADING WORLDWIDE
            </h3>
            <p style={{ color: '#fff', fontSize: '11px', textAlign: 'center', fontWeight: '400' }}>
              Hire in just 72 hours. Scale your team up-and-down from month-to-month as needed.
            </p>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
