import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // ✅ Import danh sách routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // ✅ Cấu hình router cho ứng dụng Standalone
  ],
};
