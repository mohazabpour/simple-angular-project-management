import { Observable, of } from "rxjs";
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { taskEffects } from "./task.effects";
import { taskState } from "../taskList.state";
import List from '../../assets/data.json';

const initialState = {
    taskList: [],
    task: {
      id:0,
      title:'',
      body:'',
      lane:0
    },
    loaded: false,
    error: null,
  };
const mockList = [
    {
        id: 1,
        title: 'Fix navigation bug',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing…dictum libero, vel tristique odio pulvinar vitae.',
        lane: 1
    }
  ];
  
  class MockTaskService {
    fetchUsers() {
      return of(mockList);
    }
  }

describe('AppEffects', () => {
    let actions$: Observable<any>;
    let effects: taskEffects;
    let store: MockStore<taskState>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
            taskEffects,
          provideMockActions(() => actions$),
          provideMockStore({ initialState }),
          {  useClass: MockTaskService },
        ],
      });
  
      effects = TestBed.inject(taskEffects);
      store = TestBed.inject(MockStore);
    });
  
    it('should be created', () => {
      expect(effects).toBeTruthy();
    });

// Testing Action dispatch
 describe('onloadList$', () => {
    it('should dispatch LoadList action', (done) => {
      actions$ = of({
        type: '[Task] Load List',
        }),
        effects.loadList$.subscribe((data) => {
            expect(data.data.length).toBe(7);
            done();
      });
    });
  });
});

 
