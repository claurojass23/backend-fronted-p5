import React from 'react'
import './catalogo.css'
import {productos} from '../catalogo/data'
import { Card,Button} from 'react-bootstrap'

function Catalogo() {
  return (
    
    <div className='menu-contenedor'>
          <h1>Platos Tradicionales</h1>
        <div className='productos-contenedor'>
          {productos.map((producto, index)=>{
            return(
              <Card className='Card'>
                <Card.Img variant='top' className='imgCard' src={producto.img}/>
                <Card.Body>
                  <Card.Title>
                    {producto.descripcion}
                  </Card.Title>
                  <Button className='button' variant="primary">{producto.precio}</Button>
               </Card.Body>
               
              </Card>
              

            )
          })



          }

         </div>
    </div>
  )
}

export default Catalogo;