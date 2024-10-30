import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features2 from "components/features/VerticalWithAlternateImageAndText.js";

import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import Header from "Header";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Header color="dark"></Header>
      <MainFeature
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Livinzy is a new age
            <wbr />{" "}
            <HighlightedText>
               
                Proptech Platform.
            </HighlightedText>
          </>
        }
        description={
          <>
            <Description>
              Livinzy's mission is to help you live the best version of your life.
              Towards that mission, we are building a platform to help you make better home purchase decisions around lifestyle and investment.
             By providing most upto date knowledge about the property and gather extensve data, we provide insights like no one else can. 
             Get clarity and gain confidence while making purchasing decisions with Livinzy.
            </Description>
          </>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText=""
        imageSrc={"./livtech.png"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
  {/* <Features2></Features2> */}
      
      <Footer />
    </AnimationRevealPage>
  );
};
