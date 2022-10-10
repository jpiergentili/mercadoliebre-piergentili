import React from "react";

const banner1 = "https://drive.google.com/uc?id=1zGUosOUemQwCn9kf4V4ixZIrNqmlTXYm";
const banner2 = "https://drive.google.com/uc?id=1Um2u45uNDKgPIWipxmqM9_4BXc3zV-xQ";
const banner3 = "https://drive.google.com/uc?id=1-j6K4vFprz2qmV63xC4NDF7RWG_Zhxq1";
const banner4 = "https://drive.google.com/uc?id=1NCtOsEWzb-SQuGclOEoADQoBFY7Sjk50";
const banner5 = "https://drive.google.com/uc?id=1uAz9D3GgKeQ24J5FPuv5fBj27d-jgQti";
const banner6 = "https://drive.google.com/uc?id=1gaverpRBmr90qZpQ5SE03xf9Tkwsv6O6";


const Carrusel = () =>{
    return (
            /* CARRUSEL */
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={banner1} className="d-block w-100" alt="banner1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner2} className="d-block w-100" alt="banner2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner3} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner4} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner5} className="d-block w-100" alt="banner3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={banner6} className="d-block w-100" alt="banner3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Carrusel;