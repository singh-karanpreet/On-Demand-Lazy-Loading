import { Component, Injector, NgModuleFactory, ViewContainerRef } from '@angular/core';
import { LazyModuleService } from './lazy-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private vcRef: ViewContainerRef,
    private injector: Injector,
    private lazyModuleService: LazyModuleService
  ) {
    this.lazyModuleService.loadModule('src/app/dialogs/dialogs.module#DialogsModule')
      .then((modFactory: NgModuleFactory<any>) => {
        const moduleRef = modFactory.create(this.injector);
        const entryComponent = (<any>modFactory.moduleType).errorDialogComponentRef;
        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
        this.vcRef.createComponent(compFactory);
      });
  }

}
