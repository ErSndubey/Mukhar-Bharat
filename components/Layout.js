import Header from './Header';
import '../app/globals.css';
const Layout = ({ children }) => {
  return (
    <div className='overflow-hidden '>
      <Header />
      <main>{children}</main>
      {/* footer or other common elements here */}
    </div>
  );
};

export default Layout;
