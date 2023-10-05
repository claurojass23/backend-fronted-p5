import React from 'react'
import './regístrate.css'
import { FormLabel, Form} from 'react-bootstrap'

function Regístrate() {
  return (
    <>
    <div>
      <h1>Registro de Usuario</h1>
      <Form onSubmit={''} className='form-reserva'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label>Nombre de Usuario</Form.Label>
      {/* formdata.nombre y el onChange poner */}
      <Form.Control type='string' value={''}  onChange={''} placeholder='Escribe tu nombre de usuario' name='nombre'/>
      <Form.Label>Correo Electrónico</Form.Label>
      {/* formData.email onChange */}
      <Form.Control type='email'  value={''} onChange={''} placeholder='Escribe tu Email' name='email'/>
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={''} onChange={''} placeholder='Escribe una contraseña' name='password'/>
      <Form.Label>Confirma la contraseña</Form.Label>
      <Form.Control type='password'  value={''} onChange={''} placeholder='Escribe de nuevo la contraseña' name='password'/>

      <Form.Text className='text-muted'>
         Tu informacion es privada y no sera compartida o reutilizada
        </Form.Text>

      </Form.Group>
     
      <button type="submit" class="btn btn-light">Guardar</button>
      </Form>
    </div>
    </>
  )
}

export default Regístrate;