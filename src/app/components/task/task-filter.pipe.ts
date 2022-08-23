import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'taskfilter',
    pure: false
})
export class TaskFilterPipe implements PipeTransform {
    transform(items: any[], lane: any): any {
        if (!items || !lane) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return  items.filter(item => item.lane === lane.id);;
    }
}