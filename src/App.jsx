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
} from "./components/index";

import { AllBooks } from "./assets";
import { extroCover } from "./assets";

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

    <div className={`bg-primary md:pl-12  ${styles.flexStart}`} id="home">
      <div className={`${styles.boxWidth}`}>
        <HeroFeature1 />
      </div>
    </div>

    <div className={`bg-primary sm:pr-12 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature2 />
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
      id="features"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"為何讀楊牧？"} />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <div className="grid md:grid-cols-2 gap-4">
          <ReviewCard reviews={reviews[0]} bgColor={"#F1E8E2"} />
          <ReviewCard reviews={reviews[1]} bgColor={"#F1EDE2"} />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <ReviewCard reviews={reviews[2]} bgColor={"#E4EAEA"} />
          <ReviewCard reviews={reviews[3]} bgColor={"#DFE6DD"} />
          <ReviewCard reviews={reviews[4]} bgColor={"#E4E4EA"} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <ReviewCard reviews={reviews[5]} bgColor={"#EAE1E6"} />
          <ReviewCard reviews={reviews[6]} bgColor={"#DEE0E7"} />
        </div>
      </div>
    </div>

    <div
      className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`}
      id="product"
    >
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"文字是唯一的條件"} />
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
