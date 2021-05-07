import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import setAxiosHeaders from './AxiosHeaders';

const setElementsData = () => {

  const [patientsData, setPatientsData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);

  // Get Patients data
  const patients_data = () => {
    axios
      .get("/get_patients_data")
      .then(response => {
        const patients = response.data
        console.log(patients);
        setPatientsData(patients);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    patients_data();
  }, []);

  console.log(patientsData);

}

export default setElementsData;
