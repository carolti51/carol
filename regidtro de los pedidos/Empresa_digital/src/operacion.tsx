import { useState } from 'react';
import type {DiccionarioDigital} from './diccionario1';
import { Funcion } from './funciones.tsx';
import './estilos.css'


export function Operacion() {
    const [diccionario, setDiccionario] = useState<DiccionarioDigital>({});

  const guardar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const datos = new FormData(e.currentTarget);
    const nombre = (datos.get('nombre') || datos.get('Nombre')) as string;

    const Digital= {
      nombre,
      producto: (datos.get('tipo') || datos.get('opcion')) as string,
      cantidad: (datos.get('cantidad') || datos.get('cantidaad')) as string,
      estado: (datos.get('estado') as string) || 'Confirmada, Pendiente, Cancelada',
    };

    // Actualizamos el estado con una copia inmutable del diccionario anterior
    setDiccionario(prev => ({
      ...prev,
      [nombre]: Digital,
    }));

    e.currentTarget.reset(); 
    alert("¡Aprendiz guardado en el diccionario!");
  };
  return (
    <>
    <div>
        <form onSubmit={guardar}>
            <h1>Registro de pedidos</h1>

             <input id="nombre" name="nombre" placeholder="Nombre Completo"/>
             <br /><br />

            <select id="tipo" name="tipo">
          <option value="Cartulinas">Cartulinas</option>
          <option value="Cuaderos">Cuaderos</option>
          <option value="Lápices">Lápices</option>
          <option value="Detergente">Detergente</option>
          <option value="Esponja">Esponja</option>
        </select>
        <br /><br />
               <input id="Cantidad" name="cantidad" placeholder="Cantidad"/>
             <br /><br />

            <select id="estado" name="estado">
          <option value="Confirmada">Confirmada</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Cancelada">Cancelada</option>
        </select>
        <br /><br />

        <button id="boton" type="submit">Enviar</button>

        </form>

        <Funcion diccionario={diccionario}/>
    </div>  
    </>
  );  
}