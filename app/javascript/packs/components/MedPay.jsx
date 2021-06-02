import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { AlertList, AlertContainer } from "react-bs-notifier";
import setAxiosHeaders from './AxiosHeaders';
import Select from 'react-select';
import ErrorMessage from './ErrorMessage';

const MedPay = (props) => {

  const [show, setShow] = useState(false);
  const [reports, setReports] =  useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [successDisplay, setSuccessDisplay] = useState(false);
  const [errorDisplay, setErrorDisplay] = useState(false);
  const [selectedReason, setSelectedReason] = useState();
  const [selectedMethod, setSelectedMethod] = useState();
  const [reasons, setReasons] = useState([{value: "Lab Tests", label: "Lab Tests"}, {value: "Medication", label: "Medication"}, {value: "Consultation", label: "Consultation"}]);
  const [methods, setMethods] = useState([{value: "Mobile Money", label: "Mobile Money"},{value: "Cash", label: "Cash"}]);

  const options = props.medicalReport;


  const amount = React.createRef();
  // const reason = React.createRef();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    // axios.get("/get_medical_reports")
    //   .then(response => {
    //     const reps = response.data;
    //     const newArr = [];
    //     reps.map(option => {
    //       newArr.push({value: option.id, label: option.patient_name})
    //     })
    //     setReports(newArr);
    //   })

    const newArr = [];
    options.map(option => {
      newArr.push({value: option.id, label: option.patient_name})
    })
    setReports(newArr);
    setShow(true);
  };

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
  }

  // handle onChange event for the selected reason
  const handleReasonChange = (e) => {
    setSelectedReason(e.value);
  }

  // handle onChange event for the selected method
  const handleMethodChange = (e) => {
    setSelectedMethod(e.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setAxiosHeaders();
    axios.post("/payments", {
      payment: {
        medical_report_id: selectedValue,
        amount: amount.current.value,
        reason: selectedReason,
        payment_method: selectedMethod
      }
    })
      .then(response => {
        const payment = response.data;
        props.createPayment(payment);
        setSuccessDisplay(true);
        setTimeout(() => {clearErrors()}, 6000);
      })
      .catch(error => {
        setErrorDisplay(true);
        setTimeout(() => {clearErrors()}, 6000);
      })

    e.target.reset();
    handleClose();
  }

  return (
    <>
      {successDisplay && <ErrorMessage errorMessage={"Success"} />}
      {errorDisplay && <ErrorMessage errorMessage={"Error"} />}
      <Button variant="outline-success" onClick={handleShow}>
        Pay
      </Button>
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
            <label className="text-muted"><strong>Patient <span style={{color: "red"}}>*</span></strong></label>
            <Select
              placeholder="Select Patient..."
              value={reports.find(obj => obj.value === selectedValue)} // set selected value
              options={reports} // set list of the data
              onChange={handleChange} // assign onChange function
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Amount <span style={{color: "red"}}>*</span></strong></label>
            <input
              type="number"
              name="amount"
              className="form-control"
              placeholder="Amount"
              ref={amount}
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Reason <span style={{color: "red"}}>*</span></strong></label>
            <Select
              placeholder="Select Reason..."
              value={reasons.find(obj => obj.value === selectedReason)} // set selected value
              options={reasons} // set list of the data
              onChange={handleReasonChange} // assign onChange function
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Payment Method <span style={{color: "red"}}>*</span></strong></label>
            <Select
              placeholder="Select Method..."
              value={methods.find(obj => obj.value === selectedMethod)} // set selected value
              options={methods} // set list of the data
              onChange={handleMethodChange} // assign onChange function
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

export default MedPay;
