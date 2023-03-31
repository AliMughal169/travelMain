import axios from 'axios';
import React, { useEffect, useState } from 'react';
const backendUrl = process.env.REACT_APP_BASE_URL;


function ContactUs() {
  const [refresh, setRefresh] = useState(false);
  const [edit, setEdit] = useState([]);

  const postData = [
    {
      firstName: '',
      lastName: '',
      email: '',
      message: ''

    }
  ]


  const handleChange = (event) => {
    postData[event.target.name] = event.target.value
    // console.log(postData)
  }
  const clearForm = (data) => {
    data.firstName = ''
    data.lastName = ''
    data.email = ''
    data.message = ''


  }

  const addQueries = async () => {
    // console.log(postData)
    const response = await axios.post(`${backendUrl}v1/front/query/addquery`,
      {
        firstName: postData.firstName,
        lastName: postData.lastName,
        email: postData.email,
        message: postData.message

      }).then((res) => {

      })
    clearForm(postData)


  }




  return (
    <>
      <div className='m-3'>
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="FirstName" name="firstName" className="form-control" onChange={handleChange} placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input type="text" id="LastName" name="lastName" className="form-control" onChange={handleChange} placeholder="Last Name" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input type="text" id="email" name="email" className="form-control" onChange={handleChange} placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" onChange={handleChange} placeholder="Your Message" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                <a className="btn btn-primary" onClick={addQueries}>Send</a>
              </div>
              <div className="status"></div>
            </div>
            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Lahore, Faisal town, PAKISTAN</p>
                </li>
                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 92 334 567 89</p>
                </li>
                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@travelMain.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactUs