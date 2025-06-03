import { LitElement } from 'lit';

type Constructor = new (...args: any[]) => LitElement;

interface BeforeRenderMixin {}

type ReturnConstructor = new (...args: any[]) => LitElement & BeforeRenderMixin;

export default function<B extends Constructor>(Base: B): B & ReturnConstructor {
  class Mixin extends Base implements BeforeRenderMixin {
    static get listeners() {
      return { click: function(e) {} };
    }

    connectedCallback() {
      super.connectedCallback();
      const l = this.constructor().listeners;
      for (const e in l) {
        this.addEventListener(e, l[e].bind(this));
      }
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      const l = this.constructor().listeners;
      for (const e in l) {
        this.removeEventListener(e, l[e]);
      }
    }
  }

  return Mixin;
}
