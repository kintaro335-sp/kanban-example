import { useRoutes } from 'react-router-dom';
import { Kanban } from '../pages';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <>Nothing to see here yet</>
    },
    {
      path: '/kanban',
      element: <Kanban />
    }
  ]);
}
