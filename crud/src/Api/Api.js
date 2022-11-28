import axios from 'axios';

const API_URL = "http://127.0.0.1:3002/Agendas";

export const addAgenda = async (data) => {
  try {
    return await axios.post(API_URL, data);
  }
  catch (error) {
    console.log("Error while calling addAgendas api", error.message);
  }
}

export const getAgendas = async () => {
  try {
    return await axios.get(API_URL);
  }
  catch (error) {
    console.log("Error while calling getAgendas api", error.message);
  }
}


export const getAgenda = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  }
  catch (error) {
    console.log("Error while calling getAgenda api", error.message);
  }
}


export const editAgenda = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  }
  catch (error) {
    console.log("Error while calling editAgenda api", error.message);
  }
}



export const deleteAgenda = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  }
  catch (error) {
    console.log("Error while calling deleteAgenda api", error.message);
  }
}