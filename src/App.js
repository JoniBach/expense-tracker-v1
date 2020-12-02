import { MuiPickersContext } from '@material-ui/pickers';
import './App.css';
import ExpensesDashboard from './components/ExpensesDashboard/ExpensesDashboard'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ExpensesDashboard />
    </MuiPickersUtilsProvider>
  );
}

export default App;
