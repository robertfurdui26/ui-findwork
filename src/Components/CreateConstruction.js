import React, { useState } from 'react';
import axios from 'axios';
import './CreateConstruction.css';

const CreateConstruction = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [createdConstruction, setCreatedConstruction] = useState(null);

  const handleCreateStudent = async () => {
    try {
      const response = await axios.post('http://localhost:8080/construction/addCons', {
        serviceName:serviceName,
        description:description,
        address:address,
        phone:phone
      });

      setCreatedConstruction(response.data);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  return (
    <div className="card-client-cons">
    <div className="">
      <div className="card-client-item-cons">
        <h1 className="card-title">Adauga o lucrarea de Constructie</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="serviceName" className="card-phone-cons">
             Cum se numeste lucrarea ta?:
            </label>
            <input
              type="text"
              className="form-control"
              id="serviceName"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
          </div>

          <div className="mb-3 ">
            <label htmlFor="description" className="card-phone-cons">
              Descrie ce trebuie facut pentru lucrea ta:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="card-address-cons">
              Introduce-ti adresa lucrari dvs:
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
            <label htmlFor="phone" className="card-phone-cons">
              Introduce-ti datele dvs de contact:
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          
          </div>

          <button
            type="button"
            onClick={handleCreateStudent}
          >
            Adauga Lucrare
          </button>
        </form>

        {createdConstruction && (
  <div className="">
    <h2>Lucrarea Adaugata</h2>
    <p className="mb-1">Name: {createdConstruction.serviceName}</p>
  </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default CreateConstruction;
