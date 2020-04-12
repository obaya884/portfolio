import React from "react";
import styled from "styled-components";
import ProductCard from "./product_card";

class Product extends React.Component {
  render() {
    const productInfos = [
      {
        name: "キモチの切り替えカタログ",
        genre: "webページ",
        desc:
          "初めて自身で制作したwebページ。気分転換したい時などにその方法を閲覧することができる。HTML/CSS, jQueryで実装した。",
        background_color: "#A4BE3C",
      },
      {
        name: "シアターコンシェルジュ",
        genre: "iOSアプリ",
        desc:
          "初めてApp Storeに公開した自作のiOSアプリ。予約した劇場鑑賞映画の情報や、移動経路、感想のメモなどが管理できるアプリ。firebaseを利用してデータを保存している。/CSS, jQueryで実装した。",
        background_color: "#A73637",
      },
      {
        name: "Tetra",
        genre: "iOSアプリ",
        desc:
          "UIにこだわったシンプルなTODOアプリ。画面が4分割されており、それぞれの領域にタスクを登録することができる。",
        background_color: "#7EBEFF",
      },
      {
        name: "Charm Me!",
        genre: "Androidアプリ",
        desc:
          "自分で決めたジェスチャーを描くことでタイマーが作動するアプリ。ジェスチャーを魔法に見立てることで“自分にバフをかける”ことをイメージした世界観を演出した。",
        background_color: "#740206",
      },
      {
        name: "Sireee",
        genre: "iOSアプリ（非公開）",
        desc:
          "freeeのチーム開発インターンでの成果物。簡単な勤怠打刻と状態管理に加えて、登録したフレーズでSiriでの打刻を行うことができる。主にSiriでの処理部分の開発を担当した。",
        background_color: "#FFCB55",
      },
      {
        name: "SHABOM",
        genre: "iOS/Androidアプリ",
        desc:
          "Hack U 2019 OSAKAで発表したAR技術を用いたSNSアプリ。チーム内ではマネージャーを担当。Happy Hacking賞を受賞した。",
        background_color: "#505C73",
      },
    ];

    const cardItems = productInfos.map((productInfo) => (
      <ProductCard
        name={productInfo.name}
        external_link_url={productInfo.external_link_url}
        genre={productInfo.genre}
        desc={productInfo.desc}
        background_color={productInfo.background_color}
        hero_image={productInfo.hero_image}
      ></ProductCard>
    ));

    return (
      <ProductContainer id="product">
        <h1>Product</h1>
        <ContentsContainer>{cardItems}</ContentsContainer>
        <footer>&copy;2020 Takumi Obayashi</footer>
      </ProductContainer>
    );
  }
}

const ProductContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: #9ba2ff;
  font-family: Futura, sans-serif;
  h1 {
    text-align: center;
    font-weight: 500;
    margin: 0;
    padding-top: 60px;
    margin-bottom: 20px;
  }
  footer {
    margin-left: 60px;
    text-align: left;
  }
`;

const ContentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  margin: 0 0 0 auto;
  height: 80%;
  width: 1300px;

  svg {
    position: absolute;
    top: 42%;
    right: -80px;
    padding: 0;
    margin: 0;
  }
`;

export default Product;
