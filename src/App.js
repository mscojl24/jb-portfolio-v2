
import MainPage from './components/MainPage.jsx';
import { RecoilRoot } from 'recoil';
import './css/App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <MainPage></MainPage>
      </div>
    </RecoilRoot>
  );
}

export default App;
