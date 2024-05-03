import React, {useState, useLayoutEffect} from 'react'

import HomeNewProducts from '../components/HomeNewProducts';
import CtaOfferImg from '../components/CtaOfferImg';
import HeroBanner from '../components/HeroBanner';
import ShopByCategory from '../components/ShopByCategory';
import HomeBlogs from '../components/HomeBlogs';
import VideoCta from '../components/VideoCta';
import HomeGoldPolishSliverJewlary from '../components/HomeGoldPolishSliverJewlary';
import HomeExclusiveSilverJewalry from '../components/HomeExclusiveSilverJewalry';
import HomeWhatsNewOurStore from '../components/HomeWhatsNewOurStore';
import HomeMensCollections from '../components/HomeMensCollections';

import HomeExclusiveLooks from '../components/HomeExclusiveLooks';
import HomeExclusiveLooks1 from '../components/HomeExclusiveLooks1';

import HomeTestomonials from '../components/HomeTestomonials';
import HomeMoreBrands from '../components/HomeMoreBrands';
import HomeCustomPrint from '../components/HomeCustomPrint';
import IconBox from '../components/IconBox';
import HomeEasyToLaunch from '../components/HomeEasyToLaunch';
import HomeEasyToUse from '../components/HomeEasyToUse';
import DesignYourOwn from '../components/DesignYourOwn';
import HomeTodaysDeal from '../components/HomeTodaysDeal';
import HomeOurFetures from '../components/HomeOurFetures';
import HomePopularCategories from '../components/HomePopularCategories';

export default function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('Featured');

  return (
<>
<HeroBanner />
<HomeMoreBrands/>
<HomeCustomPrint/>
<HomeEasyToLaunch/>
<HomeEasyToUse/>
<DesignYourOwn/>
<HomeTodaysDeal/>
<VideoCta/>
<HomeOurFetures/>
<HomePopularCategories/>
<HomeTestomonials/>
<IconBox/>

        {/* <ShopByCategory/>
        
        <CtaOfferImg />
     <HomeNewProducts activeTab={activeTab} setActiveTab={setActiveTab} />  
        <HomeGoldPolishSliverJewlary/>
        <HomeExclusiveSilverJewalry/> 
        
        <HomeWhatsNewOurStore/> 
        <HomeMensCollections/>

         <HomeExclusiveLooks/> 

         <HomeExclusiveLooks1/> 

        <HomeBlogs/> */}
</>
  )
}
