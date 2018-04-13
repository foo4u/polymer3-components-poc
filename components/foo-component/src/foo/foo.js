import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import styles from "./foo.css";

class Foo extends PolymerElement {
    static get is() { return "foo-component"; }

    static get template() {
        return html([`
            <style>${styles}</style>
            <section>
                <div>
                    <p>Foo says: [[message]]</p>
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

customElements.define(Foo.is, Foo);
