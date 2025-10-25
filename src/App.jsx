import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import { Suspense, use } from "react";
import OrderContainer from "./components/OrderAria/OrderContainer";

const fetchOrder = async () => {
  const res = await fetch("/orders.json");
  return res.json();
};

const orderPromise = fetchOrder();

function App() {
  const initialOrderData = use(orderPromise);

  return (
    <>
      <Navbar></Navbar>
      <Hero>Kitchen-Room</Hero>

      <Suspense fallback={<h2>Order Data is Loading.......</h2>}>
        <OrderContainer initialOrderData={initialOrderData}></OrderContainer>
      </Suspense>

      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
