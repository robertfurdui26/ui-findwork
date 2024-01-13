import React, { useState } from 'react';
import axios from 'axios';

const CreateConstruction = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [createConstruction, setCreateConstruction] = useState(null);

  const handleCreateConstruction = async () => {
    try {
      const formData = new FormData();
      formData.append('serviceName', serviceName);
      formData.append('description', description);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('imageFile', imageFile);

      const response = await axios.post('http://localhost:8080/construction/addCons', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCreateConstruction(response.data);
    } catch (error) {
      console.error('Error creating construction', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card-create bg-dark text-white">
        <div className="card-body-create">
          <h1 className="card-title-create">Create a Construction</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="serviceName" className="form-label">
                Service Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="serviceName"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="imageFile" className="form-label">
                Image File:
              </label>
              <input
                type="file"
                className="form-control"
                id="imageFile"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </div>

            <button type="button" className="btn btn-black" onClick={handleCreateConstruction}>
              Create Construction
            </button>
          </form>

          {createConstruction && (
            <div className="mt-4 bg-primary text-white p-4 rounded">
              <h2>Construction Created</h2>
              <p className="mb-1">Service Name: {createConstruction.serviceName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateConstruction;
