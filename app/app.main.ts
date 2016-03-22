import {bootstrap}  from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {AppComponent} from './app.component';
import {AlbumService} from './services.album';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent,[
  provide(AlbumService, {useClass: AlbumService}),
  HTTP_PROVIDERS,
]);