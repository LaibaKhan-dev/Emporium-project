import React, { useState } from 'react'
import CategoryModal from '../Components/CategoryModal'
import axios from 'axios'
import { useEffect } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/Ri'
import { AppRoute } from '../../App'

function AddCategory() {

    const [Category, setCategory] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get(`${AppRoute}api/getallcategories`)
            .then(json => {
                setCategory(json.data.Category);
            })
            .catch(err => alert(err.message))
    };

    const deleteProduct = (_id) => {
        axios.delete(`${AppRoute}api/deletecategory/${_id}`)
            .then(response => {
                console.log(response.data.categories);
                setCategory(prevCategory => prevCategory.filter(Category => Category._id !== _id));
            })
            .catch(error => {
                console.error('Error deleting category:', error);
            });
    };

    const updateCategoryById = (_id, newData) => {
        axios
            .put(`${AppRoute}api/updatecategory`, { _id, ...newData })
            .then((json) => {
                fetchCategories();
                setSuccessMessage('Category updated successfully');
                console.log('Category updated successfully')
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000); // Display for 3 seconds
                console.log(json.data)
            })
            .catch((error) => console.log(error));
    };
    const styling = {
        backgroundImage: `url(${`https://img.freepik.com/free-photo/room-made-brick-wall-wooden-floor_53876-147523.jpg`})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: `white`,
      };

    return (
        <>

            <div className="row m-0 p-0" style={styling}>
            <div className="container">
                        <div className="d-flex justify-content-between align-items-center p-2 my-3 rounded" style={{ backgroundColor: 'rgb(195 152 92)' }}>
                            <span className='fs-4 fw-bold text-black'> Category</span>
                            <CategoryModal reCallData={setCategory} />
                        </div>

                        <div className="container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Category Name</th>
                                        <th scope="col">Category Image</th>
                                        <th scope="col">Actions</th>


                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        Category?.map((val, key) =>
                                            <tr key={key}>
                                                <th scope="row">{val._id}</th>
                                                <td>{val.CategoryName}</td>
                                                <td><img src={val.CategoryImage} className='img-fluid' style={{ height: '8vh', objectFit: 'contain' }} /></td>
                                                <td>


                                                    {/* <U_CategoryModal  reCallData={setCategory} />   */}

                                                    <button
                                                        className="btn btn-dark mx-1" style={{ width: '50px' }}
                                                        onClick={() => {
                                                            const newCategoryName = prompt('Enter new Category Name:', val.CategoryName);
                                                            const newCategoryImage = prompt('Enter new Category Image URL:', val.CategoryImage);
                                                            if (newCategoryName && newCategoryImage) {
                                                                updateCategoryById(val._id, {
                                                                    CategoryName: newCategoryName,
                                                                    CategoryImage: newCategoryImage,
                                                                });
                                                            }
                                                        }}
                                                    >
                                                        <BsPencilSquare />
                                                    </button>
                                                    <button className='btn btn-dark mx-1' onClick={() => deleteProduct(val._id)}><RiDeleteBin5Line /></button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
        </>

    )
};

export default AddCategory