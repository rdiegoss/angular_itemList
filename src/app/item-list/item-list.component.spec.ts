import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, ItemListComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new item to the list', () => {
    component.newItem.name = 'Test Item';
    component.addItem();
    expect(component.items.length).toBe(1);
    expect(component.items[0].name).toBe('Test Item');
  });

  it('should edit an item in the list', () => {
    const testItem = { id: 1, name: 'Test Item', isEditing: false };
    component.items.push(testItem);
    component.editItem(testItem);
    expect(testItem.isEditing).toBe(true);
  });

  it('should save an edited item in the list', () => {
    const testItem = { id: 1, name: 'Test Item', isEditing: true };
    component.items.push(testItem);
    component.saveItem(testItem);
    expect(testItem.isEditing).toBe(false);
  });

  it('should delete an item from the list', () => {
    const testItem = { id: 1, name: 'Test Item', isEditing: false };
    component.items.push(testItem);
    component.deleteItem(0);
    expect(component.items.length).toBe(0);
  });
});
