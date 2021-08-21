import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import WelcomePage from './pages/WelcomePage';
import AboutMePage from './pages/AboutMePage';
import NewConfessionPage from './pages/NewConfessionPage';
import { Route, Redirect } from "react-router-dom";


function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
      <Route path='/' exact>
      <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path='/welcome'>
      <WelcomePage></WelcomePage>
      </Route>
      <Route path='/aboutme'>
      <AboutMePage></AboutMePage>
      </Route>
      <Route path='/new_confession'>
      <NewConfessionPage></NewConfessionPage>
      </Route>
      <Route path='*'>
      <Redirect to='/welcome'></Redirect>
      </Route>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
