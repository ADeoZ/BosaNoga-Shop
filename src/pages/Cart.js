import CartForm from "../components/CartForm";
import CartTable from "../components/CartTable";
import Layout from "../components/Layout";

export default function Cart() {
  return (
    <Layout>
      <CartTable />
      <CartForm />
    </Layout>
  );
}
