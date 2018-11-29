import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class FontWatcherService {

    private loadedFontFamiliesSubjects: { [key: string]: BehaviorSubject<boolean> } = {};

    constructor() {
        const fontFamilies = [];
        if (document.fonts) {
            document.fonts.forEach(element => {
                fontFamilies.push(element);
            });
        }
        this.fontsLoaded({
            fontfamilies: fontFamilies
        });
    }

    public startWatcher() {
        if (document.fonts && document.fonts.onloadingdone) {
            document.fonts.onloadingdone = this.fontsLoaded.bind(this);
        }

    }

    public waitForFontFamily(fontFamily: string) {
        if (document.fonts) {
            if (this.loadedFontFamiliesSubjects[fontFamily]) {
                return this.loadedFontFamiliesSubjects[fontFamily].asObservable();
            } else {
                const subject = new BehaviorSubject<boolean>(false);
                this.loadedFontFamiliesSubjects[fontFamily] = subject;
                document.fonts.ready.then((ff: FontFaceSet) => {
                    const fontFamilies = [];
                    ff.forEach(element => {
                        fontFamilies.push(element);
                    });
                    this.fontsLoaded({
                        fontfamilies: fontFamilies
                    });
                });
                return subject.asObservable();
            }
        } else {
            const subject = new BehaviorSubject(true);
            return subject.asObservable();
        }
    }

    private fontsLoaded(event) {
        const fontFamilies = (event.fontfamilies as Array<any>).map(f => f.fontFamily || f.family);
        fontFamilies.forEach(f => {
            if (!this.loadedFontFamiliesSubjects[f]) {
                this.loadedFontFamiliesSubjects[f] = new BehaviorSubject(true);
            } else {
                this.loadedFontFamiliesSubjects[f].next(true);
            }
        });
    }


}
