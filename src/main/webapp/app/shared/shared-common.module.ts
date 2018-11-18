import { NgModule } from '@angular/core';

import { UdaymicrotestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [UdaymicrotestappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [UdaymicrotestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class UdaymicrotestappSharedCommonModule {}
