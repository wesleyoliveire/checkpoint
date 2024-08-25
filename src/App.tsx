import Header from './components/Header';
import GameBanner from './components/GameBanner';
import GameDescription from './components/GameDescription';
import UserReviews from './components/UserReviews';
import Footer from './components/Footer';
import './App.css'; // Estilos globais

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <GameBanner />
        <GameDescription />
        <UserReviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
