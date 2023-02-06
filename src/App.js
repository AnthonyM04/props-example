import Greeting from './components/Greeting';
import StudentInfo from './components/StudentInfo';
import './App.css';

const student1= {
  firstName: 'Giselle',
  lastName: 'Pombar',
  email: 'gigi@bocacode.com',
  age: 26,
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Props!</h1>
        <Greeting name="Gisselle" lastName="Pombar" emoji="🫂" />
        <StudentInfo student={student1}/>
        <Greeting name='Idan' lastName='Fischer' />
        <StudentInfo
        student={{
          firstName: "Idan",
          lastName: "Fischer",
          age: 18,
          email: "idan@bocacode.com"
          }}/>
      </header>
    </div>
  );
}

export default App;
