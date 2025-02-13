import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // ✅ Đánh dấu là Standalone Component
  imports: [RouterModule], // ✅ Cần để `router-outlet` hoạt động
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
