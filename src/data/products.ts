import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import charmMe from "../assets/charm-me.svg";
import kimochiNoKirikaeCatalog from "../assets/kimochi-no-kirikae-catalog.svg";
import shabom from "../assets/shabom.svg";
import sireee from "../assets/logo_cacao_lateral.svg";
import tetra from "../assets/tetra.svg";
import theaterConcierge from "../assets/theater-concierge.svg";

export type Product = {
  name: string;
  genre: string;
  description: string;
  backgroundColor: string;
  image: string;
  /** Absent for anything that was never published, which is why the card
   *  renders no link at all rather than an empty one. */
  link?: { url: string; icon: IconDefinition };
};

export const products: Product[] = [
  {
    name: "キモチの切り替えカタログ",
    genre: "webページ",
    description:
      "初めて自身で制作したwebページ。気分転換したい時などにその方法を閲覧することができる。HTML/CSS, jQueryで実装した。",
    backgroundColor: "#A4BE3C",
    image: kimochiNoKirikaeCatalog,
    link: {
      url: "https://kimochikirikae-catalog.com/",
      icon: faUpRightFromSquare,
    },
  },
  {
    name: "シアターコンシェルジュ",
    genre: "iOSアプリ",
    description:
      "初めてApp Storeに公開した自作のiOSアプリ。予約した劇場鑑賞映画の情報や、移動経路、感想のメモなどが管理できるアプリ。firebaseを利用してデータを保存している。",
    backgroundColor: "#A73637",
    image: theaterConcierge,
    link: { url: "https://apps.apple.com/jp/app/id1483325397", icon: faApple },
  },
  {
    name: "Tetra",
    genre: "iOSアプリ",
    description:
      "UIにこだわったシンプルなTODOアプリ。画面が4分割されており、それぞれの領域にタスクを登録することができる。",
    backgroundColor: "#7EBEFF",
    image: tetra,
    link: { url: "https://apps.apple.com/jp/app/id1490807423", icon: faApple },
  },
  {
    name: "Charm Me!",
    genre: "Androidアプリ",
    description:
      "自分で決めたジェスチャーを描くことでタイマーが作動するアプリ。ジェスチャーを魔法に見立てることで“自分にバフをかける”ことをイメージした世界観を演出した。",
    backgroundColor: "#740206",
    image: charmMe,
    link: {
      url: "https://play.google.com/store/apps/details?id=app.takumi.obayashi.charmme",
      icon: faGooglePlay,
    },
  },
  {
    name: "Sireee",
    genre: "iOSアプリ（非公開）",
    description:
      "freeeのチーム開発インターンでの成果物。簡単な勤怠打刻と状態管理に加えて、登録したフレーズでSiriでの打刻を行うことができる。主にSiriでの処理部分の開発を担当した。",
    backgroundColor: "#FFCB55",
    image: sireee,
  },
  {
    name: "SHABOM",
    genre: "iOS/Androidアプリ",
    description:
      "Hack U 2019 OSAKAで発表したAR技術を用いたSNSアプリ。チーム内ではマネージャーを担当。Happy Hacking賞を受賞した。",
    backgroundColor: "#505C73",
    image: shabom,
  },
];
