import React, { useState } from "react";
import Container from "../Container/Container";
import { CookingPot, ScrollText, TicketCheck } from "lucide-react";
import OrderCard from "../OrderCard/OrderCard";
import CookingCard from "../CookingCard/CookingCard";
import { toast } from "react-toastify";
import ReadyCard from "../ReadyCard/ReadyCard";

const OrderContainer = ({ initialOrderData }) => {
  const [order, setOrder] = useState(initialOrderData);
  const [cooking, setCooking] = useState([]);
  const [readyItems, setReadyItems] = useState([]);
  const handleOrder = (orderItems) => {
    const isExist = cooking.find((items) => items.id === orderItems.id);
    if (isExist) {
      toast.warning("Order Allready on Processing");
      return;
    }
    const newCookingItems = [...cooking, orderItems];
    setCooking(newCookingItems);
  };

  const handleCooking = (readyOrder) => {
    readyOrder.cooked_At = new Date().toLocaleTimeString();
    const newReadyItems = [...readyItems, readyOrder];
    setReadyItems(newReadyItems);

    const remaining = cooking.filter((items) => items.id !== readyOrder.id);
    setCooking(remaining);

    const remainingOrders = order.filter((order) => order.id !== readyOrder.id);
    setOrder(remainingOrders);
  };

  return (
    <>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-12">
          <div className="orderAreaBox">
            <div className="orderAreaBoxContent">
              <ScrollText
                className="animate-pulse"
                color="#fcb700"
                size={100}
              />
              <div className="orderAreaBoxTitle">
                Current Orders
                <h2 className="orderAreaBoxSubTitle">{order.length}</h2>
              </div>
            </div>
          </div>
          <div className="orderAreaBox">
            <div className="orderAreaBoxContent">
              <CookingPot
                className="animate-pulse"
                color="#fcb700"
                size={100}
              />
              <div className="orderAreaBoxTitle">
                Currently Cooking
                <h2 className="orderAreaBoxSubTitle">{cooking.length}</h2>
              </div>
            </div>
          </div>
          <div className="orderAreaBox">
            <div className="orderAreaBoxContent">
              <TicketCheck
                className="animate-pulse"
                color="#fcb700"
                size={100}
              />
              <div className="orderAreaBoxTitle">
                Ready To Serve
                <h2 className="orderAreaBoxSubTitle">{readyItems.length}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-10 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            {/* OrderCard */}
            <h2 className="text-2xl font-semibold py-4">Current Orders</h2>

            {order.length === 0 ? (
              <h2 className="text-2xl font-semibold py-4 text-amber-400">
                No orders at the moment
              </h2>
            ) : (
              order.map((order) => (
                <OrderCard
                  key={order.order_no}
                  order={order}
                  handleOrder={handleOrder}
                ></OrderCard>
              ))
            )}
          </div>

          <div className="md:col-span-4 ">
            <h2 className="text-2xl font-semibold py-4">Cooking</h2>

            {cooking.length === 0 ? (
              <h2 className="text-2xl font-semibold py-4 text-amber-400">
                No orders at the moment
              </h2>
            ) : (
              cooking.map((order) => (
                <CookingCard
                  key={order.order_no}
                  order={order}
                  handleCooking={handleCooking}
                ></CookingCard>
              ))
            )}

            <h2 className="text-2xl font-semibold py-4">Ready To Serve</h2>

            {readyItems.length === 0 ? (
              <h2 className="text-2xl font-semibold py-4 text-amber-400">
                No orders at the moment
              </h2>
            ) : (
              readyItems.map((order) => (
                <ReadyCard key={order.order_no} order={order}></ReadyCard>
              ))
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default OrderContainer;
