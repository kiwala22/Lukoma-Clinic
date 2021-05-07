import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Alert } from 'react-bootstrap';
import { AlertList, AlertContainer } from "react-bs-notifier";
import setAxiosHeaders from './AxiosHeaders';
import Select from 'react-select';

const MedicalReportForm = (props) => {

  const [show, setShow] = useState(false);
  const [patients, setPatients] =  useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [diagnosis, setDiagnosis] = useState([""]);
  const [result, setResult] = useState([""]);
  const [prescription, setPrescription] = useState([""]);
  const conclusion = React.createRef();


  const createDiagnosisUI = () => {
    const trs = diagnosis.map((tr, i) =>
      <div key={i}>
         <br/>
         <input type="text" name="diagnosis" value={tr} className="form-control" placeholder="Diagnosis" onChange={() => diagnosisChange(i)}/><br/>
         <input type='button' value='Remove Field' className="btn btn-outline-danger btn-block btn-sm" onClick={() => removeDiagnosisClick(i)}/>
      </div>
    );
    return (
      trs
    )
  }

  const createResultUI = () => {
    const trs = result.map((tr, i) =>
      <div key={i}>
         <br/>
         <input type="text" name="result" value={tr} className="form-control" placeholder="Result" onChange={() => resultChange(i)}/><br/>
         <input type='button' value='Remove Field' className="btn btn-outline-danger btn-block btn-sm" onClick={() => removeResultClick(i)}/>
      </div>
    );
    return (
      trs
    )
  }

  const createPrescriptionUI = () => {
    const trs = prescription.map((tr, i) =>
      <div key={i}>
         <br/>
         <input type="text" name="prescription" value={tr} className="form-control" placeholder="Prescription" onChange={() => prescriptionChange(i)}/><br/>
         <input type='button' value='Remove Field' className="btn btn-outline-danger btn-block btn-sm" onClick={() => removePrescriptionClick(i)}/>
      </div>
    );
    return (
      trs
    )
  }

  const diagnosisChange = (i, e) => {
    let newArr = [...diagnosis];
    newArr[i] = event.target.value;
    setDiagnosis(newArr);
  }

  const addDiagnosisClick = () => {
    let newArr = [...diagnosis, ''];
    setDiagnosis(newArr);
  }

  const removeDiagnosisClick = (i) => {
    let newArr = [...diagnosis];
     newArr.splice(i, 1);
     setDiagnosis(newArr);
  }

  const resultChange = (i, e) => {
    let newArr = [...result];
    newArr[i] = event.target.value;
    setResult(newArr);
  }

  const addResultClick = () => {
    let newArr = [...result, ''];
    setResult(newArr);
  }

  const removeResultClick = (i) => {
    let newArr = [...result];
     newArr.splice(i, 1);
     setResult(newArr);
  }

  const prescriptionChange = (i, e) => {
    let newArr = [...prescription];
    newArr[i] = event.target.value;
    setPrescription(newArr);
  }

  const addPrescriptionClick = () => {
    let newArr = [...prescription, ''];
    setPrescription(newArr);
  }

  const removePrescriptionClick = (i) => {
    let newArr = [...prescription];
     newArr.splice(i, 1);
     setPrescription(newArr);
  }

  const handleClose = () => setShow(false);

  const handleShow = () => {
    axios.get("/get_patients_data")
      .then(response => {
        const pats = response.data;
        const newArr = [];
        pats.map(option => {
          newArr.push({value: option.id, label: option.full_name})
        })
        setPatients(newArr);
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
    axios.post("/medical_reports", {
      payment: {
        patient_id: selectedValue
      }
    })
      .then(response => {
        const medicalReport = response.data;
        props.createMedicalReport(medicalReport);
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
        <div>Medical Reports</div>
        <div className="ml-auto">
          <Button variant="outline-success" onClick={handleShow}>
            New Report
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
        <Modal.Title><h3>New Medical Report</h3></Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <form onSubmit={handleSubmit} className="my-3">
         <div className="form-group">
            <label className="text-muted"><strong>Patient</strong></label>
            <Select
              placeholder="Select Patient..."
              value={patients.find(obj => obj.value === selectedValue)} // set selected value
              options={patients} // set list of the data
              onChange={handleChange} // assign onChange function
             />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Diagnosis</strong></label>
              {createDiagnosisUI()}
             <br/>
             <input type='button' value='Add Diagnosis Field' className="btn btn-outline-success btn-block btn-sm" onClick={() => addDiagnosisClick()} />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Result</strong></label>
              {createResultUI()}
             <br/>
             <input type='button' value='Add Result Field' className="btn btn-outline-success btn-block btn-sm" onClick={() => addResultClick()} />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Prescription</strong></label>
              {createPrescriptionUI()}
             <br/>
             <input type='button' value='Add Prescription Field' className="btn btn-outline-success btn-block btn-sm" onClick={() => addPrescriptionClick()} />
         </div>
         <div className="form-group">
            <label className="text-muted"><strong>Conclusion</strong></label>
            <textarea
              rows="8"
              type="text"
              name="conclusion"
              className="form-control"
              placeholder="Conclusion"
              ref={conclusion}
            />

         </div>
          <div className="form-group">
            <button className="btn btn-outline-success btn-block">
              Submit Report
            </button>
          </div>
        </form>
       </Modal.Body>
      </Modal>
    </>
  );
}

export default MedicalReportForm;
