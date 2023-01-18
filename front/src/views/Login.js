import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalContent,
  MDBModalDialog,
  MDBModalBody,
  MDBModalFooter
}
  from 'mdb-react-ui-kit';

function Login({basicModal,toggleShow}) {


  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  
  return (
    <>

      <MDBModal show={basicModal}  tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>


              <MDBContainer className="   d-flex  flex-column   w-75">

                <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                      Login
                    </MDBTabsLink>
                  </MDBTabsItem>
                  <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                      Register
                    </MDBTabsLink>
                  </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>

                  <MDBTabsPane show={justifyActive === 'tab1'}>

                    <div className="text-center mb-3">
                      <p>Sign in with:</p>

                      <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>
                      </div>

                      <p className="text-center mt-3">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                    <div className="d-flex justify-content-between mx-4 mb-4">
                      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                      <a href="!#">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
                
                  </MDBTabsPane>

                  <MDBTabsPane show={justifyActive === 'tab2'}>

                    <div className="text-center ">
                      <p>Sign up with:</p>

                      <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                          <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>
                      </div>

                      <p className="text-center ">or:</p>
                    </div>

                    <MDBInput wrapperClass='mb-2' label='Name' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-2' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-2' label='Address' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-2' label='Phone' id='form1' type='text' />
                    <MDBInput wrapperClass='mb-2' label='Password' id='form1' type='password' />


                    <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

                  </MDBTabsPane>

                </MDBTabsContent>

              </MDBContainer>









            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default Login;