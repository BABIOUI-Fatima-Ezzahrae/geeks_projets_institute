import './App.css';
import UserFavoriteAnimals from "./pages/UserFavoriteAnimals.js";

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <h3>
        {user.firstName}
      </h3>
      <h3>
        {user.lastName}
      </h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    </div>
  );
}

export default App;
