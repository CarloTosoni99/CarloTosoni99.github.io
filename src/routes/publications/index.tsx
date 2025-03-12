import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

import Topbar from '../../components/topbar/topbar';
import Pubs from '../../components/pubs/pubs';


//const localUrlData = 'http://localhost:5173/data/pubs.json';
const remoteUrlData = 'https://carlotosoni99.github.io/data/pubst.json';

export const useDatafetch = routeLoader$(async () => {
  const response = await fetch(remoteUrlData);
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return (await response.json()) as {
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
})

export default component$(() => {
  const dataPubs = useDatafetch().value;

  return(
    <section>
      <Topbar page={2}/>
      <Pubs data={dataPubs} />        
    </section>
  );
});

export const head: DocumentHead = {
  title: "My publications",
  meta: [
    {
      name: "description",
      content: "A list of all my publications",
    },
  ],
};