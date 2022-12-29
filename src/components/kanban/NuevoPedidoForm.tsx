import { TextField, Box } from '@mui/material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from '../../redux/store';
import { addPedido } from '../../redux/slices/kanbanproc';

type FormValues = {
  name: string;
};

type NuevoPedidoFormProps = {
  etapaId: string;
};

export default function NuevoPedidoForm({ etapaId }: NuevoPedidoFormProps) {
  const dispatch = useDispatch();
  const methods = useForm<FormValues>();

  const { register, reset, handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(addPedido({ name: data.name, etapa: etapaId }));
  };

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          fullWidth
          {...register('name')}
          label="nombre de pedido"
          onKeyDown={(e) => {
            const key = e.key;
            if (key === 'Enter') {
              handleSubmit(onSubmit)().then(() => {
                reset();
              });
            }
          }}
        />
      </form>
    </Box>
  );
}
