import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'; // ✅ Import component cần hiển thị mặc định
export const routes: Routes = [
    { path: '', component: HomeComponent }, // ✅ Trang mặc định khi mở localhost:4200
    { path: 'home', component: HomeComponent }, // ✅ Thêm route cụ thể nếu cần
  ];
  