import { useMemo } from 'react';
import { CardHeader, CardContent, Stack, Paper } from '@mui/material';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import NuevoPedidoForm from './NuevoPedidoForm';
import KanbanCard from './KanbanCard';
import { filter, orderBy } from 'lodash';
import { useSelector } from '../../redux/store';

type KanbanColumnProps = {
  key?: React.Key;
  id: string;
  index: number;
  name: string;
};

export default function KanbanColumn({ id, index, name }: KanbanColumnProps) {
  const {
    board: { pedidos }
  } = useSelector((state) => state.kabnanproc);

  const filteredPedidos = useMemo(
    () =>
      orderBy(
        filter(pedidos, (pedido) => pedido.etapa === id),
        ['date'],
        ['asc']
      ),
    [pedidos]
  );

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{ px: 2, bgcolor: 'grey.5008' }}
        >
          <Stack {...provided.dragHandleProps}>
            <CardHeader title={name} />
            <CardContent>
              <Droppable droppableId={id} type="pedido">
                {(provided) => (
                  <Stack ref={provided.innerRef} {...provided.droppableProps} spacing={2} width={280} minHeight={20}>
                    {filteredPedidos.map((ped, i) => (
                      <KanbanCard key={`${ped.id}${i}`} id={ped.id} index={i} pedido={ped} />
                    ))}
                    {provided.placeholder}
                    <NuevoPedidoForm etapaId={id} />
                  </Stack>
                )}
              </Droppable>
            </CardContent>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
