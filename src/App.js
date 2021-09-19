import './App.css';
import MainRouter from "./MainRouter";
import { MuiThemeProvider } from '@material-ui/core';

function App() {
  return (
    <MuiThemeProvider>
      <MainRouter></MainRouter>
    </MuiThemeProvider>
  );
}
export default App;
