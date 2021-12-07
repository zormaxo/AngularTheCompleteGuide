import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log('server-element constructor called');
  }

  ngOnChanges(changes) {
    console.log('server-element ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('server-element ngOnInit called');
  }

  ngDoCheck() {
    console.log('server-element ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('server-element ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('server-element ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('server-element ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('server-element ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('server-element ngOnDestroy called');
  }
}
