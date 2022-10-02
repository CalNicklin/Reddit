import './App.css';
import Header from '../../feature/header/header';
import Feed from '../../feature/Feed/Feed';
import { SubredditProvider } from '../../context/subreddits';

function App() {
  return (
    <div className="App">
      <SubredditProvider>
        <Header />
        <Feed />
      </SubredditProvider>
    </div>
  );
}

export default App;
