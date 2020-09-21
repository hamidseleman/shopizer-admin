import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TypesRoutingModule } from './types-routing.module';
import { TypesListComponent } from './types-list/types-list.component';
import { TypesComponent } from './types.component';
import { TypeDetailsComponent } from './type-details/type-details.component';


@NgModule({
  declarations: [TypesComponent, TypesListComponent, TypeDetailsComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    SharedModule,
  ]
})
export class TypesModule { }
