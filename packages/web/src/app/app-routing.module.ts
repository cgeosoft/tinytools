import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'clock', loadChildren: () => import('./clock/clock.module').then(m => m.ClockModule) },
  { path: 'metadata', loadChildren: () => import('./metadata/metadata.module').then(m => m.MetadataModule) },
  { path: 'pcinfo', loadChildren: () => import('./pcinfo/pcinfo.module').then(m => m.PcinfoModule) },
  { path: 'sketch', loadChildren: () => import('./sketch/sketch.module').then(m => m.SketchModule) },
  { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
  { path: 'qrcode', loadChildren: () => import('./qrcode/qrcode.module').then(m => m.QrcodeModule) },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
