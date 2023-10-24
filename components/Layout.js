import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* You can include a footer or other common elements here */}
    </div>
  );
};

export default Layout;
