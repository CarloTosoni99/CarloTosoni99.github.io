import { component$, useStyles$ } from '@builder.io/qwik';

import style from './article.css?inline';


const doiUrl = "https://doi.org/";

interface article {
	data: {
		title: string;
		authors: string;
		conference: boolean;
    image: string;
		name: string;
		date: string;
		doi: string;
	}
}

export default component$<article>((props) => {
  useStyles$(style);

  return (
    <div class='box pub' >
      <div class='pub-img'>
        <img class='pub-logo' src={props.data.image} alt="SPIRE logo"/>
      </div>
      <div class='pub-content'>
        <h3>Title: <span class='pub-content-category'>{props.data.title}</span></h3>
        <h3>Authors: <span class='pub-content-category'>{props.data.authors}</span></h3>
        <h3>{props.data.conference ? "Conference:" : "Journal:"} <span class='pub-content-category'>{props.data.name}</span></h3>
        <h3>Date: <span class='pub-content-category'>{props.data.date}</span> Doi: <a class="hyplink" href={`${doiUrl}${props.data.doi}`} target="_blank">{props.data.doi}</a></h3>
      </div>
    </div>
  );
});