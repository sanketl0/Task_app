import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {taskdata} from './datamodel';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  formvalue! :FormGroup 
  taskdataobj : taskdata = new taskdata
  alltaskdata :any
  showadd!: boolean
  showupdate!: boolean


  constructor(private api:ApiService,private formBuilder: FormBuilder,){}

  ngOnInit(){
    this.formvalue = this.formBuilder.group({
      Task_NO :["",Validators.required],
      Task :["",Validators.required],
      Day :["",Validators.required],
      Time :["",Validators.required],
      Date :["",Validators.required],
    })
    this.getdata()
  }

  add(){
    this.showadd = true
    this.showupdate = false

  }

  getdata(){
    this.api.getstaskdata().subscribe(res=>{
      // console.log(res)
      this.alltaskdata =res
    })
  }

  addtask(){
    this.taskdataobj.Task = this.formvalue.value.Task;
    this.taskdataobj.Day = this.formvalue.value.Day;
    this.taskdataobj.Time = this.formvalue.value.Time;
    this.taskdataobj.Date = this.formvalue.value.Date;

    this.api.posttask(this.taskdataobj).subscribe(res=>{
      this.formvalue.reset()
      this.getdata()
      alert("Task added successfully")
    })
  }

  updatetask(){
    this.taskdataobj.Task = this.formvalue.value.Task;
    this.taskdataobj.Day = this.formvalue.value.Day;
    this.taskdataobj.Time = this.formvalue.value.Time;
    this.taskdataobj.Date = this.formvalue.value.Date;

    this.api.updatetask(this.taskdataobj, this.taskdataobj.id).subscribe(res=>{
      this.formvalue.reset()
      alert("Task updated successfully")
      this.getdata()
    })

  }

  edit(data:any){
    this.showadd = false
    this.showupdate =true
    this.taskdataobj.id = data.id
    this.formvalue.controls['Task'].setValue(data.Task) 
    this.formvalue.controls['Day'].setValue(data.Day)  
    this.formvalue.controls['Time'].setValue(data.Time)  
    this.formvalue.controls['Date'].setValue(data.Date)  
  }

  deletet(data: any) {
    if (confirm("Are You sure to delete?"))
      this.api.deletetask(data.id).subscribe(res => {
        alert("Deleted successfully")
        this.getdata()
      })
  }

}
