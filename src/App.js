import { RecipesProvider } from './contexts/RecipesContext';
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
        <RecipesProvider>
          <RecipeList />
          <section className="App__recipeContainer">
            <RecipeForm />
          </section>
        </RecipesProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
