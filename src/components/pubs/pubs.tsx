import { component$, useStyles$ } from '@builder.io/qwik';

import Article from '~/components/article/article';
import style from './pubs.css?inline';


interface pubs {
  data: {
    pubs: [{
      article: {
        title: string;
        authors: string;
        conference: boolean;
        name: string;
        image: string;
        date: string;
        doi: string;
      };
      id: number;
    }];
  };
};

export default component$<pubs>((props) => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 id='pubs-title'>My Publications</h1>
      {props.data.pubs.map((pub) => (
        <Article key={pub.id} data={pub.article}/>
      ))} 
    </div>
  );
});