import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],

  // To import any module dependency, please add it to import list !
  imports: [
    /**
     *  Included by default in all Angular apps created with the CLI ng new.
     *  Re-exports CommonModule and ApplicationModule, making their exports
     * and providers available to all apps
     */
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
