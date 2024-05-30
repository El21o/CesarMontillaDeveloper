import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import Button from '../button/Button';
import CircularButton from '../circularBu/CircularButton';
import './work.css'


const Work = () => {
  return (
    <div className='work'>
    
      <div className='Workboxuno'>
     
        <div className='boxuno'>
            <hr className="styled-hr"/>
          <div className='workhed'>
            
            
            <h1 className='titulowork'>Motorcycle trip app</h1>
            <Link to="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/APPmot.pdf?alt=media&token=7bdd8dec-7300-47eb-a550-e0271db4cd42" target="_blank"> <CircularButton  color="#FAFF01" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/></Link>
            </div>
            <div className='hrbase'>
              <p className='worlkt'>Design UX/UI</p>
            </div>
            <div className='workimg' >
            <img className="wimg" src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/Group%2020.png?alt=media&token=a99dfb55-5ae6-4ed6-a02e-41e0a929dfeb" alt="" />
          </div>
          </div>
        </div>


        <div className='Workboxuno'>
        <div className='boxuno'>
            <hr className="styled-hr"/>
          <div className='workhed'>
            
            
            <h1>Social networking</h1>
            <Link to="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/app.pdf?alt=media&token=95656506-7cb0-4ae3-825f-77a5270282f0" target="_blank"> <CircularButton  color="#FAFF01" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"/></Link>
            </div>
            <div className='hrbase'>
              <p className='worlkt'>Design UX/UI</p>
            </div>
            <div className='workimg' >
            <img className="wimg" src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/socail.png?alt=media&token=d750c592-bd2f-4ba2-91e9-b2688f9f6349" alt="" />
          </div>
          </div>
        </div>

        <div className='Workboxuno'>
      
        <div className='boxuno'>
            <hr className="styled-hr"/>
          <div className='workhed'>
            
            
            <h1>Shoes app</h1>
            <Link to="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/shoes.pdf?alt=media&token=0d994412-9574-407e-86ee-f50c60d8d383" target="_blank"><CircularButton  color="#FAFF01" icon="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/flecha.png?alt=media&token=f3eb9225-567b-473b-a140-9f597a54a569"  /></Link> 
            </div>
            <div className='hrbase'>
              <p className='worlkt'>Design UX/UI</p>
            </div>
            <div className='workimg' >
            <img className='wimg' src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/shoes.png?alt=media&token=7f146470-1096-4665-8222-6535d883e370" alt="" />
            </div>
          </div>
        </div> 

      
      
    </div>
    
  )
}

export default Work;
