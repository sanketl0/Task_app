import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent {
  id :any
  data: any;

  constructor(private router: ActivatedRoute, private api:ApiService){}

  ngOnInit(){
    this.id = this.router.snapshot.params['id'];
    this.getone()

  }

  getone(){
    this.api.getone(this.id).subscribe(data =>{
      this.data = data;
      
    })

  }

  

}
