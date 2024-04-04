import React from 'react'
import phone from '../project_material/gym-5977600_640.jpg'
import servicesImg1 from '../project_material/adult-1.jpg'
import servicesImg2 from '../project_material/price-2.jpg'
import servicesImg3 from '../project_material/gym1.jpg'
import servicesImg4 from '../project_material/woman-5.jpg'
import userInterface from '../project_material/trainer2.jpeg'
import Navigation from '../components/Navigation'
import './admin.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
        <Navigation/>
      <section className=" servicesbg-1">
        <div className='carrier-top-cover'>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center  mb-4" data-aos="fade-up">
                  <h1 className="text-capitalize  text-white">Services </h1>
                  <span className="text-white ">What we do</span>

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section service border-top  pb-5 p-4">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title" data-aos="fade-up">
                <span className="h6 text-color">Our Services</span>
                <h2 className="mt-3 content-title ">We provide the softwere and IOT Product to  their Solve daily life problem </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center p-4">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={servicesImg1} className="card-img-top" alt="..." />
                <h4 className="mb-3">
                  CROSSFIT</h4>
                <p>Our expertise lies in extracting valuable insights from RailMadad Data, enabling informed decisions and actionable outcomes. By analyzing this data, we drive a deeper understanding of rail operations, enhancing efficiency, safety, and overall performance.                  .</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={userInterface} className="card-img-top" alt="..." />
                <h4 className="mb-3">Profesional Gym Trainer.</h4>
                <p><span className='bold'>Our Software: Where Innovation Meets User-Friendly Design</span>Experience the future of technology with an intuitive interface that makes Software accessible to everyone.
                  Our software's user-friendly design puts the power of IOT at your fingertips,
                  simplifying complex tasks and enhancing your workflow.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5">
                <img src={phone} className="card-img-top" alt="..." />
                <h4 className="mb-3">All is Automated</h4>
                <p>Our integrated platform, comprising a website and mobile app, streamlines employee performance record management. Currently utilized at Patna and Danapur Junction, it offers a user-friendly and effective solution. Simplifying the process, it ensures efficient tracking and assessment of employee performance records.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg4} className="card-img-top" alt="..." />
                <h4 className="mb-3">YOGA AND RUNNIG.</h4>
                <p>Revolutionizing train water management, our IoT solution provides real-time updates on water tank storage to upcoming stations. Through an attached GSM module, this innovative system ensures timely communication, optimizing water availability and utilization during train journeys.</p>
                <a href="#" className="service-btn btn-primary">Read More</a>  </div>

            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg3} className="card-img-top" alt="..." />
                <h4 className="mb-3">FULLY EQUIPMENT</h4>
                <p>This integrated solution merges embedded systems and software to real-time monitor solar panel efficiency. It records solar cell and battery voltage, facilitating remote device oversight. Presently deployed at IIT Patna for enhanced performance tracking.</p>
                <a href="#" className="service-btn btn-primary">Read More</a></div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-item mb-5 mb-lg-0">
                <img src={servicesImg2} className="card-img-top" alt="..." />
                <h4 className="mb-3">FULL GYM ENVIROMENT.</h4>
                <p>An IoT-driven railway enhancement system records and tallies Alarm Chain Pulling (ACP) instances, capturing GPS location, trigger time, and resultant train delay. Real-time transmission via attached GSM ensures seamless data relay, optimizing operations and safety measures.</p>
                <a href="#" className="service-btn btn-primary mt-3">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" service-contact mb-4">
        <div className='cover-cta-2'>
          <div className="container ">
            <div className="cta-block p-5 rounded">
              <div className="row justify-content-center align-items-center" data-aos="fade-up">
                <div className="col-lg-7 text-center text-lg-left " >
                  <span className=" text-white">NO PAIN NO GAIN</span>
                  <h2 className="mt-2 text-white" >Commit Your Life to heart_plus</h2>
                </div>
                <div className="col-lg-4 text-center text-lg-right mt-4 mt-lg-0">
                  <Link to="/contact" className="btn btn-main btn-round-full float-lg-right sub-btn ">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Footer/>
    </div>
  )
}

export default Services
