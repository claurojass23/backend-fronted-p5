import React from 'react'
import './regístrate.css'
import {Form} from 'react-bootstrap'
import swal from 'sweetalert'
import { useState } from 'react'

function Regístrate() {
 
 const[form, setForm] = useState({
  name: "",
  lastname:"",
  email: "",
  password: "",
  rol:""
  
 })

 const onSave =(event) =>{
  event.PreventDefault()  
   
 } 

 const onChange = (e) =>{
    setForm({
      ...form,[e.target.name] : e.target.value
    })

 }

   return (
    <>
    <div>
      <h1>Registro de Usuario</h1>
      <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
      <Form.Label>Nombre</Form.Label>
     <Form.Control type='text' name='name' value={form.name}  onChange={onChange} placeholder='Escribe tu nombre'/>
      <Form.Label>Apellido</Form.Label>
      <Form.Control type='text'  value={form.lastname} onChange={onChange} placeholder='Escribe tu Email' name='lastname'/>
      <Form.Label>Correo Electrónico</Form.Label>
      <Form.Control type='email'  value={form.email} onChange={onChange} placeholder='Escribe tu Email' name='email'/>
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type='password'  value={form.password} onChange={onChange} placeholder='Escribe una contraseña' name='password'/>
      <Form.Label>Rol</Form.Label>
      <Form.Control type='text'  value={form.rol} onChange={onChange}  name='rol'/>
      

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