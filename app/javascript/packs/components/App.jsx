import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Payment from './Payment';
import Payments from './Payments';
import axios from 'axios';
import PaymentForm from './PaymentForm';
import MedicalReport from './MedicalReport';
import MedicalReports from './MedicalReports';
import MedicalReportForm from './MedicalReportForm';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

const PaymentApp = (props) => {

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);


  // useEffect(async () => {
  //   const response = await axios(
  //     "/get_payment_data",
  //   );
 
  //   setPayments(response.data);
  //   setLoading(false);
  // }, []);


  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = () => {
    axios
      .get("/get_payment_data")
      .then(response => {
        const payments = response.data
        setPayments(payments);
        setLoading(false);
      })
      // .catch(error => {
      //   // Add spinner here
      //   console.log(error);
      // })
  }

  const createPayment = (payment) => {
    const newArr = [payment, ...payments]
    setPayments(newArr);
  }

  const getComponent = () => {
    setShowPdf(true);
  }


  return (
    <>
      {!loading && (
        <>
          <PaymentForm createPayment={createPayment} />
          <Payments>
            {payments.map(payment => (
              <Payment key={payment.id}
                payment={payment}
                position={payments.indexOf(payment)}
                getPayments={getPayments}
                getComponent={getComponent}
              />
            ))}
          </Payments>
        </>
      )}
      {loading && <Spinner />}
    </>
  )
}

const MedicalReportApp = (props) => {

  const [medicalReports, setMedicalReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const errorMessage = { "error": "This is an error message" };


  useEffect(() => {
    getMedicalReports();
  }, []);

  const getMedicalReports = () => {
    axios
      .get("/get_medical_reports")
      .then(response => {
        const medicalReports = response.data
        setMedicalReports(medicalReports);
        setLoading(false);
      })
      // .catch(error => {
      //   // Add spinner here
      //   console.log(error);
      // })
  }

  const createMedicalReport = (medicalReport) => {
    const newArr = [medicalReport, ...medicalReports]
    setMedicalReports(newArr);
  }


  return (
    <>
      {!loading && (
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
      )}
      {loading && <Spinner />}
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  // Medical Reports
  const medical = document.getElementById("medical-reports");
  medical && (ReactDOM.render(<MedicalReportApp />, medical));

  // Payments
  const app = document.getElementById('react-app');
  app && (ReactDOM.render(<PaymentApp />, app));

});
