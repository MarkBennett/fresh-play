/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import Counter from "../islands/Counter.tsx";

const h1 = apply`text-2xl font-bold`;

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class={tw`${h1}`}>Hello Fresh! :)</h1>
      <Counter start={3} />
    </div>
  );
}
