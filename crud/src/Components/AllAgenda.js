import React, { useEffect, useState } from 'react';
import { getAgendas, deleteAgenda } from '../Api/Api';
import { NavLink } from 'react-router-dom';

const AllAgenda = () => {
  const [agendas, setagendas] = useState([])
  useEffect(() => {
    getAgendasDetails();
  }, [])

  const getAgendasDetails = async () => {
    let res = await getAgendas();
    setagendas(res.data)
  }

  const deleteAgendaData = async (id) => {
    await deleteAgenda(id);
    getAgendasDetails()
  }
  return (
    <div className="table-responsive ">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Agenda Name</th>
            <th>Agenda Objective</th>
            <th>Agenda Location</th>
            <th>Time</th>
            <th>Host</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
          {
            agendas.map((agenda, index) => (
              <>
                <tr className='text-light'>
                  <td>{agenda.id}</td>
                  <td>{agenda.name}</td>
                  <td>{agenda.obj}</td>
                  <td>{agenda.location}</td>
                  <td>{agenda.time}</td>
                  <td>{agenda.host}</td>
                  <td><NavLink className="btn btn-primary" to={`/edit/${agenda.id}`}>Edit</NavLink></td>
                  <td><button className="btn btn-danger" onClick={() => {
                    deleteAgendaData(agenda.id)
                  }}>Delete</button></td>
                  </tr>
               

              </>
            ))
          }
        </tbody>
      </table>


    </div>
  )
}

export default AllAgenda