import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComfirmDialogComponent } from './comfirm-dialog/comfirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ToolsComponent } from './tools/tools.component';
import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list' ;
import {MatMenuModule} from '@angular/material/menu';
import { FirebaseModule } from './Firebase.module';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { EventCreateComponent } from './event-create/event-create.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgChartsModule} from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ComfirmDialogComponent,
    LayoutComponent,
    DashbordComponent,
    ToolsComponent,
    EventsComponent,
    ArticleComponent,
    LoginComponent,
    EventCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,FlexLayoutModule,
    MatDialogModule,
    MatButtonModule, MatTooltipModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FirebaseModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgChartsModule,
    MatSelectModule,
    NgChartsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
