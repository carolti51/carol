import type { DiccionarioAprendiz } from './diccionario';

// Definimos las propiedades (props) que recibe el componente Lista
interface ListaProps {
  diccionario: DiccionarioAprendiz;
}

export function Lista({ diccionario }: ListaProps) {
  // Convertimos el diccionario { "123": { ... } } en una lista de arreglos [ ["123", { ... }] ]
  const registros = Object.entries(diccionario);

  if (registros.length === 0) {
    return <p>No hay aprendices registrados todavía.</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Lista de Aprendices Registrados</h2>
      <table border={1} style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#bf9cd6' }}>
            <th style={{ padding: '8px' }}>Documento (ID)</th>
            <th style={{ padding: '8px' }}>Nombre</th>
            <th style={{ padding: '8px' }}>Tipo</th>
            <th style={{ padding: '8px' }}>Email</th>
          </tr>
        </thead>
        <tbody id="Listas">
          {registros.map(([id, aprendiz]) => (
            <tr key={id}>
              <td style={{ padding: '8px' }}>{id}</td>
              <td style={{ padding: '8px' }}>{aprendiz.nombre}</td>
              <td style={{ padding: '8px' }}>{aprendiz.tipoDocumento}</td>
              <td style={{ padding: '8px' }}>{aprendiz.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}