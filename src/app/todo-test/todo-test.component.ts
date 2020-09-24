import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

import * as Todos from '../app.component';

interface Names {
  name: string;
}

@Component({
  selector: 'app-todo-test',
  templateUrl: './todo-test.component.html',
  styleUrls: ['./todo-test.component.scss']
})

export class TodoTestComponent {
  ns = [{
    name: "Test"
  },
  {
    name: "Test 2"
  },
  {
    name: "Test 3"
  }] as Names[];

  @Input()
  todos: [];

}
