import styles from "./style.js";

import {
  Navbar,
  HeroFeature1,
  Feature2,
  SectionTitle,
  ReviewCard,
  ProductFeature,
  BookCard,
  Designfeature,
  AboutAuthor,
  AuthorQuote,
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
  grow,
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
        <EditorLetter reviews={reviews[0]} bgColor={"#F1E8E2"} />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
      id="features"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"眾家推崇"} />
        <div className="mt-[-62px] mx-auto w-6/12 text-center text-2xl text-yellow-900 font-notoSerifTC tracking-wide subpixel-antialiased leading-relaxed">
          <br />
          奚密・張力・許又方・陳育虹
          <br />
          陳芳明・陳義芝・童子賢・須文蔚・楊照
          <br />
          楊澤・
          <span
            className=" font-serif leading-3 align-baseline"
            style={{ fontSize: "1.6rem" }}
          >
            瘂弦
          </span>
          ・鄭毓瑜・鄭樹森・謝旺霖
          <br />
          <span className="text-black text-lg">（按姓氏筆畫排序）</span>
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
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <BookCard product={product[1]} height={200} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <BookCard product={product[2]} height={200} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <BookCard product={product[3]} height={200} />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-6">
            <BookCard product={product[4]} height={150} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <BookCard product={product[5]} height={150} />
          </div>
        </div>

        {/* <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-6">
            <BookCard product={product[5]} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <BookCard product={product[6]} />
          </div>
        </div> */}
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"從文字誕生的視覺觸感"} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Designfeature />
      </div>
    </div> */}

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

    {/* <div className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`} id="features">
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"聆聽楊牧"}/>
      </div>
    </div> */}

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

    {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AuthorQuote />
      </div>
    </div> */}

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxfullWidth}`}>
        <img
          src={AllBooks}
          alt="poemTub-1"
          className="my-6 object-cover mx-auto mt-32"
          loading="lazy"
        />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-24 scroll-mt-48 snap-start`}
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
        <div className="mt-8">
          <p className="text-4xl font-notoSerifTC text-center">常見問題</p>
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
