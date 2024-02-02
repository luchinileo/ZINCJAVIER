
import { Navegador } from '../components/Navegador/Navegador'
import React, { useState } from 'react';

interface ContactoState {
  nombre: string;
  email: string;
  mensaje: string;
}
export const Contacto = () => {


  const [contactoState, setContactoState] = useState<ContactoState>({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setContactoState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Formulario enviado:', contactoState);
    // Puedes enviar los datos a tu servidor o realizar otras acciones según tus necesidades.
  };

  return (
    <div className='container-contacto'>
    <Navegador/>
    <div className='contacto-container'> 
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={contactoState.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactoState.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={contactoState.mensaje}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form></div>
    </div>
  )
}
export default Contacto;