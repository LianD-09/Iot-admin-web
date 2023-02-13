import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes/routes';

export default App = () => {
  const routing = useRoutes(routes);

  return <>{ routing }</>;
}