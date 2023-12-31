import { Navbar } from '../components'; // Import the Navbar component
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
      <Navbar /> {/* Include the Navbar component */}
      {children}
    </body>
  </html>
);

export default RootLayout;
