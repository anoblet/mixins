import { LitElement } from 'lit';
declare type Constructor = new (...args: any[]) => LitElement;
export interface BeforeRenderMixin {
}
declare type ReturnConstructor = new (...args: any[]) => LitElement & BeforeRenderMixin;
export default function <B extends Constructor>(Base: B): B & ReturnConstructor;
export {};
