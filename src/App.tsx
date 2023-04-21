import { useParams } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';


const App = () => {

  const params = useParams();

  return (
    <div>
      <MainRoutes />
    </div>
  );
}

export default App;