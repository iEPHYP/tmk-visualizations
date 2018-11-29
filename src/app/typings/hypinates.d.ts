declare interface JQuery<TElement extends Node = HTMLElement> {
    hyphenates: () => void;
    hyphenate : (culture: string) => JQuery;
}