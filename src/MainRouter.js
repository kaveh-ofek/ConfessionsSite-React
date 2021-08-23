import { Route, Redirect } from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import AboutMePage from './pages/AboutMePage';
import ConfessionsPage from './pages/ConfessionsPage';
import NewConfessionPage from './pages/NewConfessionPage';
import './App.css';

const MainRouter = () => {
    return (
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
      <Route path='/show_confessions'>
      <ConfessionsPage></ConfessionsPage>
      </Route>
      <Route path='*'>
      <Redirect to='/welcome'></Redirect>
      </Route>
    </div>
    )
}
export default MainRouter;