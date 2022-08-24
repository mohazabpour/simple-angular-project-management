import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[taskGrab]'

})

export class TaskGrabDirective{
    @HostBinding('class.grab') isHandle = true;
    @HostBinding('class.grabbing') grabbing = false;
    @HostListener('mousedown') onMouseDown(){
        this.grabbing = true;
    }
    @HostListener('mouseup') onMouseup(){
        this.grabbing = false;
    }

}