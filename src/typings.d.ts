/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

interface FontFaceSet {
    ready: Promise<any>;
    onloadingdone: Function;
    check: (fontSpec: string) => boolean;
    [key: string]:  any;
}

interface Document {
    fonts: FontFaceSet
}