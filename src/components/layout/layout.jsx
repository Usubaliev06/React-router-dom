import { Outlet } from 'react-router-dom';
import { Footer } from '../footer/footer.jsx'
import { Nav } from '../nav/nav.jsx'
import './layout.css'

export const Layout = () => {
  return (
    <div>
      <Nav />

      <div className='content'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}


