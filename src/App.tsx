import { Layout } from "./component/Layout";
import { Brands } from "./component/sections/Brands";
import { Hero } from "./component/sections/Hero";

function App() {
  return (
    <Layout title="Personal Portfolio">
      <Hero />
      <Brands />
    </Layout>
  )
}

export default App
