import { component$, useStyles$ } from '@builder.io/qwik';

import LinkedIn from '../../imgs/LinkedIn.png?jsx';
import style from './contacts.css?inline';

const linkedInLink = "https://www.linkedin.com/in/carlo-tosoni-42203b273/";

export default component$(() => {
  useStyles$(style);

  return (
    <div class='main'>
      <h1 id='cont-title'>My Contacts</h1>
      <div class='box' id='cont-box'>
        <p>If you'd like to contact me to discuss research or for any other reason, feel free to email me at<a class="hyplink" href="mailto:carlo.tosoni@unive.it">carlo.tosoni@unive.it</a>.</p>
        <p>Otherwise, here you can find my<a class="hyplink" href="../src/media/EnglishCVMarch.pdf" target="_blank">CV</a>.</p>
        <p>I don't use much social media, but here you can find my LinkedIn account</p>
        <div id="cont-div-linkedin">
          <LinkedIn id="linkedInIcon"></LinkedIn><p id="cont-par-linkedin"><a class="hyplink" href={linkedInLink} target="_blank">{linkedInLink}</a></p>
        </div>
      </div>
    </div>
  );
});