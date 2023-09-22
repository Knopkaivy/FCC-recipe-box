import { useState } from 'react';
import { RecipesProvider } from './contexts/RecipesContext';
import Footer from './components/Footer';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './styles/App.css';

function App() {
  const [editModeOn, setEditModeOn] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  return (
    <div className="App">
      <Header />
      <div className="App__main">
        <RecipesProvider>
          <RecipeList
            setCurrentId={setCurrentId}
            setEditModeOn={setEditModeOn}
          />
          <section className="App__recipeContainer">
            {editModeOn || currentId === null ? (
              <RecipeForm
                currentId={currentId}
                editModeOn={editModeOn}
                setEditModeOn={setEditModeOn}
                setCurrentId={setCurrentId}
              />
            ) : (
              <RecipeCard
                currentId={currentId}
                setCurrentId={setCurrentId}
                setEditModeOn={setEditModeOn}
              />
            )}
          </section>
        </RecipesProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
