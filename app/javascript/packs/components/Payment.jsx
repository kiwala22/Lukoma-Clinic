import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Payment = (props) => {

  const payment = props.payment;
  const position = (props.position + 1);


  return (
    <tr>
      <td>{position}</td>
      <td>{payment.patient_name}</td>
      <td>{payment.amount}</td>
      <td>{payment.reason}</td>
      <td>{payment.doctor_name}</td>
      <td><Moment format="D MMM YYYY">{payment.created_at}</Moment></td>
    </tr>
  )
}

export default Payment;
