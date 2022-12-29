import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuidv1 } from 'uuid';
import { Etapa, Pedido } from '../../types/kanbanproc';

interface KanbanState {
  board: {
    pedidos: Array<Pedido>;
    etapas: Array<Etapa>;
  };
}

const initialState: KanbanState = {
  board: {
    pedidos: [],
    etapas: [
      {
        id: 'c2',
        name: 'Cocina',
        position: 1
      },
      {
        id: 'c3',
        name: 'Salida',
        position: 0
      },
      {
        id: 'c1',
        name: 'Masa',
        position: 2
      }
    ]
  }
};

const slice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addColumn(state, payload) {
      const len = state.board.etapas.length;
      state.board.etapas.push({ id: uuidv1(), name: payload.payload, position: len });
    },
    changeColumnIndex(state, payload) {
      const { id, newIndex, oldIndex } = payload.payload;
      const indexArrEtpP = state.board.etapas.findIndex((etp) => etp.position === newIndex);
      console.log(indexArrEtpP);
      if (indexArrEtpP !== -1) {
        state.board.etapas[indexArrEtpP].position = oldIndex;
      }
      const indexArrEtp = state.board.etapas.findIndex((etp) => etp.id === id);
      if (indexArrEtp !== -1) {
        state.board.etapas[indexArrEtp].position = newIndex;
      }
    },
    changePedido(state, payload) {
      const { id, newState } = payload.payload;
      const indexPedido = state.board.pedidos.findIndex((ped) => ped.id === id);
      if (indexPedido !== -1) {
        state.board.pedidos[indexPedido].etapa = newState;
      }
    },
    addPedido(state, payload) {
      const { name, etapa } = payload.payload;
      const newPedido: Pedido = { id: uuidv1(), date: new Date(), etapa, name };
      state.board.pedidos.push(newPedido);
    }
  }
});

export const { addColumn, changeColumnIndex, changePedido, addPedido } = slice.actions;

export default slice.reducer;
