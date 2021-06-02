import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { Row, Column } from 'react-foundation';
import _ from 'lodash';
import errorIcon from './assets/error.svg';
import successIcon from './assets/success-small.svg';
import Position from './assets/Position';

const ErrorMessage = (props) => {
//   const data = _.get(props.errorMessage, "response.data", null);
//   const message = _.get(props.errorMessage, "message", null);
  const check = props.errorMessage;


  const [show, setShow] = useState(true);

  if (check === "Error") {
    return (
      <Row className="Position">
        <Column xs={6}>
          <Toast className="Custom-width" onClose={() => setShow(false)} show={show} delay={5000} autohide>
              <Toast.Body>
                  <img
                      src={errorIcon}
                      className="rounded mr-2"
                      alt=""
                      />
                  <strong className="mr-auto">Error Ocurred</strong>
              </Toast.Body>
          </Toast>
        </Column>
      </Row>
    );
  }
  else if (check === "Success") {
    return (
      <Row className="Position">
        <Column xs={6}>
          <Toast className="Custom-width" onClose={() => setShow(false)} show={show} delay={5000} autohide>
              <Toast.Body>
                  <img
                      src={successIcon}
                      className="rounded mr-2"
                      alt=""
                      />
                  <strong className="mr-auto">Successful</strong>
              </Toast.Body>
          </Toast>
        </Column>
      </Row>
    );
  }

}

export default ErrorMessage

// ErrorMessage.propTypes = {
//   errorMessage: PropTypes.object.isRequired,
// };
