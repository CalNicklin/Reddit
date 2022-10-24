import './App.css';
import Header from '../../feature/header/header';
import Feed from '../../feature/Feed/Feed';
import { SubredditProvider } from '../../context/subreddits';
import { FlairProvider } from '../../context/flairs';

function App() {
  return (
    <div className="App">
      {/* Provides the currently chosen subreddit data to the page */}
      <SubredditProvider> 
        <Header />
        {/* Provides the current flair filter options to the feed */}
        <FlairProvider>
          <Feed />
        </FlairProvider>
      </SubredditProvider>
    </div>
  );
}

export default App;
