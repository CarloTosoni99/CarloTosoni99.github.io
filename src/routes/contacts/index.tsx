import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Topbar from '../../components/topbar/topbar';
import Contacts from '../../components/contacts/contacts';


export default component$(() => {

  return(
    <section>
      <Topbar page={1}/>
      <Contacts />
    </section>
  );
});

export const head: DocumentHead = {
  title: "My contacts",
  meta: [
    {
      name: "description",
      content: "My personal contacts",
    },
  ],
};