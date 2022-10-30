import logo from './logo.svg';
import Styling from './Styling.js'
import { Ternary } from './Ternary';
import Example from './Example';
import './App.css';
import Unknown from './Unknown.png'

function App() {
  var generateRandomNumber = () => Math.random() * 10 | 0
  return (
      <Styling>
        <div>kasdjflkasdjfkl</div>
        <div>kasdjflkasdjfkl</div>
        <div>kasdjflkasdjfkl</div>
        <div>kasdjflkasdjfkl</div>
        dasfkljsadlfjksadf
        ksadfjls.a,djlfsjdakfj
        <Ternary/>
        <p>{generateRandomNumber()}</p>
        <Example/>
        <img src={Unknown}/>
      </Styling>
  );
}

export default App;
