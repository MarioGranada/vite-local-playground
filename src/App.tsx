/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import iconStyles from "./iconStyles.module.css";
import { Icon } from "my-component-library-poc";
import { Icon as IconV2 } from "@heathmont/moon-react-assets";
import { Button, Carousel } from "@heathmont/moon-core-tw";

type RenderProps = {
  scrollLeftToStep?: () => void;
  scrollRightToStep?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
};

function App() {
  const [count, setCount] = useState(0);
  const items = Array.from({ length: 25 }, (index) => index);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p style={{ color: "white" }}>
        Icon here
        <Icon name="4k" className={iconStyles.icon} />
        <IconV2 name="beach" className={iconStyles.iconV2} />
      </p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-col w-full items-center">
        <Carousel scrollTo={5} className="w-full sm:max-w-auto">
          {({
            scrollLeftToStep,
            scrollRightToStep,
            canScrollLeft,
            canScrollRight,
          }: RenderProps) => (
            <>
              <Button
                onClick={scrollLeftToStep}
                disabled={!canScrollLeft}
                className="my-4"
                data-testid="scroll-left"
              >
                Scroll to left
              </Button>
              <Carousel.Reel>
                {items.map((_, index) => (
                  <Carousel.Item
                    key={index}
                    className="w-full max-w-80 h-48 border border-beerus"
                    data-testid={`carousel-${index}`}
                  >
                    {index}
                  </Carousel.Item>
                ))}
              </Carousel.Reel>
              <Button
                onClick={scrollRightToStep}
                disabled={!canScrollRight}
                className="my-4"
                data-testid="scroll-right"
              >
                Scroll to Right
              </Button>
            </>
          )}
        </Carousel>

        <Carousel scrollTo={1} className="w-full sm:max-w-auto">
          {({
            scrollLeftToStep,
            scrollRightToStep,
            canScrollLeft,
            canScrollRight,
          }: RenderProps) => (
            <>
              <div className="flex justify-between w-full items-center">
                <Button
                  className="border border-white w-[110px] h-[50px] rounded-full px-6 py-3 static"
                  onClick={scrollLeftToStep}
                  disabled={!canScrollLeft}
                  data-testid="scroll-left"
                >
                  <IconV2 name="chevron-left" />
                </Button>
                <Button
                  className="border border-white w-[110px] h-[50px] rounded-full px-6 py-3 static"
                  onClick={scrollRightToStep}
                  disabled={!canScrollRight}
                  data-testid="scroll-right"
                >
                  <IconV2 name="chevron-right" />
                </Button>
              </div>

              <Carousel.Reel>
                {items?.map((_item: any, index) => (
                  <Carousel.Item
                    key={index}
                    // className="m-4 flex flex-col items-center text-center p-4 bg-white rounded-2xl"
                    className="w-full max-w-80 h-48 border border-beerus"
                    data-testid={`supplier-${index}`}
                  >
                    <h5 className="mt-4 text-lg text-[#191546] not-italic font-bold leading-[19.2px]">
                      {index}
                    </h5>
                  </Carousel.Item>
                ))}
              </Carousel.Reel>
            </>
          )}
        </Carousel>
      </div>
    </>
  );
}

export default App;
