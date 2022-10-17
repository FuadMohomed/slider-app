import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';



function App() {
 const[people,setPeople]= useState(data);
 const [index,setIndex] = useState (0);
  




  
   return <section className='section'>
    <div className='title'>
     <h2>  
    <span>/</span> reviews
     </h2>
    </div>
    <section className='section-center'>
      <div className='title'>
      {people.map((person,personIndex)=> {
      const{id,image,name,title,quote}=person;
      
     let postion = 'nextSlide';

     if (personIndex === index) {
       postion = 'activeSlide'
     }
     if (personIndex === index -1 || (index === 0 && personIndex === people.length -1)) {
       postion = 'lastSlide'
     }
     
     
      return <article className={postion}  key={id}>
        <img className='person-img' src={image} alt={name}/>
        <h4>{name}</h4>
        <p className='title'>{title}</p>
        <p className='text'>{quote}</p>
         <FaQuoteRight className='icon'/>
      </article>
      

      })}
     <button onClick={(()=>setIndex(index -1))} className='prev'> <FiChevronLeft/> </button>
      <button onClick={(()=>setIndex(index +1))} className='next'><FiChevronRight/></button>
      </div>

</section>
  </section>
}

export default App;
