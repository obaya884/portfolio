import { products } from "../data/products";
import Card from "./Card";
import Section from "./Section";
import styles from "./Product.module.css";

const publishedCount = products.filter((product) => product.link).length;

function Product() {
  return (
    <Section
      id="product"
      title="Product"
      backgroundColor="var(--color-product)"
      count={`${products.length} 件 / 公開中 ${publishedCount}`}
      navTargetId="top"
      navLabel="先頭に戻る"
      navDirection="up"
    >
      <div className={styles.grid}>
        {products.map((product) => (
          <Card
            key={product.name}
            title={product.name}
            meta={product.genre}
            description={product.description}
            image={product.image}
            plateColor={product.backgroundColor}
            url={product.link?.url}
            live={Boolean(product.link)}
          />
        ))}
      </div>
      <p className={styles.footer}>&copy;2020 Takumi Obayashi</p>
    </Section>
  );
}

export default Product;
