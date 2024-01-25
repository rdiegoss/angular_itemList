import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      imports: [FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item', () => {
    const initialItemsLength = component.items.length;
    component.addItem();
    expect(component.items.length).toBe(initialItemsLength + 1);
  });

  it('should edit an item', () => {
    const item = { id: 1, name: 'Item 1', isEditing: false };
    component.items.push(item);

    component.editItem(item);
    expect(item.isEditing).toBe(true);

    component.editItem(item);
    expect(item.isEditing).toBe(false);
  });

  it('should toggle edit mode', () => {
    const item = { id: 1, name: 'Item 1', isEditing: false };
    component.editItem(item);
    expect(item.isEditing).toBe(true);
  });

  it('should delete an item', () => {
    const item = { id: 1, name: 'Item 1', isEditing: false };
    component.items.push(item);
    
    const initialItemsLength = component.items.length;
    component.deleteItem(0);
    expect(component.items.length).toBe(initialItemsLength - 1);
  });
});
