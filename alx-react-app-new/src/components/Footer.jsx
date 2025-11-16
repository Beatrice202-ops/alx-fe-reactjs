import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <UserProfile
        name="Beatrice"
        age="21"
        bio="A curious learner who enjoys tech and self-improvement."
      />

      <MainContent />

      <Footer />
    </>
  );
}

export default App;

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
      }}
    >
      <p>© 2025 My React App. All rights reserved.</p>
    </footer>
  );
}

