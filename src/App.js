import React, { useState } from "react";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import Payment from "./pages/Payment";
import MainForm from "./pages/MaintenanceForm";
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [maintenanceSelected, setMaintenanceSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <section>
      <Nav
        paymentSelected={paymentSelected}
        setPaymentSelected={setPaymentSelected}
        maintenanceSelected={maintenanceSelected}
        setMaintenanceSelected={setMaintenanceSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {paymentSelected ? (
          <Payment />
        ) : maintenanceSelected ? (
          <MainForm />
        ) : contactSelected ? (
          <ContactForm />
        ) : (
          <LandingPage
            paymentSelected={paymentSelected}
            setPaymentSelected={setPaymentSelected}
            maintenanceSelected={maintenanceSelected}
            setMaintenanceSelected={setMaintenanceSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          />
        )}
      </main>
      <Footer />
    </section>
  );
}

export default App;
