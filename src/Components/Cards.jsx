import React from 'react'

function Cards() {
  return (
    <div style={{objectFit:'cover'}} className='mt-3 d-flex justify-content-between p-3'>
      <div style={{height:'100%',width:'100%'}} className="personal-bank p-3 border round d-flex flex-column justify-content-center align-items-center bg-muted ">
      <img width={'70px'} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzGsZ-KO4oIfm5UMbclwU3CcD4CnRcnUwiYV76ReADKMkapxpp" alt="" />
      <h2 className='mt-3'><span>PERSONAL</span> BANKING</h2>
      
      <button className='mt-4  bg-primary '>LOGIN</button>

      <div className="line d-flex justify-content align-items-between mt-2">
        <div className='d-flex '>
          
          <a className='text-decoration-none text-dark border-right ' href=""> <p>  <img style={{width:'18%'}} src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg" alt="user" />New User <br /> Registration/</p></a>
            
          
          </div>

          <div  className='d-flex'>

            <a className='text-decoration-none text-dark border-right' href=""><p><img style={{width:'20%'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACtCAMAAAD1cQ9xAAAAYFBMVEX///8hlvMAkPIAjvJyt/b4/P+CvfcalPMAjPIOkvPy+P7k8P1ws/bG4PsmmPOy1frO5fyayfhIpPRXqfXt9f6RxPje7P2o0PlhrPUAiPLB3fsrm/OhzfnV5/w6n/S42fpv0flxAAAE6ElEQVR4nO2ca3ezIAzHBVSKWi/1unrp9/+Wj93m2k4hthNJn8Pv1c7OevZfFkISAo5jsVgsFovFYrFY3p8grNLjpc5833dd3y+z5HLsqzAwrWtOcezK6BQTwRidYOPXpM2jsj6GpvXdUdT5EIsRzskvOOfjt+OhyVAI9sJ6+GCczHQ+aB5t/tFmlWdY7NlvmVAJ/SEWjLhnk3rTKBZKo/5CkDwxpbVo2NxR1XDOTqkJrV4d0+ekfgsW5f4LLoyeteuPXJrvbd60fcphHxGk3lVsoo5YoHkP/o7BoXvVC35g5W5yk5eW1yOi3EvsH1z2xmEfucd4C7GEfJz3ULuRWMKHSr/YaAOn/UJE2lPfZCPLXmG6k4bwtKFa3moOYxnbTuxo3Eyr2GIzp/2Et4VOteWmph3l6kwYgnZbsYRHGj23W7PExrKRUkEXSsqFnyVHbWK9CBbAqWj8rOsyv4lXuA3rtKntYUcQtOy/Vo5XVB0FF6VotLlCAhpLnB6qmMCF6mFOdEUFD/zd4vei8UroI0yX4wYD4La0mW38XgM4g7YNooK8MF4oZgsgNNBIk1rIbdll6VPAXi0GTWp9tW35aXF597H6bySa1ObqFXNYzv+KBnAFTSFsUJtWVgoAYYFq6tyobTSLXhO18mOE9lrEBmq3lZbcZ0CtnjZTCAQwWdmSqstOqmd76NVqY1nB3RtRezxQFVz2H61atVo9ntBHrhLZ2oZsq2eVvQrQ26FaS7OnSVRaxzht+qDnEWB30JUnvAaw89LGtMAHgKxGcwPkWYCMkRk5kJJRqL2Wx6hCApAU0z2PS0COUCm3WG8YIjypHeFXRW+WAGqkc0wRwYXELlXJpgBb02yvQ7MVZFD/QVt1/gIZ2JAUeAICaFkiXCyx1oN7/niil+dTyA84mgxhjLOg06JJviqgB3UFTYKQtivE6j/jXUcfrxB7QpIoplAHnSAKB+kKy4ocidhiWOEGDRKxYNZ1FZsj8dkV2+243yKJBlDL69OyPhaxK2ZuGJZNwXHOB0Arp1i22xFo5oaLfactlVyA4MUpIrFeBLRlhLEp7AWArrJo9Y15vIA61gqNMykvECiTWk52mbFcTaX2Wjzl7SeJKtiiKWsmVPmMyNHsYN8oGvY83mHS9ik8hSMIbH7g9Ipux4Al+/6hlrst9U2Lm6E4X2DoTOvIkwSOqO85IT9xpIhayt94uVTtAUt37kYhzcQ5wee28ll9gaWJdEcoHRaTTl4ZpJKqpfvdzVqNfOwZU5k7kUoHkzCVjhMpoWKZA0K1VenLwBdux+1BimllFovFYrH857zPdhukSXZNcMru0mOX3Pt5LKYZ/aEp8VVkN6pmzHHvq13Bfax6vY7Pmkuctbga+BPe8uAP5x1C95VOg/LdHvhYj6c4jz6gK3qV06BoxtS+UbXxR2eYX5w1CjCfguno3HFC9Z2sPZ4jeQLw5RJUJ1A+eNkc0R4RAIMJuJr5obyLP6l1TWu8AV3BuL7pYFrjjTdT+1ae8F6rDLr5iCuCvdnu8F47L/hqBa4RoEJ5vYHnqEzrOJ0qG0d3LO0pMlx001XXN4pkzoDqMuGE57L3qdBH63Z0/gYm5ahmLe8p3Pi+s8SFGBCen9/osyamXw+OMzpEHb6pj0eK6lhfO6JZcq6QRVmLxWKxWCwWi8XyB/4BYYU9AkIFHDYAAAAASUVORK5CYII=" alt="q" /> How Do I</p></a>
            
          </div>

          <div  className='d-flex'>
          <a className='text-decoration-none text-dark border-right' href=""><p> <img style={{width:'18%'}} src="https://www.tvs-e.in/wp-content/uploads/2020/08/support.png" alt="user" />Customer Care</p></a>
            
          
          </div>

          <div  className='d-flex'>
          <a className='text-decoration-none text-dark ' href=""><p><img style={{width:'18%'}} src="https://cdn-icons-png.flaticon.com/512/2344/2344160.png " alt="user" /> Lock & <br /> Unlock User</p></a>
          
            
          
          </div>
      </div>
      <p>SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</p>
      </div>
      

      <div style={{height:'100%',width:'100%'}} className=" corporative-bank p-2 border round d-flex flex-column justify-content-center align-items-center bg-muted ">
        <br />
        <img  src="https://www.onlinesbi.sbi/sbijava/images/ybbi_corp.png" alt="logo" />

        <h2 className='mt-4'><span>CORPORATE</span> BANKING</h2>
        <div>
          <input type="text" placeholder='yono BUSINESS'/>
          <button className=' bg-primary' >LOGIN</button>
        </div>
       
        <p className='text-italic'>Have you tried our new simplified and intuitive business banking platform? Log in to yonobusiness.sbi to avail business banking services.</p>
       

        <div className="line d-flex justify-content align-items-between mt-2">
        <div className='d-flex '>
          
          <a className='text-decoration-none text-dark border-right' href=""> <p>  <img style={{width:'18%'}} src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg" alt="user" />New Corporate <br /> Registration</p></a>
            
          
          </div>

          <div  className='d-flex'>

            <a className='text-decoration-none text-dark border-right' href=""><p><img style={{width:'20%'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACtCAMAAAD1cQ9xAAAAYFBMVEX///8hlvMAkPIAjvJyt/b4/P+CvfcalPMAjPIOkvPy+P7k8P1ws/bG4PsmmPOy1frO5fyayfhIpPRXqfXt9f6RxPje7P2o0PlhrPUAiPLB3fsrm/OhzfnV5/w6n/S42fpv0flxAAAE6ElEQVR4nO2ca3ezIAzHBVSKWi/1unrp9/+Wj93m2k4hthNJn8Pv1c7OevZfFkISAo5jsVgsFovFYrFY3p8grNLjpc5833dd3y+z5HLsqzAwrWtOcezK6BQTwRidYOPXpM2jsj6GpvXdUdT5EIsRzskvOOfjt+OhyVAI9sJ6+GCczHQ+aB5t/tFmlWdY7NlvmVAJ/SEWjLhnk3rTKBZKo/5CkDwxpbVo2NxR1XDOTqkJrV4d0+ekfgsW5f4LLoyeteuPXJrvbd60fcphHxGk3lVsoo5YoHkP/o7BoXvVC35g5W5yk5eW1yOi3EvsH1z2xmEfucd4C7GEfJz3ULuRWMKHSr/YaAOn/UJE2lPfZCPLXmG6k4bwtKFa3moOYxnbTuxo3Eyr2GIzp/2Et4VOteWmph3l6kwYgnZbsYRHGj23W7PExrKRUkEXSsqFnyVHbWK9CBbAqWj8rOsyv4lXuA3rtKntYUcQtOy/Vo5XVB0FF6VotLlCAhpLnB6qmMCF6mFOdEUFD/zd4vei8UroI0yX4wYD4La0mW38XgM4g7YNooK8MF4oZgsgNNBIk1rIbdll6VPAXi0GTWp9tW35aXF597H6bySa1ObqFXNYzv+KBnAFTSFsUJtWVgoAYYFq6tyobTSLXhO18mOE9lrEBmq3lZbcZ0CtnjZTCAQwWdmSqstOqmd76NVqY1nB3RtRezxQFVz2H61atVo9ntBHrhLZ2oZsq2eVvQrQ26FaS7OnSVRaxzht+qDnEWB30JUnvAaw89LGtMAHgKxGcwPkWYCMkRk5kJJRqL2Wx6hCApAU0z2PS0COUCm3WG8YIjypHeFXRW+WAGqkc0wRwYXELlXJpgBb02yvQ7MVZFD/QVt1/gIZ2JAUeAICaFkiXCyx1oN7/niil+dTyA84mgxhjLOg06JJviqgB3UFTYKQtivE6j/jXUcfrxB7QpIoplAHnSAKB+kKy4ocidhiWOEGDRKxYNZ1FZsj8dkV2+243yKJBlDL69OyPhaxK2ZuGJZNwXHOB0Arp1i22xFo5oaLfactlVyA4MUpIrFeBLRlhLEp7AWArrJo9Y15vIA61gqNMykvECiTWk52mbFcTaX2Wjzl7SeJKtiiKWsmVPmMyNHsYN8oGvY83mHS9ik8hSMIbH7g9Ipux4Al+/6hlrst9U2Lm6E4X2DoTOvIkwSOqO85IT9xpIhayt94uVTtAUt37kYhzcQ5wee28ll9gaWJdEcoHRaTTl4ZpJKqpfvdzVqNfOwZU5k7kUoHkzCVjhMpoWKZA0K1VenLwBdux+1BimllFovFYrH857zPdhukSXZNcMru0mOX3Pt5LKYZ/aEp8VVkN6pmzHHvq13Bfax6vY7Pmkuctbga+BPe8uAP5x1C95VOg/LdHvhYj6c4jz6gK3qV06BoxtS+UbXxR2eYX5w1CjCfguno3HFC9Z2sPZ4jeQLw5RJUJ1A+eNkc0R4RAIMJuJr5obyLP6l1TWu8AV3BuL7pYFrjjTdT+1ae8F6rDLr5iCuCvdnu8F47L/hqBa4RoEJ5vYHnqEzrOJ0qG0d3LO0pMlx001XXN4pkzoDqMuGE57L3qdBH63Z0/gYm5ahmLe8p3Pi+s8SFGBCen9/osyamXw+OMzpEHb6pj0eK6lhfO6JZcq6QRVmLxWKxWCwWi8XyB/4BYYU9AkIFHDYAAAAASUVORK5CYII=" alt="q" /> How Do I</p></a>
            
          </div>

          <div  className='d-flex'>
          <a className='text-decoration-none text-dark ' href=""><p> <img style={{width:'18%'}} src="https://www.tvs-e.in/wp-content/uploads/2020/08/support.png" alt="user" />Customer Care</p></a>
            
          
          </div>

      </div>
      <p className='w-2'>Corporate Banking application to administer and manage non personal accounts online.</p>

       
        
      </div>
    </div>

    
  )
}

export default Cards