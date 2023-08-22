import './accordions.css';
import SlideDown from './SlideDown';
import SlideDown2 from './SlideDown2';


function Accordions() {

  return (
    <>
      <h2>Accordions</h2>
      <ul className="wrapper">
        <SlideDown />
        <SlideDown2 />
        <SlideDown />
        <SlideDown2 />
        <SlideDown />
        <SlideDown2 />
      </ul>
    </>

  )

}

export default Accordions