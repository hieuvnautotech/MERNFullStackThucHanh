// import './App.css';
import { useDispatch } from 'react-redux'
import HomePage from './pages/HomePage';
import * as actions from './redux/actions'

function App() {
  //code test
  // return (
  //   <div>
  //     haha
  //   </div>
  // );

  // const dispatch = useDispatch()
  // dispatch(actions.getPosts.getPostsRequest())
  // return <p>thaihsdiahsd</p>
  return <HomePage/>
}

export default App;
