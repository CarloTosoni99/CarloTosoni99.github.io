import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from '@builder.io/qwik-city';

import style from './topbar.css?inline';


export default component$((props: {page: Number}) => {

  useStyles$(style)

  return (
    <div class='bar'>
      <Link class={[
        'link',
        props.page==1 ? 'current' : '',
      ]} href="/contacts/">Contacts</Link>
      <Link class={[
        'link',
        props.page==2 ? 'current' : '',
      ]} href="/publications/">Publications</Link>
      <Link class={[
        'link',
        props.page==3 ? 'current' : '',
      ]} href="/">About</Link>
    </div>
  );
});