import React from "react";
import styled from "styled-components";
import ExperienceCard from "./experience_card";

class Experience extends React.Component {
  render() {
    const internInfos = [
      {
        company_name: "ライフイズテック株式会社",
        external_link_url: "",
        period: "2018/08~",
        desc:
          "学生メンターとして中高生に主にiPhoneアプリ制作を指導。キャンプではサブディレクターとしてディレクション業務も行う。",
        background_color: "#FFDF88",
      },
      {
        company_name: "チームラボ株式会社",
        period: "2019/09/02~09/13",
        desc:
          "2週間のサマーインターンに参加。iOSアプリ開発の実案件に携わった。RxSwiftやReduxでの設計などの技術を学んだ。",
        background_color: "#FFF35F",
      },
      {
        company_name: "株式会社グッドパッチ",
        period: "2020/01/29",
        desc:
          "1dayのデザインインターンに参加。ユーザーインタビューからプロトタイプ作成までのデザイン制作を体験した。",
        background_color: "#B1DAFF",
      },
      {
        company_name: "freee株式会社",
        period: "2019/08/19~08/29",
        desc:
          "2週間のチーム開発インターンシップに参加。Productで紹介している「Sireee」という勤怠管理のiOSアプリを作成。freee APIとSiriを使用し、音声で打刻ができるアプリを作成した。",
        background_color: "#BADDFF",
      },
      {
        company_name: "株式会社インゲージ",
        period: "2019/10~2020/01",
        desc:
          "ソフトウェアエンジニアインターンとして自社サービスである「Re:Lation」の機能開発に携わった。使用技術はAndularJSとRails。",
        background_color: "#FFD9AD",
      },
    ];

    const cardItems = internInfos.map((internInfo) => (
      <ExperienceCard
        company_name={internInfo.company_name}
        external_link_url={internInfo.external_link_url}
        period={internInfo.period}
        desc={internInfo.desc}
        background_color={internInfo.background_color}
        hero_image={internInfo.hero_image}
      ></ExperienceCard>
    ));

    return (
      <ExperienceContainer id="experience">
        <h1>Experience</h1>
        <ContentsContainer>{cardItems}</ContentsContainer>
      </ExperienceContainer>
    );
  }
}

const ExperienceContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: #fd9347;
  font-family: Futura, sans-serif;
  h1 {
    text-align: center;
    font-weight: 500;
    margin: 0;
    padding-top: 60px;
    margin-bottom: 20px;
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

export default Experience;
