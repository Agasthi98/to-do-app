import './App.scss';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
