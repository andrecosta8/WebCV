import axios from "axios";

const API_BASE_URL = "http://localhost:5000/";

//EDUCATION
export const getAllEducation = async () => {
    return await axios.get(`${API_BASE_URL}education`);
  };

  //EXPERIENCE
export const getAllExperience = async () => {
    return await axios.get(`${API_BASE_URL}experience`);
  };

  //CONTACTS
export const getAllContacts = async () => {
    return await axios.get(`${API_BASE_URL}contacts`);
  };