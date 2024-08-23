import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';

function App() {
  const name1 = {firstName: "Bruce", lastName: "Wayne"};

  const name2 = [
    {firstName: "Bruce", lastName: "Wayne"},
    {firstName: "Carl", lastName: "Chaix"},
    {firstName: "Jamie", lastName: "Allan"},
  ]

  return (
    <div className="App">
      <Greet name={"Vivek"} />
      <Person name={name1} />
      <PersonList name={name2} />
    </div>
  );
}

export default App;
