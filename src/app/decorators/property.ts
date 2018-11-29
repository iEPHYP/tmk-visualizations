import * as _ from "lodash";
export type SetFunction<T> = (self: T) => void;
export type GetFunction<T> = (self: T) => void;

export function Property<T>(
    set: SetFunction<T> | SetFunction<T>[] = () => {},
    get: GetFunction<T> | GetFunction<T>[] = () => {}
) {
    return (target: any, propertyKey: string) => {
        const descriptor: PropertyDescriptor = {
            configurable: true,
            enumerable: true
        };

        const setFunction = function(value) {
            this[`@${propertyKey}`] = value;
            if (_.isArray(set)) {
                set.forEach(setFunc => setFunc(this));
            } else {
                set(this);
            }
        };
        const getFunction = function() {
            if (_.isArray(get)) {
                get.forEach(getFunc => getFunc(this));
            } else {
                get(this);
            }
            return this[`@${propertyKey}`];
        };
        descriptor.set = setFunction;
        descriptor.get = getFunction;

        Object.defineProperty(target, propertyKey, descriptor);
    };
}
