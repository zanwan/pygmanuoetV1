import { yangnuSocialMedia } from "../constants";
import { fisfisaSocialMedia } from "../constants";
import { publisherSocialMedia } from "../constants";
import { contact } from "../constants";

import { hongfang, fisfisa, facebook, instagram } from "../assets/index";

const Footer = () => {
  return (
    <div className="flex justify-center px-8 pb-16 md:px-0 md:w-1/2 mx-auto my-16">
      <div className="flex-col justify-start w-1/3">
        <p className="text-white text-md">出版</p>
        <a href={publisherSocialMedia[0].url} target="_blank" rel="noreferrer">
          <img src={hongfang} className="w-[80px] md:w-[120px] mt-2" />
        </a>
      </div>

      <div className="flex-col justify-start w-1/3">
        <p className="text-white text-md">行銷</p>
        <a href={fisfisaSocialMedia[0].url} target="_blank" rel="noreferrer">
          <img src={fisfisa} className="w-[80px] md:w-[100px] mt-2" />
        </a>
        <div className="flex flex-row justify-start mt-2">
          <a href={fisfisaSocialMedia[1].url} target="_blank" rel="noreferrer">
            <img src={facebook} className="h-[18] w-[18] mr-2"></img>
          </a>
          <a href={fisfisaSocialMedia[2].url} target="_blank" rel="noreferrer">
            <img src={instagram} className="h-[18] w-[18]"></img>
          </a>
        </div>
      </div>

      <div className="flex-col justify-start w-1/3">
        <p className="text-white text-md">更多資訊</p>
        <a href={yangnuSocialMedia[0].url} target="_blank" rel="noreferrer">
          <p className="text-white font-notoSerifTC">
            {yangnuSocialMedia[0].title}
          </p>
        </a>
        <p className="text-white font-notoSerifTC text-sm">
          客服信箱：hung-fan@yahoo.com.tw
        </p>
        <p className="text-white font-notoSerifTC text-sm">
          聯絡電話：(02)23686790
        </p>
      </div>
    </div>
  );
};

export default Footer;
