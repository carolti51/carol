import { useState } from 'react';
import type { DiccionarioAprendiz } from './diccionario';
import { Lista } from './lista.tsx';
import './stiles.css'

export function Formulario() {
  // Estado reactivo para almacenar el diccionario de aprendices
  const [diccionario, setDiccionario] = useState<DiccionarioAprendiz>({});

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const datos = new FormData(e.currentTarget);
    const id = datos.get('identificacion') as string;

    const nuevoAprendiz = {
      nombre: datos.get('nombre') as string,
      tipoDocumento: datos.get('tipo') as string,
      email: datos.get('Email') as string,
    };

    // Actualizamos el estado con una copia inmutable del diccionario anterior
    setDiccionario(prev => ({
      ...prev,
      [id]: nuevoAprendiz,
    }));

    e.currentTarget.reset(); 
    alert("¡Aprendiz guardado en el diccionario!");
  };

  return (  
    <div>
      <form onSubmit={guardar}>
        <h1>Registro de Aprendices Sena</h1>

        <input id="nombre" name="nombre" placeholder="Nombre Completo" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        <br /><br />

        <select id="tipo" name="tipo" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
          <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
          <option value="Tarjeta de identidad">Tarjeta de identidad</option>
          <option value="Cédula de extranjería">Cédula extranjera</option>
        </select>
        <br /><br />

        <input id="documento" name="identificacion" placeholder="Número de identificación" required style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        <br /><br />

        <input  id="email" placeholder="email" required/>
        <br /><br />

        <button id="boton" type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Enviar</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      {/* Mostramos la lista pasando el diccionario por props */}
      <Lista diccionario={diccionario} />
    </div>
  );
}