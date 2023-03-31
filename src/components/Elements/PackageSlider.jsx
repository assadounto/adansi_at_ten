import Slider from 'react-slick'
import { Button, Modal } from 'antd';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectBox from './ProjectBox'
import Dubia_Form from './Dubia_form';
export default function PackageSlider({data}) {
  const [open, setOpen] = useState(false);
  const [packages,setpackages]=useState({})
  const sliderSettings = {
   
    responsive: [
      {
        breakpoint: 1804,
        settings: {
         slidesToShow: 3,
         arrows:true,
        }
      },
      {
        breakpoint: 600,
        settings: {
         slidesToShow: 1,
         centerMode: true,
        }
       }
    ]
  }

  

  return (
    <div className='content' >
         <Modal
        title="Packag"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1500}
     
      >
        <Dubia_Form items={packages}/>
      </Modal >
      <Slider {...sliderSettings}>
        {data.map((card, index) => (
         
<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
<ProjectBox
    img={card.imageSrc}
    title={card.title}
    text={card.description}
    id={index}
    stars={card.stars}
  action={(packages) => {setpackages(packages);
   console.log(packages);
   setOpen(true)
  }}
/>
    </div>
        ))}
      </Slider>
    </div>


  )
}
