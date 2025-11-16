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
