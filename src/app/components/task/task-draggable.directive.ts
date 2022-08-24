import { Directive } from '@angular/core';

export type DropEffect = "move";
export type EffectAllowed = DropEffect;
@Directive( {
  selector: "[dndDraggable]"
} )
export declare class TaskDndDraggableDirective {

    // the data attached to the drag
    dndDraggable: any;
    
    // the allowed drop effect
    dndEffectAllowed: EffectAllowed;
    
    // optionally set the type of dragged data to restrict dropping on compatible dropzones
    dndType?: string;
    
    // conditionally disable the draggability
    dndDisableIf: boolean;
    dndDisableDragIf: boolean;
    
}