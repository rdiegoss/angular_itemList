Exercício Teórico:

1. O que são diretivas no Angular e como elas diferem de componentes?
- Diretivas são instruções que podem ser aplicadas a elementos HTML para modificar seu comportamento ou aparência. Elas podem ser divididas em duas categorias: diretivas estruturais e diretivas de atributos.
- Diretivas estruturais modificam a estrutura do DOM. Por exemplo, a diretiva *ngFor é usada para iterar sobre um array de dados e renderizar um elemento para cada item.
- Diretivas de atributos modificam os atributos de um elemento HTML. Por exemplo, a diretiva ngModel é usada para vincular uma propriedade de um componente a um elemento de entrada.

 - Já os Componentes são blocos de construção básicos de aplicações Angular. Eles são responsáveis por renderizar a interface do usuário e lidar com os eventos do usuário. Componentes são diferentes de diretivas porque eles têm seu próprio ciclo de vida e podem conter outras diretivas.
Exemplo:
- No código fornecido, a diretiva *ngFor é usada para iterar sobre o array de itens items e renderizar um elemento li para cada item. A diretiva ngIf é usada para condicionalmente renderizar o elemento h3 se o item isEditing for falso.

2. Explique o conceito de two-way data binding no Angular.
- Two-way data binding é uma técnica que permite que os dados de um componente sejam sincronizados com os dados de um elemento HTML. Isso é feito usando as diretivas ngModel e ngModelChange.
- A diretiva ngModel é usada para vincular uma propriedade de um componente a um elemento de entrada. A diretiva ngModelChange é usada para atualizar a propriedade do componente quando o valor do elemento de entrada é alterado.
- Exemplo:
No código fornecido, a diretiva ngModel é usada para vincular a propriedade newItem.name do componente ItemListComponent ao elemento de entrada input.

3. Como funciona o lazy loading em Angular e qual é sua vantagem?
- Lazy loading é uma técnica que permite carregar componentes e módulos apenas quando eles são necessários. Isso pode melhorar o desempenho das aplicações Angular, pois reduz a quantidade de código que precisa ser carregado inicialmente.

- O lazy loading funciona carregando os componentes e módulos que são referenciados no código da aplicação. Se um componente ou módulo não for referenciado, ele não será carregado.
-Vantagem:
- O lazy loading pode melhorar o desempenho das aplicações Angular, pois reduz a quantidade de código que precisa ser carregado inicialmente. Isso é especialmente útil para aplicações grandes ou complexas.
-Exemplo:
-No código fornecido, o componente ItemListComponent é referenciado no arquivo app.route.ts como uma rota padrão de inicialização. Isso significa que o componente ItemListComponent será carregado quando a aplicação for iniciada.
- Se o componente ItemListComponent não fosse referenciado, ele não seria carregado.

4. Descreva o ciclo de vida de um componente Angular.
- O ciclo de vida de um componente Angular é uma série de eventos que ocorrem durante a vida útil de um componente. Esses eventos podem ser usados para executar código em momentos específicos, como quando o componente é criado ou destruído.
- Os eventos do ciclo de vida de um componente são:
-ngOnInit(): Este evento é chamado quando o componente é criado e inicializado.
-ngOnChanges(): Este evento é chamado quando as propriedades de um componente são alteradas.
-ngDoCheck(): Este evento é chamado a cada ciclo de renderização do componente.
-ngAfterContentInit(): Este evento é chamado após o conteúdo do componente ser inicializado.
-ngAfterContentChecked(): Este evento é chamado após o conteúdo do componente ser verificado.
-ngAfterViewInit(): Este evento é chamado após a visão do componente ser inicializada.
-ngAfterViewChecked(): Este evento é chamado após a visão do componente ser verificada.
-ngOnDestroy(): Este evento é chamado quando o componente é destruído.
Exemplo:
-No código fornecido, o evento ngOnInit() é usado para inicializar a propriedade items do componente ItemListComponent.

5. Qual é a diferença entre Observables e Promises no Angular?
- Observables e Promises são ambos tipos de objetos que representam uma sequência de valores. No entanto, eles têm algumas diferenças importantes.

VIDEO DEMO:
[Vídeo do projeto](https://vimeo.com/906411980?share=copy)

Tests:
<img width="889" alt="Screenshot 2024-01-25 at 12 43 57" src="https://github.com/rdiegoss/angular_itemList/assets/10976074/a04ae1a5-8cd3-4c7a-9f92-6f7fd1be5dc5">

# ItemList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
