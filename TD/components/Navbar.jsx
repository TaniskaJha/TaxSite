import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-3 relative`}
  >
    <div className="absolute w-[100%] h-[88%] inset-0 gradient-black-black " />

    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center relative`}>
      <img
        src="/tdlogo.png"
        alt="menu"
        className="w-[80px] h-[99px] object-contain relative z-10"
        
       
      />

      <div className="container flex justify-end items-center gap-8">
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '130px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span className="cis">GST Search</span>
        </h2>
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '180px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span className="cis">Company Search</span>
        </h2>
        <h2 className="text-[20px] leading-[30.24px] text-black relative z-10" style={{
          width: '150px',
          height: '32px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '140%',
          letterSpacing: '0.23px',
        }}>
          <span className="cis">Buy Services</span>
        </h2>
        
        
       
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
          style={{
            borderRadius: '25px',
            background: '#207CBF',
            boxShadow: '0px 0px 35px 0px rgba(52, 204, 205, 0.35)',
            width: '137px',
            height: '40px',
            flexShrink: 0,
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
