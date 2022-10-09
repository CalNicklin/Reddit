import './App.css';
import Header from '../../feature/header/header';
import Feed from '../../feature/Feed/Feed';
import { SubredditProvider } from '../../context/subreddits';
import FlairContext, { FlairProvider } from '../../context/flairs';

function App() {
  return (
    <div className="App">
      <SubredditProvider>
        <Header />
        <FlairProvider>
          <Feed />
        </FlairProvider>
      </SubredditProvider>
    </div>
  );
}

export default App;
