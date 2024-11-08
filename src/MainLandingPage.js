import React, { useState } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";

import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import ReactModal from "react-modal";
import ConvertKitForm from "components/convertkit-form";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <AnimationRevealPage>


     
      <Hero
        heading={
          <>
            Delicious & Affordable{" "}
            <HighlightedText>Meals Near You.</HighlightedText>
          </>
        }
        description="Own a piece of nature near Bangalore.Explore farmlands starting at Rs 30 Lacs."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Unique <HighlightedText>Farmlands & Farmhouses.</HighlightedText>
          </>
        }
      />
      <MainFeature
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Invest confidently with
            <wbr />{" "}
            <HighlightedText>
              <div style={{ display: "flex", alignItems: "center" }}>
                {" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  color="white"
                  height="48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "white", marginRight: 8 }}
                >
                  <path d="M112.41,102.53a8,8,0,0,1,5.06-10.12l12-4A8,8,0,0,1,140,96v40a8,8,0,0,1-16,0V107.1l-1.47.49A8,8,0,0,1,112.41,102.53ZM248,208a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16h8V104A16,16,0,0,1,40,88H80V56A16,16,0,0,1,96,40h64a16,16,0,0,1,16,16v72h40a16,16,0,0,1,16,16v56h8A8,8,0,0,1,248,208Zm-72-64v56h40V144ZM96,200h64V56H96Zm-56,0H80V104H40Z"></path>
                </svg>
                LivIndex.
              </div>
            </HighlightedText>
          </>
        }
        description={
          <>
            <Description>
              Introducing LivIndex—a smart investment analysis tool that
              evaluates the growth potential of farmland and plotted
              developments. LivIndex provides a comprehensive view of each
              property’s future value by assessing infrastructure essentials
              like nearby cities, hospitals, schools, airports, and highways.
              With LivIndex, discover properties primed for growth, backed by
              data-driven insights into the location’s evolving connectivity and
              accessibility
            </Description>
          </>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText=""
        imageSrc={"./livindex.png"}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      {/* <Features
        heading={
          <>
            Unique collection of{" "}
            <HighlightedText>Farmlands & Farmhouses.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      /> */}
      <MainFeature2
        subheading={<Subheading></Subheading>}
        heading={
          <>
            Gain clarity with{" "}
            <HighlightedText>
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  color="white"
                  height="32"
                  width="32"
                  style={{ marginRight: 8 }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M230.357 17.62c-5.547.092-11.576 1.096-18.023 3.204-23.305 7.618-73.14 45.618-83.234 99.074 45.49-22.467 84.27-17.018 107.437-25.052 52.28-18.113 38.996-77.965-6.18-77.225zm120.215 54.4c-12.926.01-26.166 1.873-39.002 6.37 42.205 28.16 56.877 64.468 75.414 80.518 46.965 40.667 98.17-16.56 52.004-57.972-13.688-12.28-49.637-28.94-88.416-28.915zm-70.3 38.177c-19.064-.228-41 3.8-59.237 16.246 36.71 12.436 54.713 36.326 71.565 44.502h.002c42.693 20.722 69.162-31.628 26.91-53.056-7.83-3.974-22.416-7.49-39.24-7.693zm-90.295 15.278c-6.9-.114-14.648 2.048-22.71 7.304-15.69 10.228-44.953 48.12-41.83 89.562 29.127-25.574 58.818-29.222 74.327-39.727 31.31-21.207 17.284-56.694-9.787-57.14zM69.723 138.68c-16.972-.096-34.502 11.827-40.094 38.377-5.056 23.994 2.93 86.155 44.183 121.62 3.285-50.63 27.397-81.49 32.02-105.568 6.603-34.317-14.29-54.307-36.11-54.43zm282.162 22.603c7.584 38.012-4.102 65.546-2.758 84.23 3.4 47.335 61.976 44.085 59.406-3.224-1.01-18.703-19.197-62.992-56.648-81.007zm-95.64 27.38c-37.658 0-68.384 30.728-68.384 68.382 0 37.655 30.73 68.38 68.384 68.38 37.657 0 68.38-30.726 68.38-68.38 0-37.655-30.725-68.383-68.38-68.383zm0 18.68c27.558 0 49.702 22.143 49.702 49.702 0 27.56-22.14 49.7-49.703 49.7-27.56 0-49.703-22.14-49.703-49.7 0-27.56 22.143-49.703 49.704-49.703zm182.507 8.317c-3.286 50.63-27.396 81.49-32.02 105.57-11.738 61.004 63.423 76.735 76.205 16.05 5.054-23.995-2.932-86.156-44.185-121.62zm-305.86 19.27c-15.24.07-30.174 12.75-28.85 37.144 1.013 18.702 19.198 62.99 56.65 81.006-7.585-38.01 4.1-65.548 2.757-84.232-1.648-22.928-16.24-33.986-30.557-33.918zm254.247 57.09c-29.128 25.575-58.82 29.223-74.327 39.728-39.293 26.613-7.19 75.712 32.496 49.834 15.69-10.228 44.952-48.117 41.83-89.56zm-185.79 46.64c-30.664-.36-43.938 39.734-8.287 57.815 16.704 8.476 64.15 14.87 98.476-8.555-36.71-12.436-54.714-36.326-71.565-44.502h-.002c-6.67-3.238-12.945-4.69-18.623-4.758zm-108.18 2.844c-33.205-.786-54.937 40.19-19.592 71.896 18.25 16.375 76.075 40.54 127.416 22.545-42.204-28.16-56.877-64.467-75.414-80.515-11.007-9.532-22.245-13.686-32.41-13.926zm290.295 52.935c-45.488 22.465-84.27 17.016-107.436 25.05h-.003c-58.7 20.337-34.744 93.295 24.203 74.022 23.305-7.616 73.14-45.618 83.235-99.073z"></path>
                </svg>
                LivIQ
              </div>
            </HighlightedText>
          </>
        }
        statistics={[]}
        description="LivIQ brings together all the essential details about a project and its surroundings, from property specifics to area amenities. Accessible anytime, it’s ready to answer your questions, clarify doubts, and provide deep insights into nearby attractions, infrastructure, and lifestyle conveniences. Discover properties confidently with LivIQ as your personal guide."
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="./liviq.png"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/3 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <MainFeature2
        subheading={<Subheading></Subheading>}
        heading={
          <>
            <HighlightedText>Bengaluru</HighlightedText> is expanding.
          </>
        }
        imageSrc="./bmap2.png"
        showDecoratorBlob={false}
        description={
          <div>
            <div>
              {" "}
              With a population nearing 13 million as of 2023 and growing by 47%
              in the past decade, Bangalore is India’s third-largest city. The
              BMRDA is planning to extend the city to nearly 5,000 sq km,
              pushing land prices up by 10-12% annually in the outskirts and
              5-8% in central areas.
              <br></br>
              The <b>2020 amendment to the Karnataka Land Reforms Act</b> now allows non-agriculturists to invest in agricultural land, which was previously restricted.
              This change has spurred a 30% increase in land inquiries and a 15-20% price rise in regions around Bangalore
            </div>
          </div>
        }
        features={[
          {
            title: "Affordable",
            description:
              "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`,
          },
          {
            title: "Professionalism",
            description:
              "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`,
          },
        ]}
      />
      {/* <Testimonial
        subheading=""
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      /> */}
      {/* <DownloadApp
        text={
          <>
            People around you are ordering delicious meals using the{" "}
            <HighlightedTextInverse>Treact App.</HighlightedTextInverse>
          </>
        }
      /> */}
      <Footer />
    </AnimationRevealPage>
  );
};
