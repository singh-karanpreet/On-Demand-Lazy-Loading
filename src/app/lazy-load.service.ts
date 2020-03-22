import { Injectable, NgModuleFactoryLoader } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyModuleService {

  constructor(private loader: NgModuleFactoryLoader) { }

  loadModule(path: string): Promise<any> {
    return this.loader.load(path);
  }
}
