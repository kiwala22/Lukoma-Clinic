import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { AlertList, AlertContainer } from "react-bs-notifier";
import setAxiosHeaders from './AxiosHeaders';
import Select from 'react-select';

const PaymentForm = (props) => {

  const [show, setShow] = useState(false);
  const [reports, setReports] =  useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const amount = React.createRef();
  const reason = React.createRef();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    axios.get("/get_medical_reports")
      .then(response => {
        const reps = response.data;
        const newArr = [];
        reps.map(option => {
          newArr.push({value: option.id, label: option.patient_name})
        })
        setReports(newArr);
      })

    setShow(true);
  };

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAxiosHeaders();
    axios.post("/payments", {
      payment: {
        medical_report_id: selectedValue,
        amount: amount.current.value,
        reason: reason.current.value
      }
    })
      .then(response => {
        const payment = response.data;
        props.createPayment(payment);
      })
      .catch(error => {
        console.log(error);
      })

    e.target.reset();
    handleClose();
  }

  return (
    <>
      <div className="content-heading">
        <div>Payments</div>
        <div className="ml-auto">
          <Button variant="outline-success" onClick={handleShow}>
            Payment
          </Button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}>
       <Modal.Header closeButton closeLabel="Remove">
        <Modal.Title><h3>New Payment</h3></Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <form onSubmit={handleSubmit} className="my-3">
         <div className="form-group">
            <label className="text-muted"><strong>Patient</strong></label>
            <Select
              placeholder="Select Patient..."
              value={reports.find(obj => obj.value === selectedValue)} // set selected value
              options={reports} // set list of the data
              onChange={handleChange} // assign onChange function
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Amount</strong></label>
            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder="Amount"
              ref={amount}
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Reason</strong></label>
            <textarea
              rows="8"
              type="text"
              name="reason"
              className="form-control"
              placeholder="Reason"
              ref={reason}
            />

         </div>
          <div className="form-group">
            <button className="btn btn-outline-success btn-block">
              Submit Payment
            </button>
          </div>
        </form>
       </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentForm;
