import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from '@components/NavbarAdmin/NavbarAdmin';
import UsersDash from '@components/Account/UsersDash';
import SalesDash from '@components/Account/SalesDash';
import ProductsDash from '@components/Account/ProductsDash';
import BlogDash from '@components/Account/BlogDash';
import ProvidersDash from '@components/Account/ProvidersDash';
import Account from '../Account/Account';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [activeSection, setActiveSection] = useState('providers');

  const backToAccountAction = () => {
    navigate('/account');
  };

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  if (user.rol !== 'admin') {
    return <Account />;
  } else {
    return (
      <div>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <NavbarAdmin
            activeButton={activeSection}
            handleButtonClick={handleButtonClick}
            user={user}
            backToAccountAction={backToAccountAction}
          />
          <div className="w-9/12" style={{ flex: '1' }}>
            {activeSection === 'products' && <ProductsDash />}
            {activeSection === 'sales' && <SalesDash />}
            {activeSection === 'users' && <UsersDash />}
            {activeSection === 'blog' && <BlogDash />}
            {activeSection === 'providers' && <ProvidersDash />}
            <footer style={{ textAlign: 'center', padding: '10px' }}></footer>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
