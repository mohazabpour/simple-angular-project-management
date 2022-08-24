import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[taskDelete]'

})

export class TaskDeleteDirective{
    @HostBinding('class.is-task') isTask = true;
    @HostBinding('class.is-task-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }

}