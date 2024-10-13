import { output } from "@angular/core";

export type DisplayInfo = {
    command: string;
    output: string | any[] | any;
    isLink? : boolean;
}