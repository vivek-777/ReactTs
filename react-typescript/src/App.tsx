import './App.css';
import Heading from './component/Heading';
import Oscar from './component/Oscar';
import Status from './component/Status';
// import Greet from './component/Greet';
// import Person from './component/Person';
// import PersonList from './component/PersonList';


function App() {
  // const name1 = {firstName: "Bruce", lastName: "Wayne"};

  // const name2 = [
  //   {firstName: "Bruce", lastName: "Wayne"},
  //   {firstName: "Carl", lastName: "Chaix"},
  //   {firstName: "Jamie", lastName: "Allan"},
  // ]

  return (
    <div className="App">
      {/* <Greet name={"Vivek"} />
      <Person name={name1} />
      <PersonList name={name2} /> */}
      <Status status='loading'/>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
