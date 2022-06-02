import { NgModule } from '@angular/core';
import { BcIconModule } from 'bancolombia-design-system/bc-icon';
import { CommonModule } from '@angular/common';
import { BcFooterModule } from 'bancolombia-design-system/bc-footer';
import { BcHeaderModule } from 'bancolombia-design-system/bc-header';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BcIconModule.forRoot(),
    CommonModule,
    BcFooterModule,
    BcHeaderModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
