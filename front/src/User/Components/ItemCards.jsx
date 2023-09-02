import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/addtoCart/context';

export default function ItemCards({ data }) {

  const { cart_state, cart_dispatch } = useContext(CartContext)

  return (


    <Card>

      <Card.Img variant="top" src={data.thumbnail} style={{ height: '15vh', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title className='text-uppercase d-flex justify-content-between mt-3'>
          <span>  {data.productName} </span>  <span className="badge bg-secondary">{data.price}$</span>
        </Card.Title>
        <Card.Text>
          {data.description?.length > 50 ? (data.description.substring(0, 50) + "...") : (data.description)}
          {/* {data.description} */}
        </Card.Text>
        <button className='btn btn-danger'
          onClick={
            () => cart_dispatch({
              type: "REMOVE_ITEM",
              payload: {
                id: data._id
              }
            })}
        >
          Remove
        </button>
      </Card.Body>
    </Card>

  );
}



