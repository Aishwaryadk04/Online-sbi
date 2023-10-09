import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Cardone() {
  return (
    <div>
         <Carousel style={{width:'100%',height:'290px'}} >
      <Carousel.Item>
      <img style={{width:'100%',height:'290px',objectFit:'cover'}}  src="https://www.onlinesbi.sbi/sbijava/images/banner6.jpg" alt="one" />

      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%',height:'290px',objectFit:'cover'}} src="https://www.onlinesbi.sbi/sbijava/images/banner40.jpg" alt="two" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'290px',objectFit:'cover'}} src="https://www.onlinesbi.sbi/sbijava/images/banner3.jpg" alt="three" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'290px',objectFit:'cover'}} src="https://www.onlinesbi.sbi/sbijava/images/banner29.jpg" alt="four" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'290px',objectFit:'cover'}} src="https://www.onlinesbi.sbi/sbijava/images/banner22.jpg" alt="five" />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{width:'100%',height:'290px',objectFit:'cover'}} src="https://www.onlinesbi.sbi/sbijava/images/banner3.jpg" alt="three" />
      </Carousel.Item>
    </Carousel>
    <div className="footerone d-flex justify-content-between bg-info">
        <div>© State Bank of India (APM Id:Serv_Tran_564)</div>
        <div>Site best viewed at 1024 x 768 resolution in Microsoft Edge 79+, Mozilla 96+, Google Chrome 97+</div>
    </div>
    </div>
  )
}

export default Cardone