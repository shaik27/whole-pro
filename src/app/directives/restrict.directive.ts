import {Directive,Input,HostListener,ElementRef} from '@angular/core';
@Directive({
    selector:'[restrictuserinput]'
})
export class RestrictUserInput{
    @Input()
    regexPattern:any;
    constructor(private el:ElementRef){

    }
    @HostListener('keypress',['$event'])
    handleKeypress(evt){
        console.log(this.regexPattern);
        console.log(evt);
        let myRegex = new RegExp(this.regexPattern);
        if(myRegex.test(evt.key)){

        }
        else{
            evt.preventDefault();
        }
    }
}