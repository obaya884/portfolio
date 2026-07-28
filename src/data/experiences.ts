import freeeLogo from "../assets/freee-logo.svg";
import goodpatchLogo from "../assets/gp_logo.svg";
import ingageLogo from "../assets/ingage-logo.svg";
import lifeistechLogo from "../assets/lifeistech-logo.svg";
import teamlabLogo from "../assets/teamlab-logo.svg";

export type Experience = {
  companyName: string;
  url: string;
  period: string;
  description: string;
  backgroundColor: string;
  logo: string;
};

export const experiences: Experience[] = [
  {
    companyName: "ライフイズテック株式会社",
    url: "https://life-is-tech.com/",
    period: "2018/08~",
    description:
      "学生メンターとして中高生に主にiPhoneアプリ制作を指導。キャンプではサブディレクターとしてディレクション業務も行う。",
    backgroundColor: "#FFDF88",
    logo: lifeistechLogo,
  },
  {
    companyName: "チームラボ株式会社",
    url: "https://www.team-lab.com/",
    period: "2019/09/02~09/13",
    description:
      "2週間のサマーインターンに参加。iOSアプリ開発の実案件に携わった。RxSwiftやReduxでの設計などの技術を学んだ。",
    backgroundColor: "#FFF35F",
    logo: teamlabLogo,
  },
  {
    companyName: "株式会社グッドパッチ",
    url: "https://goodpatch.com/ja/",
    period: "2020/01/29",
    description:
      "1dayのデザインインターンに参加。ユーザーインタビューからプロトタイプ作成までのデザイン制作を体験した。",
    backgroundColor: "#B1DAFF",
    logo: goodpatchLogo,
  },
  {
    companyName: "freee株式会社",
    url: "https://corp.freee.co.jp/",
    period: "2019/08/19~08/29",
    description:
      "2週間のチーム開発インターンシップに参加。Productで紹介している「Sireee」という勤怠管理のiOSアプリを作成。freee APIとSiriを使用し、音声で打刻ができるアプリを作成した。",
    backgroundColor: "#BADDFF",
    logo: freeeLogo,
  },
  {
    companyName: "株式会社インゲージ",
    url: "https://ingage.co.jp/",
    period: "2019/10~2020/01",
    description:
      "ソフトウェアエンジニアインターンとして自社サービスである「Re:Lation」の機能開発に携わった。使用技術はAndularJSとRails。",
    backgroundColor: "#FFD9AD",
    logo: ingageLogo,
  },
];
