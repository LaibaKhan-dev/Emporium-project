import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/addtoCart/context';

function CheckoutPage() {
  const { cart_state } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    contact: '',
    // Other user information fields
  });



  const handleSubmit = () => {
    // Create a payload with user info and cart contents
    const payload = {
      userInfo,
      cart: cart_state.cart,

    };

    // Send payload to server or perform desired actions
    console.log(payload);
  };

  return (
    <div>
      {/* Display cart items */}
      {cart_state.cart.map((item) => (
        <div key={item._id}>
          {item.productName} - {item.totalPrice}$
        </div>
      ))}

      {/* User information form */}
      <input
        type="text"
        placeholder="Name"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      {/* Other input fields for address, contact, etc. */}


      {/* Submit button */}
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}

export default CheckoutPage;