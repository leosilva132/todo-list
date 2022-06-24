import './global.css';
import { Header } from './Header';
import { List } from './List';
import { NewTask } from './NewTask';

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <List />
    </div>
  )
}

