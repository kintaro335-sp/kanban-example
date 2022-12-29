import { KanbanColumn } from '../components/kanban';
import { Stack } from '@mui/material';
import { DragDropContext, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from '../redux/store';
import { changeColumnIndex, changePedido } from '../redux/slices/kanbanproc';
import { orderBy } from 'lodash';

export default function Kanban() {
  const { board } = useSelector((state) => state.kabnanproc);
  const dispatch = useDispatch();
  const { etapas } = board;
  const onDragEnd: OnDragEndResponder = (result) => {
    const { source, destination, draggableId, type } = result;
    if (source === null) return;
    if (destination === null) return;

    if (type === 'etapa') {
      if (source.index === destination?.index) return;
      dispatch(changeColumnIndex({ id: draggableId, newIndex: destination?.index, oldIndex: source.index }));
    }

    if (type === 'pedido') {
      if (source.droppableId === destination?.droppableId) return;
      dispatch(changePedido({ id: draggableId, newState: destination?.droppableId }));
    }

    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="etapas" direction="horizontal" type="etapa">
        {(provided) => (
          <Stack
            {...provided.droppableProps}
            ref={provided.innerRef}
            direction="row"
            alignItems="flex-start"
            spacing={3}
            sx={{ height: 'calc(100% - 32px)', overflowY: 'hidden' }}
          >
            {orderBy(etapas, ['position'], ['asc']).map((etp, i) => (
              <KanbanColumn key={`${etp.id}${i}`} id={etp.id} index={i} name={etp.name} />
            ))}
            {provided.placeholder}
          </Stack>
        )}
      </Droppable>
    </DragDropContext>
  );
}
