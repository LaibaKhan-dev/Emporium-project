import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppRoute } from '../../App';


function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${AppRoute}api/allproducts`).then((json) => setProducts(json.data.products));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [products]);

  const styling = {
    backgroundImage: `url(${`https://img.freepik.com/free-photo/room-made-brick-wall-wooden-floor_53876-147523.jpg`})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: `white`,
  };

  return (
   <div className="container-fluid" style={styling}>
     <div className='container d-flex flex-wrap justify-content-between' >
      {products?.map((val, key) => (
        <div
          className='col-md-4 my-4'
          key={key}
          style={{ flex: '0 0 calc(33.333% - 1rem)', marginBottom: '1rem' }}
          data-aos={key % 2 === 0 ? 'zoom-in' : 'zoom-out'}
        >
          <Link className='text-decoration-none' to={`/products/${val._id}`}>
            <Card style={{ height: '100%' }}>
              <Card.Img variant='top' src={val.thumbnail} style={{ height: '50%', objectFit: 'cover' }} />
              <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                <Card.Title>{val.productName} - {val.price}$</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                </div>
                <Button style={{backgroundColor: 'rgb(195 152 92)', border: 'rgb(195 152 92)', padding: '20px'}}>See Products</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
      <style>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-img-top {
          height: 50%;
          object-fit: cover;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
   </div>
  );
}




export default Products;