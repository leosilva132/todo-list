import './global.css';
import { Header } from './Header';
import { NewTask } from './NewTask';
import { Tasks } from './Tasks';

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <Tasks />
    </div>
  )
}

