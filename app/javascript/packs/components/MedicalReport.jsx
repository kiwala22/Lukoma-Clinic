import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const MedicalReport = (props) => {

  const medicalReport = props.medicalReport;
  const position = (props.position + 1);


  return (
    <tr>
      <td>{position}</td>
      <td>{medicalReport.patient_name}</td>
      <td>{medicalReport.amount_paid}</td>
      <td>diagnosis</td>
      <td>result</td>
      <td>prescription</td>
      <td>conclusion</td>
      <td>{medicalReport.doctor_name}</td>
      <td>{medicalReport.paid}</td>
      <td><Moment format="D MMM YYYY">{medicalReport.created_at}</Moment></td>
      <td>Button PAY</td>
    </tr>
  )
}

export default MedicalReport;
