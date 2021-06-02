import React, { Component } from 'react';
import './assets/Invoice';
import Moment from 'react-moment';
import Logo from './assets/logo-1.png';

var imageStyle = {
    width: "100%",
    height: "80px",
    maxWidth: "300px"
  }

var bg = {
    backgroundColor: "white"
}

class PaymentInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: []
        }
        // this.getPatientInfo = this.getPatientInfo.bind(this);
    }

    // componentDidMount() {
    //     this.getPatientInfo();
    // }

    // getPatientInfo() {
    //     console.log(this.props);
    // }

    render() {
        const { payment } = this.props;
        return (
            <body style={ bg }>
                <div className="invoice-box">
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr className="top">
                                <td colSpan="2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="title">
                                                    <img src={ Logo } style={ imageStyle } />
                                                </td>

                                                <td className="title-right">
                                                    Receipt #: {payment.payment_reference}<br />
                                                    Created: {<Moment format="D MMM YYYY">{payment.created_at}</Moment>}<br />
                                                    Due: {<Moment format="D MMM YYYY">{payment.created_at}</Moment>}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr className="information">
                                <td colSpan="2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    Lukoma Clinic, LTD.<br />
                                                    Nkumba, Entebbe Road<br />
                                                    Lyamutundwe, Entebbe Uganda
                                                </td>

                                                <td>
                                                    Patient Name: {payment.patient_name}<br />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>

                            <tr className="heading">
                                <td>Payment Method</td>

                                <td>Payment Reference #</td>
                            </tr>

                            <tr className="details">
                                <td>{payment.payment_method}</td>

                                <td>{payment.payment_reference}</td>
                            </tr>

                            <tr className="heading">
                                <td>Reason</td>

                                <td>Amount</td>
                            </tr>

                            <tr className="item last">
                                <td>{payment.reason}</td>

                                <td>{payment.amount}</td>
                            </tr>

                            <tr className="total">
                                <td></td>

                                <td>Total: UGX {payment.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        )
    }
}

export default PaymentInvoice;