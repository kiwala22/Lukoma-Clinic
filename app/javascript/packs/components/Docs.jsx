import React, { Component } from 'react';
import './assets/Docs';
import Logo from './assets/logo-1.png';
import './assets/Lists.css';

var imageStyle = {
  width: "100%",
  maxWidth: "300px"
}


class Docs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { patientReport } = this.props;

    const diagnoses = patientReport.diagnosis.map((analysis) => 
      <li key={patientReport.diagnosis.indexOf(analysis)} className="List">{analysis}</li>
    );
    const results = patientReport.result.map((finding) =>
      <li key={patientReport.result.indexOf(finding)} className="List">{finding}</li>
    );
    const prescriptions = patientReport.prescription.map((pres) =>
      <li key={patientReport.prescription.indexOf(pres)} className="List">{pres}</li>
    );
    
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Report Number:  {patientReport.report_number} </title>
        </head>
        <body style={{backgroundColor: "white"}}>
          <div className="card col-md-8 block-center">
            <div className="card-body">
              <div className="conclusion-display">
                <div className="d-flex align-items-center">
                  <img src={Logo} alt="" className="img-responsive" style={imageStyle}  />
                </div>
                <div className="ml-auto">
                  <div className="row mb-3">
                    <div className="">
                      <div className="row">
                        <div className="col-lg-12" style={{textAlign: "right"}}>
                            <h4 className="text-muted">Lukoma Clinic & Pharmacy</h4>
                            <h4 className="text-muted">Katabi, Lyamutundwe</h4>
                            <h4 className="text-muted">Tel: +256 757-032-427</h4>
                            <h4 className="text-muted">Email: enochbogere88@gmail.com</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
        
              <h2 className="text-muted">Patient Medical Report</h2>
              <h3>Report Number: {patientReport.report_number}</h3>
              <hr />
        
              <div className="row mb-3">
                  <table className="col-xl-12 col-12 py-2" style={{width: "100%"}}>
                    <tr className="form-row col-lg-12">
                      <td className="col">
                        <h4>Patient Name: {patientReport.patient_name} </h4>
                        <p>Patient Number: <strong>{patientReport.patient_number}</strong></p>
                        <p>Gender: <strong>{patientReport.gender}</strong></p>
                        <p>Patient Type: <strong>{patientReport.category}</strong></p>
                      </td>
                    </tr>
                  </table>
              </div>
              <hr/>
        
              <div className="container-fluid mt-2">
                <div className="">
                  <div>
                    <h4>Tests/Laboratory Analysis</h4>
                      <ol>
                        {diagnoses}
                      </ol>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h4>Results/Laboratory Findings</h4>
                      <ol>
                        {results}
                      </ol>
                  </div>
                </div>
                <div className="">
                  <div>
                    <h4>Prescriptions/Medications</h4>
                        <ol>
                          {prescriptions}
                        </ol>
                  </div>
                  <h4>Additional Doctor Observations</h4>
                  <table className="table" style={{border: "1px solid black", width: "100%", height: "150px", borderCollapse: "collapse"}}>
                    <thead>
                      <tr style={{height: "37px"}}>
                        <th style={{border: "1px solid black"}}>Observations</th>
                        <th style={{border: "1px solid black"}}>Additional Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{border: "1px solid black"}}></td>
                        <td style={{border: "1px solid black"}}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br />
                <div className="">
                  <div>
                    <h4>Conclusion/Recommendations</h4>
                    <p>
                      {patientReport.conclusion}
                    </p>
                  </div>
                </div>
              </div>
              <hr style={{borderTop: "dashed"}}></hr>
              <div className="conclusion-display">
                <div className="">
                  <h5>Amount Paid</h5>
                </div>
                <div className="ml-auto">
                  <h5 style={{fontSize: "18px"}}><strong>UGX {patientReport.amount} </strong></h5>
                </div>
              </div>
              <div className="conclusion-display">
                <div className="">
                  <h5>Signature Dr/Nurse: ({patientReport.doctor})</h5>
                </div>
                <div className="ml-auto">
                  <h5><strong>---------------------------------------------------------</strong></h5>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default Docs