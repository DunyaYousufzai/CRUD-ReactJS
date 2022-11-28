import React, { useState } from 'react';
import { addAgenda } from '../Api/Api';
import { useNavigate } from 'react-router-dom';



const INITIAL_VALUES = {
  name: "",
  obj: "",
  location: "",
  time: "",
  host: "",
}

const AddAgenda = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();
  const [agenda, setagenda] = useState(INITIAL_VALUES);
  const onValueChange = (e) => {

    setagenda({ ...agenda, [e.target.name]: e.target.value })
    console.log(agenda)
  }

  const addAgendaDetails = async (event) => {
    event.preventDefault();
    await addAgenda(agenda);
    navigate("/")
  }

  return (
    <div className='mb-3'>
      <h1 className='text-warning'> Add Agenda</h1>
      <form onSubmit={addAgendaDetails}>
        <div>
          <label htmlFor="name" className="form-label text-light">Agenda Name</label>
          <input
            type='text'
            id="name"
            required
            className="form-control form-control-lg"
            onChange={(e) => onValueChange(e)} name="name" />

          <label htmlFor="obj" className="form-label text-light">Agenda Objective</label>
          <input
            type='text'
            id="obj"
            required
            className="form-control form-control-lg"
            onChange={(e) => onValueChange(e)} name="obj" />

          <label htmlFor="location" className="form-label text-light">Agenda Location</label>
          <input
            type='text'
            id="location"
            required
            className="form-control form-control-lg"
            onChange={(e) => onValueChange(e)} name="location" />


          <label htmlFor="date" className="form-label text-light">Time</label>
          <input
            type='date'
            id="date"
            required
            className="form-control form-control-lg"
            placeholder="yyyy/mm/dd"
            onChange={(e) => onValueChange(e)}
            name="time" />


          <label htmlFor="host" className="form-label text-light">Host</label>
          <input
            type='text'
            id="host"
            className="form-control form-control-lg"
            required
            onChange={(e) => onValueChange(e)}
            name="host" />
        </div>

        <input type='submit' className="form-control mt-4 btn btn-primary" value="Add Agenda" />
      </form>




    </div>
  )
}

export default AddAgenda;




