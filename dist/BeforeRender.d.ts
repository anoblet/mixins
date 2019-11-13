import { LitElement } from "lit-element";
declare type Constructor = new (...args: any[]) => LitElement;
interface BeforeRenderMixin {
}
declare type ReturnConstructor = new (...args: any[]) => LitElement & BeforeRenderMixin;
export default function <B extends Constructor>(Base: B): B & ReturnConstructor;
export {};
