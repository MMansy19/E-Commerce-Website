import { useState } from "react";
import RedButton from "../components/common/components/RedButton";
import i18n from "../components/common/components/LangConfig";
import { Link } from "@mui/material";
// import { functions } from "../firebase";
const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
  });

  // const handlePayment = async () => {
  //   // Call Firebase Function to process payment
  //   const processPayment = functions.httpsCallable("processPayment");
  //   try {
  //     const result = await processPayment(paymentInfo);
  //     // Handle success
  //     console.log("Payment successful:", result.data);
  //   } catch (error) {
  //     // Handle error
  //     console.error("Payment error:", error);
  //   }
  // };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-48">
      {/* Payment form */}
      <h1 className="text-2xl font-semibold mb-4">
        {i18n.t("payment.payment")}
      </h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            {i18n.t("payment.number")}
          </label>
          <input
            type="text"
            id="cardNumber"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            value={paymentInfo.cardNumber}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
            }
            placeholder={i18n.t("payment.enter")}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="expDate"
            className="block text-sm font-medium text-gray-700"
          >
            {i18n.t("payment.expirationDate")}
          </label>
          <input
            type="text"
            id="expDate"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            value={paymentInfo.expDate}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, expDate: e.target.value })
            }
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
            value={paymentInfo.cvv}
            onChange={(e) =>
              setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
            }
            placeholder="CVV"
          />
        </div>
        {/* Place Order button */}
        <Link href="/">
          <RedButton
            name={i18n.t("redButtons.placeOrder")}
            // onClick={handlePayment}
          />
        </Link>
      </form>
    </div>
  );
};

export default Payment;
