import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import styles from "./bar.css";

class Bar extends PolymerElement {
    static get is() { return "bar-component"; }

    static get template() {
        return html([`
            <style>${styles}</style>
            <section>
                <div>
                    <p>Bar says: [[message]]</p>
                </div>
            </section>
    `]);
    }
    static get properties() {
        return {
            message: String
        };
    }
}

customElements.define(Bar.is, Bar);
