import styles from "./style.js";

import {
  Navbar,
  HeroFeature1,
  Feature2,
  SectionTitle,
  ReviewCard,
  ProductFeature,
  BookGroup,
  AboutAuthor,
  Recitation,
  Purchase,
  Question,
  Footer,
  PoemBLock,
  EditorLetter,
} from "./components/index";

import {
  AllBooks,
  extroCover,
  reviewNote1,
  reviewNote2,
  reviewNote3,
} from "./assets";

import { reviews, product } from "./constants/index.js";

const App = () => (
  <div className="bg-primary w-full overflow-hidden snap-y">
    <div
      className={`${styles.paddingX} ${styles.flexCenter} bg-white fixed top-0 left-0 right-0 z-10 shadow-sm`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary  ${styles.flexStart}`} id="home">
      <div className={`${styles.boxWidth}`}>
        <HeroFeature1 />
      </div>
    </div>

    <div className={`bg-primary  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PoemBLock />
      </div>
    </div>

    <div className={`bg-primary sm:pr-12 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature2 />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
      id="editor"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"主編掛劍"} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <EditorLetter reviews={reviews[8]} bgColor={"#F1E8E2"} />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-36 snap-start`}
      id="features"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"眾家推崇"} />
        <div className="mt-[-62px] mx-auto px-4 md:px-0 w-full md:w-6/12 text-center text-lg md:text-2xl text-yellow-900 font-notoSerifTC tracking-wide subpixel-antialiased leading-relaxed">
          <br />
          奚密・張力・許又方・陳育虹
          <br />
          陳芳明・陳義芝・童子賢・須文蔚・楊照
          <br />
          楊澤・
          <span className="font-serif leading-3 align-baseline">瘂弦</span>
          ・鄭毓瑜・鄭樹森・謝旺霖
          <br />
          <span className="text-black text-sm md:text-lg">
            （按姓氏筆畫排序）
          </span>
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} mt-12`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className="grid md:grid-cols-2 gap-2">
          <ReviewCard
            reviews={reviews[0]}
            bgColor={"#F1E8E2"}
            bgStyle={reviewNote1}
          />
          <ReviewCard
            reviews={reviews[1]}
            bgColor={"#F1EDE2"}
            bgStyle={reviewNote2}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-2 mt-4">
          <ReviewCard
            reviews={reviews[2]}
            bgColor={"#E4EAEA"}
            bgStyle={reviewNote3}
          />
          <ReviewCard
            reviews={reviews[3]}
            bgColor={"#DFE6DD"}
            bgStyle={reviewNote1}
          />
          <ReviewCard
            reviews={reviews[4]}
            bgColor={"#E4E4EA"}
            bgStyle={reviewNote2}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-2 mt-4">
          <ReviewCard
            reviews={reviews[5]}
            bgColor={"#EAE1E6"}
            bgStyle={reviewNote3}
          />
          <ReviewCard
            reviews={reviews[6]}
            bgColor={"#DEE0E7"}
            bgStyle={reviewNote1}
          />
        </div>

        <div className="grid md:grid-cols-1 gap-2 mt-4 md:mx-[250px]">
          <ReviewCard
            reviews={reviews[7]}
            bgColor={"#EAE1E6"}
            bgStyle={reviewNote3}
          />
        </div>
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
      id="product"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"套書規格"} />
      </div>
    </div>

    <div className={`bg-primary sm:pl-12  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ProductFeature />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <BookGroup />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"關於楊牧"} />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutAuthor />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"聽見文學的聲音"} />
      </div>
    </div>

    <div className={`bg-primary mx-8 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} mt-4`}>
        <Recitation />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxfullWidth}`}>
        <img
          src={AllBooks}
          alt="poemTub-1"
          className="my-2 md:my-6 md:object-cover mx-auto mt-8 md:mt-32"
          loading="lazy"
        />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-24 scroll-mt-56 snap-start`}
      id="purchase"
    >
      <div className={`${styles.boxWidth}`}>
        <Purchase />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxfullWidth}`}>
        <img
          src={extroCover}
          alt="poemTub-1"
          className="w-full object-fill mx-auto"
          loading="lazy"
        />
      </div>
    </div>

    <div
      className={`bg-lightGreen ${styles.flexStart} mt-[-5px] pb-[48px] scroll-mt-24 snap-start`}
      id="questions"
    >
      <div className={`${styles.boxfullWidth}`}>
        <div className="mt-2">
          <p className="font-[ChenYuluoyan] text-6xl text-center">常見問題</p>
          <hr className="w-full md:w-1/2 mx-auto mt-4 border-black" />
        </div>
        <Question />
      </div>
    </div>

    <div
      className={`bg-darkGreen ${styles.flexStart} mt-[-5px] scroll-mt-24 snap-start`}
      id="questions"
    >
      <div className={`${styles.boxfullWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
