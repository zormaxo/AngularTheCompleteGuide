import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
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
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test' }];

  constructor() {
    console.log('app-component constructor called');
  }

  ngOnChanges(changes) {
    console.log('app-component ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('app-component ngOnInit called');
  }

  ngDoCheck() {
    console.log('app-component ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('app-component ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('app-component ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('app-component ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('app-component ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('app-component ngOnDestroy called');
  }

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
