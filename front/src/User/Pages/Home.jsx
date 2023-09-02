import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const styling = {
    backgroundImage: `url(${`https://www.jegdesign.com/wp-content/uploads/2020/12/web-design-vermont.jpg`})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: `100%`,
    height: `100vh`,
    color: `white`,
  };

  return (
    <>
      <div style={styling} data-aos="zoom-in">
        <div className='position-absolute top-50 start-50 translate-middle '>
          <h1 className="display-3 text-black fw-bold" data-aos="fade-up">
            <b>Welcome To Our Store</b>
          </h1>
          <p className='text-black text-center fw-bold' data-aos="fade-up">
            Something from Your Wishlist
          </p>
          <div className="col-md-12 text-center">
            <button type='button' className='btn ' data-aos="zoom-in" style={{backgroundColor: 'rgb(195 152 92)', padding: '20px', borderRadius: '20px'}}>
              <Link className='nav-link' to="/Products">Lets Explore The World</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
