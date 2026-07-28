import { products } from "../data/products";
import Card from "./Card";
import Section from "./Section";
import styles from "./Product.module.css";

function Product() {
  return (
    <Section id="product" title="Product" backgroundColor="#9ba2ff">
      <div className={styles.grid}>
        {products.map((product) => (
          <Card
            key={product.name}
            title={product.name}
            subtitle={product.genre}
            description={product.description}
            image={product.image}
            backgroundColor={product.backgroundColor}
            link={product.link}
          />
        ))}
      </div>
      <footer className={styles.footer}>&copy;2020 Takumi Obayashi</footer>
    </Section>
  );
}

export default Product;
