import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class LoaderMetadata {

    public loadingCount = 0;
    private loadingSubject = new BehaviorSubject(true);
    public loadingState = this.loadingSubject.asObservable();

    constructor(public name: string) { }

    setLoading() {
        this.loadingCount++;
        this.loadingSubject.next(true);
    }

    public loaded() {
        this.loadingCount--;
        if (this.loadingCount <= 0) {
            this.loadingSubject.next(false);
            this.loadingCount = 0;
        }
    }

    public stop() {
        this.loadingSubject.next(false);
        this.loadingCount = 0;
    }

}
