import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { AppRoute } from '../../App';

function U_CategoryModal({ categoryId, categoryName, categoryImage, onUpdate }) {
  const [newCategoryName, setNewCategoryName] = useState(categoryName);
  const [newCategoryImage, setNewCategoryImage] = useState(categoryImage);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = () => {
    const updatedCategory = {
      CategoryName: newCategoryName,
      CategoryImage: newCategoryImage,
    };

    axios
      .put(`${AppRoute}api/updatecategory/${categoryId}`, updatedCategory)
      .then((response) => {
        onUpdate(response.data.categories); // Check if this updates parent state
        console.log(updatedCategory); // Log the updated category data
        handleClose(); // Close the modal
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <button className="btn btn-light mx-1" onClick={handleShow}>
        Update
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="newCategoryName" className="form-label">
              New Category Name
            </label>
            <input
              type="text"
              className="form-control"
              id="newCategoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newCategoryImage" className="form-label">
              New Category Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="newCategoryImage"
              value={newCategoryImage}
              onChange={(e) => setNewCategoryImage(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default U_CategoryModal;
