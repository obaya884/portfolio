import styled from "styled-components";

import { products } from "../data/products";
import Card from "./Card";
import Section from "./Section";

function Product() {
  return (
    <Section id="product" title="Product" backgroundColor="#9ba2ff">
      <ContentsContainer>
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
      </ContentsContainer>
      <Footer>&copy;2020 Takumi Obayashi</Footer>
    </Section>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  margin: 0 0 0 auto;
  height: 80%;
  width: 1300px;
`;

const Footer = styled.footer`
  margin-left: 60px;
  text-align: left;
`;

export default Product;
