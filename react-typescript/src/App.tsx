import './App.css';
// import { Box } from './component/context/Box';
// import { ThemeContextProvider } from './component/context/ThemeContext';
import { User } from './component/context/User';
import { UserContextProvider } from './component/context/UserContext';
// import Counter from './component/state/Counter';
// import Style from './component/Style';
// import User from './component/state/User';
// import Heading from './component/Heading';
// import { Button } from './component/Button';
// import { Input } from './component/Input';
// import Oscar from './component/Oscar';
// import Status from './component/Status';
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
      {/* <Status status='loading'/>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event) => { console.log(event)}}/>
      <Input handleChange={(event) => {console.log(event)}} value={''} /> */}
      {/* <Style style={{border:'1px solid blue', padding: '1rem'}}/> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
