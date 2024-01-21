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
  ModalTest,
  ReviewquoteGroup,
} from "./components/index";

import {
  AllBooks,
  extroCover,
  reviewNote1,
  reviewNote2,
  reviewNote3,
  title1,
  title2,
  title3,
  title4,
  title5,
} from "./assets";

import { reviews } from "./constants/index.js";

function App() {
  return (
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

      {/* <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ModalTest />
        </div>
      </div> */}

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <PoemBLock
            poem1={"詩以有限的篇幅作無窮的擴充，"}
            poem2={"帶領你選擇真實。"}
            poemTitle={"《一首詩的完成》"}
          />
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
          <SectionTitle title={title1} />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <EditorLetter reviews={reviews[8]} />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexStart} scroll-mt-36 snap-start`}
        id="recommendation"
      >
        <div className={`${styles.boxWidth}`}>
          <SectionTitle title={title2} />
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
          <ReviewquoteGroup />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
        id="books"
      >
        <div className={`${styles.boxWidth}`}>
          <SectionTitle title={title3} />
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

      <div
        className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
        id="aboutYangmu"
      >
        <div className={`${styles.boxWidth}`}>
          <SectionTitle title={title5} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AboutAuthor />
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart} mt-4`}>
        <div className={`${styles.boxWidth}`}>
          <PoemBLock
            poem1={"我在探索一條航線，傾全力"}
            poem2={"將歲月顯示在傲岸的額"}
            poemTitle={"〈時光命題〉"}
          />
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
        className={`bg-primary ${styles.flexStart} scroll-mt-56 snap-start mt-[-50px]  ss:mt-[-130px] sm:mt-[-170px] md:mt-[-280px] lg:mt-[-380px]`}
        id="purchase"
      >
        <div className={`${styles.boxfullWidth}`}>
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
            <p className="font-notoSerifTC text-4xl font-semibold text-center">
              常見問題
            </p>
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
}

export default App;
