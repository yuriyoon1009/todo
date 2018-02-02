import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TodoListRxComponent } from './todo-list-rx.component';
import { TodoStoreRxService } from '../todo-store-rx.service';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { StorageService } from '../../core/storage.service';


describe('app.todo.TodoListComponent', () => {
    let component: TodoListRxComponent;
    let fixture: ComponentFixture<TodoListRxComponent>;

    let todoDummies: any[];
    let storageService: StorageService;

    beforeEach(async(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    CommonModule,
                    FormsModule,
                    CoreModule
                ],
                declarations: [
                    TodoItemComponent,
                    TodoListRxComponent
                ],
                providers: [
                    TodoStoreRxService
                ]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListRxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(async(
        inject(
            [StorageService],
            (s: StorageService) => {
                storageService = s;
            }
        )
    ));

    beforeEach(() => {
        todoDummies = [
            { title: 'Todo1', completed: false },
            { title: 'Todo2', completed: false },
            { title: 'Todo3', completed: true },
            { title: 'Todo4', completed: false }
        ];

        // 테스트가 시작하기 전에, 할 일 정보를 미리 저장소에 저장해 둡니다.
        storageService.set('ANGULAR_EXERCISE_TODO_STORAGE', todoDummies);
    });

    afterEach(() => {
        storageService.remove('ANGULAR_EXERCISE_TODO_STORAGE');
    });

    it('컴퍼넌트가 생성되었을 때 할 일 목록에 저장소에 있는 할 일들을 표시한다. Should display todo list which fetched from storage', async(() => {
        component.ngOnInit();
        fixture.detectChanges();

        // 할 일 목록에 있는 TodoItemComponent를 선택합니다.
        // Query select 'TodoItemComponent' in todo list.
        const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));

        expect(todoItems.length).toEqual(todoDummies.length);
    }));

    it('할 일을 추가하면 할 일 목록에서 새로운 할 일이 생겨야 합니다. Should occurred new todo in todo list when add new todo.', async(() => {
        component.ngOnInit();
        fixture.detectChanges();

        const addTodoInput = fixture.debugElement.query(By.css('input#addTodo'));

        // Input에 새로운 할 일의 제목을 입력합니다.
        // Input title of new todo.
        addTodoInput.nativeElement.value = 'Some title';
        addTodoInput.triggerEventHandler('input', {
            target: addTodoInput.nativeElement
        });
        fixture.detectChanges();

        // Input에서 keyup.enter 이벤트를 발생시킵니다. (Enter 키를 눌렀을 때)
        // Trigger 'keyup.enter' event in input. (When user press ENTER)
        addTodoInput.triggerEventHandler('keyup.enter', {});
        fixture.detectChanges();

        // 할 일 목록에서 마지막 할 일은 방금 새로 생성한 할 일이어야 합니다.
        // Expect the last todo item be a new todo which we just add.
        const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        const lastTodo = todoItems[todoItems.length - 1];
        expect(lastTodo.query(By.css('.TodoItem__title')).nativeElement.textContent).toContain('Some title');
    }));

    it('할 일을 추가하면 할 일 목록에서 새로운 할 일이 생겨야 합니다. Should occurred new todo in todo list when add new todo.', async(() => {
        component.ngOnInit();
        fixture.detectChanges();

        const addTodoInput = fixture.debugElement.query(By.css('input#addTodo'));
        const addTodoButton = fixture.debugElement.query(By.css('button.TodoList__createNewTodoButton'));

        // Input에 새로운 할 일의 제목을 입력합니다.
        // Input title of new todo.
        addTodoInput.nativeElement.value = 'Some title';
        addTodoInput.triggerEventHandler('input', {
            target: addTodoInput.nativeElement
        });
        fixture.detectChanges();

        // 새로운 할 일 추가하기 버튼을 클릭합니다.
        // Click add new todo button.
        addTodoButton.triggerEventHandler('click', {});
        fixture.detectChanges();

        // 할 일 목록에서 마지막 할 일은 방금 새로 생성한 할 일이어야 합니다.
        // Expect the last todo item be a new todo which we just add.
        const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        const lastTodo = todoItems[todoItems.length - 1];
        expect(lastTodo.query(By.css('.TodoItem__title')).nativeElement.textContent).toContain('Some title');
    }));

    it('할 일을 삭제하면 할 일 목록에서 해당 할 일이 제거됩니다. Should removed when click remove todo button.', async(() => {
        component.ngOnInit();
        fixture.detectChanges();

        let todos = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        const target = todos[2];

        // 삭제 버튼을 누릅니다.
        // Click remove button.
        const removeButton = target.query(By.css('button.TodoItem__removeButton'));
        removeButton.triggerEventHandler('click', {
            target: removeButton.nativeElement
        });
        fixture.detectChanges();

        // 할 일 목록에서 삭제한 할 일이 없습니다.
        // Expect todo list not contains todo which we just removed.
        todos = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        expect(todos.length).toEqual(todoDummies.length - 1);
        expect(todos[2].query(By.css('.TodoItem__title')).nativeElement.textCotnent).not.toContain(todoDummies[2].title);
    }));

    it('완료됨 토클하면 할 일이 완료 상태로 표시된다. Should todo be completed when toggle completion checkbox.', async(() => {
        component.ngOnInit();
        fixture.detectChanges();

        let todos = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        const target = todos[1];

        const toggleCompletionCheckbox = target.query(By.css('input.TodoItem__checkbox'));

        // 체크박스를 토클합니다.
        // Toggle checkbox to checked.
        toggleCompletionCheckbox.nativeElement.checked = true;
        toggleCompletionCheckbox.triggerEventHandler('input', {
            target: toggleCompletionCheckbox.nativeElement
        });
        fixture.detectChanges();

        todos = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
        expect(todos[2].query(By.css('input.TodoItem__checkbox')).nativeElement.checked).toBe(true);
    }));
});
