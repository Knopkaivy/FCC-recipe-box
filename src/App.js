import Footer from './components/Footer';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__main">
        <RecipeList />
        <section className="App__recipeContainer">
          <RecipeForm />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
