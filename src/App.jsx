import Navbar from "./assets/components/Header/Navbar";
import ProgressSteps from "./assets/components/ProgressSteps";
import ConfirmationMessage from "./assets/components/ConfirmationMessage";
import BookingPage from "./assets/components/BookingDetails/BookingPage";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      {/* Navbar without padding */}
      <Navbar />

      {/* Main content with padding */}
      <div className="lg:p-[30px] p-[25px]">
        <ProgressSteps />
        <ConfirmationMessage />
        <BookingPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
