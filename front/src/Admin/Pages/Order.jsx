import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppRoute } from '../../App';

export default function Orders() {
  const [orders, setOrders] = useState([]);



  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get(`${AppRoute}api/all-orders`)
      .then((response) => {
        console.log(response.data);
        setOrders(response.data.orders);
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-2 p-2 rounded" style={{ backgroundColor: 'rgb(195 152 92)' }}>
        <span className="fs-4 fw-bold text-black">Orders</span>
      </div>
      <div className="container">

        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Cust Name</th>
              <th scope="col">Cust Email</th>
              <th scope="col">Cust Address</th>
              <th scope="col">Cust Contact</th>
              <th scope="col">Total Bill</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <th scope="row">{index + 1}</th>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.customerAddress}</td>
                <td>{order.customerContact}</td>
                <td>{order.totalBill}$</td>


              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>);
}


