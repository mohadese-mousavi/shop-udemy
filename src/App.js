import './App.css';
import {Switch, Route} from 'react-router-dom';
import {Homepage} from './pages/homepage.component';

const Shop = (props) => {
  console.log(props);
  return(
  <h1 className={'shop'}>
    Shop: {props.match.params.id}
  </h1>)
}
function App() {
  return (
    <div className={'App'}>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/:id' component={Shop}/>
      </Switch>
     
    </div>
  );
}

export default App;
