import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://fisat.ac.in/wp-content/uploads/2023/09/Enquiry-scaled.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://images.collegedunia.com/public/college_data/images/appImage/13462_FISAT_NEW.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://fisat.ac.in/wp-content/uploads/2022/05/cse-banner.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://lh5.googleusercontent.com/jARJMxs70OJTwC4oJilfDkK3WgSefr3FALzyWua_oSJtBBkJBlrY4oMIzlrhTmoPci7UcwgR4mEp2GbG1ZqYCRwMcy_7Oy3kRrgyNsGeLtriz8ag6Zv9adP1EDXj1jtMiPKBm9KXPPaJuC7mzg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </div>
  )
}

export default Home