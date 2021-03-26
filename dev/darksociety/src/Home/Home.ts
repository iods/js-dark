import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Home.scss";

const template = html`<h1>hi there.</h1><p>Webpack, Typescript, SASS.</p>`;

@customElement({
  name: "ds-home",
  template,
  styles,
})
export default class HomeComponent extends FASTElement {}
