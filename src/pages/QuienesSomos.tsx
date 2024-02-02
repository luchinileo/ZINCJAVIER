
import React from 'react'
import { Navegador } from '../components/Navegador/Navegador'

export const QuienesSomos = () => {
  return (
    <div className='somos'>
    <Navegador/>
    <div className="quienes-somos-container">
      <h2>Quiénes Somos</h2>
      <p>
        Somos una empresa dedicada a ofrecer soluciones en zinguería y estructuras metálicas.
        Nos especializamos en la fabricación de rejas, canaletas, escaleras, y más.
        Nuestra misión es proporcionar productos de alta calidad y servicios personalizados
        que satisfagan las necesidades específicas de nuestros clientes.
      </p>
      <p>
        Con años de experiencia en el mercado, hemos construido una reputación sólida basada en la
        excelencia en el trabajo, la integridad y la satisfacción del cliente.
        Nuestro equipo de profesionales altamente capacitados está comprometido a brindar
        soluciones duraderas y estéticamente atractivas.
      </p>
      <p>
        En [Nombre de tu Empresa], combinamos la artesanía tradicional con tecnologías
        modernas para garantizar resultados sobresalientes en cada proyecto.
        Estamos aquí para hacer realidad tus ideas y transformar el metal en creaciones
        funcionales y elegantes.
      </p>
    </div>
    </div>
  )
}
