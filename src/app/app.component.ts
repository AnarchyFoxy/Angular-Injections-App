import { Component } from '@angular/core';
import { InjectionList } from './injectionList';
import { InjectionItem } from './injectionItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'injections';
  private list = new InjectionList("Astryda",
  [
    new InjectionItem("Pierwszy zastrzyk - 14 marca", true),
    new InjectionItem("Drugi zastrzyk - 20 marca"),
    new InjectionItem("Trzeci zastzyk - 24 marca"),
  ]);

  get username(): string
  {
    return this.list.user;
  }

  get itemCount(): number
  {
    return this.items.length;
  }

  get items(): readonly InjectionItem[]
  {
    return this.list.items.filter(item => this.showComplete || !item.complete)
  }

  addItem(newItem: string)
  {
    if (newItem != "")
    {
      this.list.addItem(newItem)
    }
  }

  showComplete: boolean = false;
}
