import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule
    ],
    declarations: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        NgbModule,
        TranslateModule
    ]
})

export class SharedModule {
}
