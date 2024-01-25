import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Item {
  id: number;
  name: string;
  isEditing: boolean;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class ItemListComponent implements OnInit {
  newItem: Item = { id: Math.random(), name: '', isEditing: false };

  items: Item[] = [];

  constructor() { }

  ngOnInit() { }
  

  addItem() {
    if (this.newItem.name.length > 0) {
      const newItem = { id: this.newItem.id, name: this.newItem.name, isEditing: false };
      this.items.push(newItem);
      this.newItem.name = '';
    }
  }

  editItem(item: Item) {
    if (!item.isEditing) {
      item.isEditing = true;
    }
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
