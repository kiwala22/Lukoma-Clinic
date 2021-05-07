import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const MedicalReports = props => {

  return (
    <>
      <div className="table-responsive">
          <table className="table table-striped table-bordered table-hoverlarge-12 columns large-centered">
            <thead>
              <tr>
                <th scope="col">No #</th>
                <th scope="col">Report Number</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Diagnosis</th>
                <th scope="col">Result</th>
                <th scope="col">Prescription</th>
                <th scope="col">Conclusion</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Paid</th>
                <th scope="col">Create Time</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
      </div>
    </>
  )
}

export default MedicalReports;
