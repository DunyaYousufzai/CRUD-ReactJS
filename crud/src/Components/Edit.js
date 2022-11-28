import React, { useState, useEffect } from 'react';
import { getAgenda, editAgenda } from '../Api/Api';
import { useNavigate, useParams } from 'react-router-dom';

const INITIAL_VALUES = {
  name: "",
  obj: "",
  location: "",
  time: "",
  host: "",
}

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAgendaData();
  }, [])

  const getAgendaData = async () => {
    let res = await getAgenda(id);
    setagenda(res.data);
  }

  const [agenda, setagenda] = useState(INITIAL_VALUES);
  const onValueChange = (e) => {
    setagenda({ ...agenda, [e.target.name]: e.target.value })
    // console.log(agenda)
  }

  const editAgendaDetails = async (event) => {
    event.preventDefault();
    await editAgenda(agenda, id);
    navigate("/")
  }

  return (
    <>
      <h1 className='text-warning'> Edit Agenda</h1>
      <form className='formControl' onSubmit={editAgendaDetails}>
        <label className="form-label text-light" htmlFor="name">Agenda Name</label>
        <input className="form-control" type='text' id="name" required onChange={(e) => onValueChange(e)} name="name" value={agenda.name} />

        <label className="form-label text-light" htmlFor="obj">Agenda Objective</label>
        <input className="form-control" type='text' required id="obj" onChange={(e) => onValueChange(e)} name="obj" value={agenda.obj} />

        <label className="form-label text-light" htmlFor="location">Agenda Location</label>
        <input className="form-control $gray-200" required type='text' id="location" onChange={(e) => onValueChange(e)} name="location" value={agenda.location} />

        <label className="form-label text-light" htmlFor="date">Time</label>
        <input className="form-control" required type='date' id="date" placeholder="mm/dd/yyyy" pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => onValueChange(e)} name="time" value={agenda.time} />

        <label className="form-label text-light" htmlFor="host">Host</label>
        <input className="form-control" required type='text' id="host" onChange={(e) => onValueChange(e)} name="host" value={agenda.host} />

        <input className="form-control mt-4 btn btn-primary" type='submit' value="Edit Agenda" />
      </form>
    </>
  )
}

export default Edit;