import React, { useEffect, useState } from 'react'
import ProductModal from '../Components/ProductModal'
import axios from 'axios'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { AppRoute } from '../../App'

export default function Products() {
    const [products, setProducts] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios.get(`${AppRoute}api/allproducts`)
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.log(error));
    }

    const deleteproduct = (_id) => {
        axios.delete(`${AppRoute}api/deleteproduct/${_id}`)
            .then(response => {
                console.log(response.data.products);
                setProducts(prevProduct => prevProduct.filter(Product => Product._id !== _id));
            })
            .catch(error => {
                console.error('Error deleting Product:', error);
            });
    };


    const updateProduct = (_id, newData) => {
        axios.put(`${AppRoute}api/updateproduct`, { _id, ...newData })
            .then(() => {
                fetchProducts();
                setSuccessMessage('Product updated successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000); // Display for 3 seconds
            })
            .catch((error) => {
                console.log('Axios Error:', error);
                console.log('Response Data:', error.response.data);
                console.log('Response Status:', error.response.status);
                console.log('Response Headers:', error.response.headers);
            });
    };
    const styling = {
        backgroundImage: `url(${`https://img.freepik.com/free-photo/room-made-brick-wall-wooden-floor_53876-147523.jpg`})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: `white`,
      };
    return (
        <div className="row m-0 p-0 " style={styling}>
             <div className="container-fluid" >
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: 'rgb(195 152 92)' }}>
                        <span className='fs-4 fw-bold text-black'>Products</span>
                        <ProductModal reCallToData={setProducts} />
                    </div>

                    <div className="container">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map((val, key) =>
                                        <tr key={key}>
                                            <td><img src={val.thumbnail} className='img-fluid rounded-square border border-secondary' style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }} alt="" srcSet="" /></td>
                                            <td>{val.productName}</td>
                                            <td>{val.category}</td>
                                            <td>{val.brand}</td>
                                            <td>{val.price}</td>
                                            <td>{val.description?.length < 20 ? val.description : val.description?.substring(0, 20) + "..."}</td>
                                            <td className='d-flex justify-content-between'>
                                                <button className="btn btn-dark mx-1" style={{ width: '50px' }} onClick={() => {
                                                    const newCategoryName = prompt('Enter new Product Name:', val.title || val.productName);
                                                    const newCategoryImage = prompt('Enter new Product Image URL:', val.thumbnail);
                                                    const newProductCategory = prompt('Enter new Product category name:', val.category);
                                                    const newProductBrand = prompt('Enter new Brand name:', val.brand);
                                                    const newProductPrice = prompt('Enter new Price:', val.price);
                                                    const newProductDes = prompt('Edit your Description:', val.description);
                                                    if (newCategoryName && newCategoryImage && newProductCategory && newProductBrand && newProductPrice && newProductDes) {
                                                        updateProduct(val._id, {
                                                            productName: newCategoryName,
                                                            thumbnail: newCategoryImage,
                                                            category: newProductCategory,
                                                            brand: newProductBrand,
                                                            price: newProductPrice,
                                                            description: newProductDes,
                                                        });
                                                    }
                                                }} >
                                                    <BsPencilSquare />
                                                </button>
                                                <button className="btn btn-dark" onClick={() => deleteproduct(val._id)}><AiOutlineDelete /></button>
                                            </td>



                                        </tr>)
                                }



                            </tbody>
                        </table>

                    </div>
                </div>
                </div>
        </div>
    )
}