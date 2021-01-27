import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./NotFound.scss";

const template = html`<h1>Page not found!</h1>`;

@customElement({
  name: "ds-not-found",
  template,
  styles,
})
export default class NotFoundComponent extends FASTElement {}
