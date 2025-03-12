import { component$, useStyles$ } from '@builder.io/qwik';
import Image from '../../imgs/io.jpeg?jsx';

import style from './presentation.css?inline';


interface blog {
  data: {
    name: string,
    title: string, 
    pre1: string,
    pre2: string,
    pre3: string
  }
}

export default component$<blog>((props) => {
  useStyles$(style);

  return (
    <div id="maindiv">
      <div id='left_dim'>
        <div class='box'>
          <h1>{props.data.name}</h1>
          <p>{props.data.pre1}</p>
        </div>
        <div class='box'>
          <h2>{props.data.title}</h2>
          <p>{props.data.pre2}</p>
          <p>{props.data.pre3}</p>
        </div>
      </div>
      <div id='right-dim'>
        <div class='box' id='right-div'>
          <Image id='io'></Image>
        </div>
      </div>
    </div>
  );
});