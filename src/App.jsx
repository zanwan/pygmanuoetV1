
import styles from './style';
import { Navbar,HeroFeature1, Feature2, SectionTitle, ReviewCard, ProductFeature,BookCard,Designfeature, AboutAuthor, AuthorQuote, Recitation, Purchase, Question, Footer } from './components';

import { AllBooks } from './assets';
import { extroCover } from './assets';

const App = () => (
  <div className='bg-primary w-full overflow-hidden snap-y'>

    
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-white fixed top-0 left-0 right-0 z-50`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>
    

    <div className={`bg-primary pl-12  ${styles.flexStart}`} id="home">
      <div className={`${styles.boxWidth}`}>
        <HeroFeature1/>
      </div>
    </div>

    <div className={`bg-primary pr-12 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Feature2/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`} id="features">
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"為何讀楊牧？"}/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>

          <div className='grid grid-cols-2 gap-4'>
          <ReviewCard/>
          <ReviewCard/>
          </div>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
          </div>

        
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`} id="product">
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"文字是唯一的條件"}/>
      </div>
    </div>

    <div className={`bg-primary pl-12  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ProductFeature/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>

          <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-6'>
            <BookCard/>
            </div>
            <div className='col-span-6'>
            <BookCard/>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-4 mt-4'>
            <div className='col-span-7'>
              <BookCard/> 
            </div>
            <div className='col-span-5'>
              <BookCard/>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-4 mt-4'>
            <div className='col-span-8'>
              <BookCard/> 
            </div>
            <div className='col-span-4'>
              <BookCard/>
            </div>
          </div>

        
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"從文字誕生的視覺觸感"}/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Designfeature/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"關於楊牧"}/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutAuthor/>
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexStart} scroll-mt-24 snap-start`} id="features">
      <div className={`${styles.boxWidth}`}>
        <SectionTitle title={"聆聽楊牧"}/>
      </div>
    </div> */}

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} mt-8`}>
        <Recitation/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AuthorQuote/>
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxfullWidth}`}>
       <img src={AllBooks} alt="poemTub-1" className='my-6 object-cover mx-auto'/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-24 scroll-mt-48 snap-start`} id="purchase">
      <div className={`${styles.boxWidth}`}>
        <Purchase/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxfullWidth}`}>
      <img src={extroCover} alt="poemTub-1" className='w-full object-fill mx-auto'/>
      </div>
    </div>

    <div className={`bg-lightGreen ${styles.flexStart} mt-[-5px] pb-[48px] scroll-mt-24 snap-start`} id="questions">
      <div className={`${styles.boxfullWidth}`}>
        <div className='mt-16'>
          <p className='text-4xl font-notoSerifTC text-center'>常見問題</p>
          <hr className='w-1/2 mx-auto mt-4 border-black'/>
        </div>
      <Question/>
      </div>
    </div>

    <div className={`bg-darkGreen ${styles.flexStart} mt-[-5px] scroll-mt-24 snap-start`} id="questions">
      <div className={`${styles.boxfullWidth}`}>
        <Footer/>
      </div>
    </div>



  </div>
);


export default App;
