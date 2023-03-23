import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[hover]"
})
export class HoverLink{

    @HostListener('mouseenter') mouseEnter(){
        console.log("directive again called");
        this.elementRef.nativeElement.style.color='black';
    }

    @HostListener('mouseleave') mouseLeave(){
        console.log("directive again called");
        this.elementRef.nativeElement.style.color='white';
    }
    
    // @HostListener('click') mouseclick(){
    //     console.log("directive again called");
    //     this.elementRef.nativeElement.style.color='grey';
    // }

    constructor(private elementRef:ElementRef){
        console.log("directive called");
        // this.elementRef.nativeElement.style.color='red';
    }


}