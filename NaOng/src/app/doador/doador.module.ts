import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoadorPageRoutingModule } from './doador-routing.module';

import { DoadorPage } from './doador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoadorPageRoutingModule
  ],
  declarations: [DoadorPage]
})
export class DoadorPageModule {}
