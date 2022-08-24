import { Directive, EventEmitter } from '@angular/core';
export type DropEffect = "move";
export type EffectAllowed = DropEffect;
export interface DndDropEvent {

  // the original drag event
  event: DragEvent;
  
  // the actual drop effect
  dropEffect: DropEffect;
  
  // true if the drag did not origin from a [dndDraggable]
  isExternal:boolean;
  
  // the data set on the [dndDraggable] that started the drag 
  // for external drags use the event property which contains the original drop event as this will be undefined
  data?: any;
  
  // the index where the draggable was dropped in a dropzone
  // set only when using a placeholder
  index?: number;
  
  // if the dndType input on dndDraggable was set
  // it will be transported here
  type?: any;
}

@Directive( {
selector: "[dndDropzone]"
} )

export declare class LaneDirective {

  // optionally restrict the allowed types
  dndDropzone?: string[];
  
  // set the allowed drop effect
  dndEffectAllowed: EffectAllowed;
  
  // conditionally disable the dropzone
  dndDisableIf: boolean;
  dndDisableDropIf: boolean;
  
  // if draggables that are not [dndDraggable] are allowed to be dropped
  // set to true if dragged text, images or files should be handled
  dndAllowExternal: boolean;
  
  // if its a horizontal list this influences how the placeholder position
  // is calculated
  dndHorizontal: boolean;
      // set the class applied to the dropzone
    // when a draggable is dragged over it
    dndDragoverClass: string = "dndDragover";
    
    // set the class applied to the dropzone
    // when the dropzone is disabled by [dndDisableIf] 
    dndDropzoneDisabledClass = "dndDropzoneDisabled";
    
    // emits when a draggable is dragged over the dropzone
    readonly dndDragover: EventEmitter<DragEvent>;
    
    // emits on successful drop
    readonly dndDrop: EventEmitter<DndDropEvent>;
  
}