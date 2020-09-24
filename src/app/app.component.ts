import { Component } from '@angular/core';

interface Todos{
	name: string;
	completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';
  todos = [
  {
  	name: 'First step',
  	completed: true
  },
  {
  	name: 'Conquer world!',
  	completed: false
  }] as Todos[];

  names = [{
    name: "Test"
  },{
    name: "Test 2"
  },{
    name: "Test 3"
  }]
}
