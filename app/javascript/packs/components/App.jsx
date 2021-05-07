import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Payment from './Payment';
import Payments from './Payments';
import axios from 'axios';
import PaymentForm from './PaymentForm';
import MedicalReport from './MedicalReport';
import MedicalReports from './MedicalReports';
import MedicalReportForm from './MedicalReportForm';
// import setElementsData from './Docs';

const PaymentApp = (props) => {

  const [payments, setPayments] = useState([]);


  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = () => {
    axios
      .get("/get_payment_data")
      .then(response => {
        const payments = response.data
        setPayments(payments);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const createPayment = (payment) => {
    const newArr = [payment, ...payments]
    setPayments(newArr);
  }


  return (
    <>
      <PaymentForm createPayment={createPayment} />
      <Payments>
        {payments.map(payment => (
          <Payment key={payment.id}
            payment={payment}
            position={payments.indexOf(payment)}
            getPayments={getPayments}
          />
        ))}
      </Payments>
    </>
  )
}

const MedicalReportApp = (props) => {

  const [medicalReports, setMedicalReports] = useState([]);


  useEffect(() => {
    getMedicalReports();
  }, []);

  const getMedicalReports = () => {
    axios
      .get("/get_medical_reports")
      .then(response => {
        const medicalReports = response.data
        setMedicalReports(medicalReports);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const createMedicalReport = (medicalReport) => {
    const newArr = [medicalReport, ...medicalReports]
    setMedicalReports(newArr);
  }


  return (
    <>
      <MedicalReportForm createMedicalReport={createMedicalReport} />
      <MedicalReports>
        {medicalReports.map(medicalReport => (
            <MedicalReport key={medicalReport.id}
              medicalReport={medicalReport}
              position={medicalReports.indexOf(medicalReport)}
              getMedicalReports={getMedicalReports}
            />
          ))}
      </MedicalReports>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  // Medical
  const medical = document.getElementById("medical-reports");
  medical && (ReactDOM.render(<MedicalReportApp />, medical));

  // Payments
  const app = document.getElementById('react-app');
  app && (ReactDOM.render(<PaymentApp />, app));
});
