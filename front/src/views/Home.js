import React from 'react'
import TravelLogo from '../assets/img/travelLogo.png'
function Home() {
  return (
    <div> 
<header className="py-5 bg-image-full" >
    <div className="text-center my-5">
        <img className="img-fluid rounded-circle mb-4" src={TravelLogo} alt="..." />
        <h1 className="text-white fs-3 fw-bolder">Full Width Pics</h1>
        <p className="text-white-50 mb-0">Landing Page Template</p>
    </div>
</header>
<section className="py-5">
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h2>Full Width Backgrounds</h2>
                <p className="lead">Travel Channel International (Pvt) Limited is Pakistan's leading travel company with numerous sales outlets across Pakistan. Established in 2003, we have evolved to be one of the finest in travel industry.
</p>
                <p className="mb-0">Keeping our vision of "Excellence in Travel Services", we strive to provide great customer services, ease of booking and value for your money. Through continuous improvement in our infrastructure, technology and our people, we are providing seamless travel experience to our customers.
</p>
            </div>
        </div>
    </div>
</section>
<div className="py-5 bg-image-full" >
    <div style={{height:"20rem"}}></div>
</div>
<section className="py-5">
    <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h2>Engaging Background Images</h2>
                <p className="lead">FareMakers.com is our flagship brand product that also holds the crown of being Pakistan's first real-time fully integrated travel booking website. FareMakers.com has gained exponential popularity among travelers and our customers in and outside of Pakistan.</p>
                <p className="mb-0">We invite you to come and enjoy outstanding travel services from our team of 300+ professional travel consultants. Finding a great travel deal is just a call away. Book online or visit one of our office in Lahore, Islamabad, Karachi or Faisalabad.
</p>
            </div>
        </div>
    </div>
</section>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="js/scripts.js"></script></div>
  )
}

export default Home