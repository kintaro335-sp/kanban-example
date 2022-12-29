export interface Pedido {
  id: string;
  etapa: string;
  name: string;
  date: Date;
}

export interface Etapa {
  id: string;
  name: string;
  position: number;
}
