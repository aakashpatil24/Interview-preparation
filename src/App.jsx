import Layout from "./components/Layout";
import { PracticeProvider } from "./contexts/PracticeContext";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <PracticeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </PracticeProvider>
  );
}