import { api } from "@/api/api";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ amount }: { amount: string }) {
  return (
    <PayPalScriptProvider
      options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={async () => {
          try {
            const res = await api.post("/payments/create-order", {
              amount, // dynamic amount from modal
            });
            return res.data.id;
          } catch (error: any) {
            const errorMsg = error.response?.data?.message || error.message || "Failed to create order";
            console.error("PayPal Create Order Error:", errorMsg);
            throw new Error(errorMsg);
          }
        }}
        onApprove={async (data) => {
          try {
            const res = await api.post("/payments/capture-order", {
              orderId: data.orderID,
            });
            alert("Payment Successful!");
            console.log("PayPal Capture:", res.data);
          } catch (error: any) {
            const errorMsg = error.response?.data?.message || error.message || "Failed to capture order";
            console.error("PayPal Capture Error:", errorMsg);
            alert(`Payment failed: ${errorMsg}`);
          }
        }}
        onError={(err: any) => {
          const errorMsg = err?.message || "Payment failed. Try again.";
          console.error("PayPal Error:", err);
          alert(`Payment error: ${errorMsg}`);
        }}
      />
    </PayPalScriptProvider>
  );
}