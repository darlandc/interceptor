import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'interceptor';

  constructor(private data: DataService){
  }

  ngOnInit(): void {
this.getData();
  }

  getData(): any {
    this.data.getPosts().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
