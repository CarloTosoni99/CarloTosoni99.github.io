import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Topbar from '~/components/topbar/topbar';
import Presentation from '~/components/presentation/presentation';
import Duck from '~/components/duck/duck';


const localUrlData = 'http://localhost:5173/data/about.json';
const remoteUrlData = 'https://carlotosoni99.github.io/data/about.json';

export const useDatafetch = routeLoader$(async () => {
  const response = await fetch(remoteUrlData);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return (await response.json()) as {
    name: string;
    title: string;
    pre1: string;
    pre2: string;
    pre3: string;
  }
});


export default component$(() => {
  const dataAbout = useDatafetch().value;


  return (
    <section>
      <Topbar page={3}/>
      <div class="main">
        <Duck />
        <Presentation data={dataAbout} />
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Carlo Tosoni's webpage",
  meta: [
    {
      name: "description",
      content: "This is my personal webpage!",
    },
  ],
};
