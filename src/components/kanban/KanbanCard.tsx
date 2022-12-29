import { Paper, Stack, Typography, CardContent } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';
import { Pedido } from '../../types/kanbanproc';

interface CardKanbanProps {
  key?: React.Key;
  id: string;
  index: number;
  pedido: Pedido;
}

export default function CardKanban({ id, index, pedido }: CardKanbanProps) {
  const { name } = pedido;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper {...provided.draggableProps} ref={provided.innerRef}>
          <CardContent {...provided.dragHandleProps}>
            <Stack direction="column">
              <Typography>{name}</Typography>
            </Stack>
          </CardContent>
        </Paper>
      )}
    </Draggable>
  );
}
