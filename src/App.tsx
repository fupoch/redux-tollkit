import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import PostContainer from './components/PostContainer';
import PostContainer2 from './components/PostContainer2';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import { userSlice } from './store/reducers/UserSlice';

function App() {

  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // useEffect( () => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">
      {/* {isLoading && <h1>Loading...</h1>}
      {error && <h1>Oops.. error! <br/> {error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display:'flex'}}>
        <PostContainer/>
        <PostContainer2/>
      </div>
    </div>
  );
}

export default App;
