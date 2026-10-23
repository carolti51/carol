export interface Aprendiz {
  nombre: string;
  tipoDocumento: string;
  email: string;
}

// Tipo que define el diccionario: la llave es el documento (string) y el valor es el Aprendiz
export type DiccionarioAprendiz = Record<string, Aprendiz>;