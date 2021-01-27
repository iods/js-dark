import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Header.scss";

const template = html`
  <a href="/">Home</a>
`;

@customElement({
  name: "ds-header",
  template,
  styles,
})
export default class HeaderComponent extends FASTElement {}
