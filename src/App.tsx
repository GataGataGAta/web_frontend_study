import "./App.css";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <main className="app">
      <h1>Frontend Study</h1>

      <section className="product list">
        <ProductCard
        name="六角ボルト"
        productCode="BOLT-001"
        price={320}
        inStock={true}/>

        <ProductCard
          name="手袋"
          productCode="GLOVE-001"
          price={900}
          inStock={false}/>


      </section>
      </main>
  )
}

export default App;