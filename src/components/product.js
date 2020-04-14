import React from "react";
import styled from "styled-components";
import ProductCard from "./product_card";

class Product extends React.Component {
  render() {
    const productInfos = [
      {
        name: "キモチの切り替えカタログ",
        genre: "webページ",
        external_link_url: "https://kimochikirikae-catalog.com/",
        desc:
          "初めて自身で制作したwebページ。気分転換したい時などにその方法を閲覧することができる。HTML/CSS, jQueryで実装した。",
        background_color: "#A4BE3C",
      },
      {
        name: "シアターコンシェルジュ",
        genre: "iOSアプリ",
        external_link_url: "https://apps.apple.com/jp/app/id1483325397",
        desc:
          "初めてApp Storeに公開した自作のiOSアプリ。予約した劇場鑑賞映画の情報や、移動経路、感想のメモなどが管理できるアプリ。firebaseを利用してデータを保存している。/CSS, jQueryで実装した。",
        background_color: "#A73637",
      },
      {
        name: "Tetra",
        genre: "iOSアプリ",
        external_link_url: "https://apps.apple.com/jp/app/id1490807423",
        desc:
          "UIにこだわったシンプルなTODOアプリ。画面が4分割されており、それぞれの領域にタスクを登録することができる。",
        background_color: "#7EBEFF",
      },
      {
        name: "Charm Me!",
        genre: "Androidアプリ",
        external_link_url:
          "https://play.google.com/store/apps/details?id=app.takumi.obayashi.charmme",
        desc:
          "自分で決めたジェスチャーを描くことでタイマーが作動するアプリ。ジェスチャーを魔法に見立てることで“自分にバフをかける”ことをイメージした世界観を演出した。",
        background_color: "#740206",
      },
      {
        name: "Sireee",
        external_link_url: "",
        genre: "iOSアプリ（非公開）",
        desc:
          "freeeのチーム開発インターンでの成果物。簡単な勤怠打刻と状態管理に加えて、登録したフレーズでSiriでの打刻を行うことができる。主にSiriでの処理部分の開発を担当した。",
        background_color: "#FFCB55",
      },
      {
        name: "SHABOM",
        genre: "iOS/Androidアプリ",
        external_link_url: "",
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  margin: 0 0 0 auto;
  height: 80%;
  width: 1300px;
`;

export default Product;
