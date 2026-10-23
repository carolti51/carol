import type {DiccionarioDigital} from './diccionario1';

interface FuncionProps {
  diccionario: DiccionarioDigital;
}

export function Funcion({ diccionario }: FuncionProps) {
  const registros = Object.entries(diccionario);

  if (registros.length === 0) {
    return <p>No hay pedidos registrados todavía.</p>;
  }

  return (
    <div id='lista'>
      <h2>Lista de Pedidos Registrados</h2>
      <table id='tabla' border={1}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {registros.map(([nombre, Digital]) => (
            <tr key={nombre}>
              <td>{nombre}</td>
              <td>{Digital.producto}</td>
              <td>{Digital.cantidad}</td>
              <td>{Digital.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}