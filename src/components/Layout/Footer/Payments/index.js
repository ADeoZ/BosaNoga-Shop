import PaymentsItem from "./PaymentsItem";

export default function Payments() {
  return (
    <div className="footer-pay">
      <PaymentsItem classType={"paypal"} />
      <PaymentsItem classType={"master-card"} />
      <PaymentsItem classType={"visa"} />
      <PaymentsItem classType={"yandex"} />
      <PaymentsItem classType={"webmoney"} />
      <PaymentsItem classType={"qiwi"} />
    </div>
  );
}
