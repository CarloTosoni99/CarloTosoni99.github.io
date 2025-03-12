import { component$, useStyles$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

import style from './duck.css?inline';

const duckframes = [1,2,3,4,3,2,1,5,6,7,6,5];

const baseDuckPath = [
  "src/imgs/duck/duck",
  "src/imgs/duck/skeleduck"
];

const duckFormat = ".png";

const leftAnim = "duck-left";
const rightAnim = "duck-right";

const duckFrameTime = 100;
const duckAnimTime = 12000;

const duckChoice = Math.random();
let duckIndex = 0;
if (duckChoice >= 0.99)
  duckIndex = 1;

export default component$(() => {
  useStyles$(style);

  const currDuckFrame = useSignal(0);
  const duckToTheLeft = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    duckToTheLeft.value = true;
    const duckDirection = setInterval(() => {
      duckToTheLeft.value = !duckToTheLeft.value;
    }, duckAnimTime);

    return () => clearInterval(duckDirection);
  });

  useVisibleTask$(() => {
    const duckInterval = setInterval(() => {
      currDuckFrame.value = (currDuckFrame.value + 1) % duckframes.length;
    }, duckFrameTime);

    return () => clearInterval(duckInterval); // Cleanup when component unmounts
  });

  return (
    <div class={`duck-div ${
      duckToTheLeft.value ? leftAnim : rightAnim}
    `}>
      <img id='duck' src={`${baseDuckPath[duckIndex]}${ 
        duckframes[currDuckFrame.value] + (duckToTheLeft.value ? 0 : 7)
        }${duckFormat}`} 
      alt='a duck!'/>
    </div>
  );
});