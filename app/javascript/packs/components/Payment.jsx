import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import PaymentInvoice from './PaymentInvoice';

const Payment = (props) => {

  const payment = props.payment;
  const position = (props.position + 1);
  const path = `/payments/${payment.id}`;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <tr>
      <td>{position}</td>
      <td>{payment.payment_reference}</td>
      <td>{payment.patient_name}</td>
      <td>{payment.amount}</td>
      <td>{payment.payment_method}</td>
      <td>{payment.reason}</td>
      <td>{payment.doctor_name}</td>
      <td><Moment format="D MMM YYYY">{payment.created_at}</Moment></td>
      <td>
        <div style={{ display: "none" }}><PaymentInvoice ref={componentRef} payment={payment} /></div>
        <Button variant="outline-success" onClick={handlePrint}>Print</Button>
      </td>
    </tr>
  )
}

export default Payment;
