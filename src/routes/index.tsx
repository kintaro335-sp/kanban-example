import { useRoutes } from 'react-router-dom';
import { Kanban } from '../pages';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Kanban />
    },
    {
      path: '/kanban',
      element: <Kanban />
    }
  ]);
}
