export interface Digital {
  nombre: string;
  producto: string;
  cantidad: string;
  estado: string;
}

// Tipo que define el diccionario: la llave es el documento (string) y el valor es el Aprendiz
export type DiccionarioDigital = Record<string, Digital>;