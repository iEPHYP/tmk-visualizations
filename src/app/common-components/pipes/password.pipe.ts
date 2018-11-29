import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "password"
})
export class PasswordPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        let password = "";
        if (value && typeof value === "string") {
            password = value
                .split("")
                .map(l => "*")
                .join("");
        }
        return password;
    }
}
