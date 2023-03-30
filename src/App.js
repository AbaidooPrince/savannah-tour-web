import './App.css';
import HomepageLayout from './layouts/homepage/HomepageLayout';

function App() {
  const banner = [
    { backgroundImage: 'https://images.unsplash.com/photo-1670272502972-cccb4b96c4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' }
  ]
  return (
    <div>
      <HomepageLayout banner={banner}></HomepageLayout>
    </div>
  );
}

export default App;
