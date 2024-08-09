import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Footers = () => {
  return (
    <div className='container-fluid bg-dark'>
        <div className='row'>
            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            
                <h3 className='text-white '>Party</h3>
                <div className='paragraph mt-3'>
                    <p className='text-white'>Ideology</p>
                    <p className='text-white '>History Of DMK</p>
                    <p className='text-white'>Organization Strucutre</p>
                    <p className='text-white'>Elected Representantives</p>
                </div>
            </div>

            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                <h3 className='text-white mt-3'>Achievements</h3>
                <div className='paragraph mt-3'>
                    <p className='text-white'>Achievements</p>
                </div>
            </div>

            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                <h3 className='text-white mt-3'>Address</h3>
                <div className='paragraph mt-3'>
                    <p className='text-white'>Anna Anivalayam</p>
                    <p className='text-white'>No 367/369 ,Anna Salai, Teynampet</p>
                    <p className='text-white'>Chennai - 600018</p>
                    <p className='text-white'>+91 - 044 - 24348258</p>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6161738308257!2d80.25124371480078!3d13.03681859081268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d2a8b6bda1%3A0x238a06d0f34f6b73!2sAnna%20Arivalayam!5e0!3m2!1sen!2sin!4v1633953438532!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Anna Arivalayam"
              ></iframe>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Footers