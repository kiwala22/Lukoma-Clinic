import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import axios from 'axios';
import './assets/Lists.css';
import { Modal, Button, Alert } from 'react-bootstrap';
import MedPay from './MedPay';
import { useReactToPrint } from 'react-to-print';
import Docs from './Docs';

const MedicalReport = (props) => {

  const [patientReport, setPatientReport] = useState(
    {"report_number":"Test","patient_number":"Test","patient_name":"Test","gender":"Test","category":"Outward","diagnosis":["Test"],"result":["Test"],"prescription":["Test"],"conclusion":"Test","amount":"56000.0","doctor":"Test"}
  );

  const medicalReport = props.medicalReport;
  const position = (props.position + 1);
  const diagnosis = medicalReport.diagnosis.map((number) =>
    <li key={medicalReport.diagnosis.indexOf(number)} className="List">{number}</li>
  );
  const result = medicalReport.result.map((res) =>
    <li key={medicalReport.result.indexOf(res)} className="List">{res}</li>
  );
  const prescription = medicalReport.prescription.map((pres) =>
    <li key={medicalReport.prescription.indexOf(pres)} className="List">{pres}</li>
  );

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const path = `/full_report/${medicalReport.id}`;

  const medicalPayReport = [ {id: medicalReport.id, patient_name: medicalReport.patient_name} ]


  useEffect(async () => {
    const response = await axios(
      path,
    );
 
    setPatientReport(response.data);
  }, []);


  return (
    <tr>
      <td>{position}</td>
      <td>{medicalReport.report_number}</td>
      <td>{medicalReport.patient_name}</td>
      <td>{medicalReport.amount_paid}</td>
      <td>{diagnosis}</td>
      <td>{result}</td>
      <td>{prescription}</td>
      <td>{medicalReport.conclusion}</td>
      <td>{medicalReport.doctor_name}</td>
      <td>{(medicalReport.paid).toString()}</td>
      <td><Moment format="D MMM YYYY">{medicalReport.created_at}</Moment></td>
      <td>
        {
          !medicalReport.paid ?
          <MedPay medicalReport={medicalPayReport}/>
          :
          <>
            <div style={{ display: "none" }}><Docs ref={componentRef} patientReport={patientReport} /></div>
            <Button variant="outline-success" onClick={handlePrint}>Print</Button>
          </>
        }
      </td>
    </tr>
  )
}

export default MedicalReport;
