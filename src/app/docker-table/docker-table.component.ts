import { Component, OnInit ,Inject,Input} from '@angular/core';
import {DockerTableService} from './docker-table.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {DokerbookService} from './dokerbook.service';

// import {}from ''

// import {BookDetailsComponent}from '../book-details/book-details.component'
export interface dockerElement {
  id:string,
  name: string;
  author: any;
  publication: any;
  category: any;
  pages: any;
  price: any;
}

@Component({
  selector: 'app-docker-table',
  templateUrl: './docker-table.component.html',
  styleUrls: ['./docker-table.component.css']
})
export class DockerTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'author', 'publication','category','pages','price'];
  dataSource=[];
  controls: FormArray;
  public selected;
  message:string;
  docker:dockerElement;
  show=false;
  isLoading= false;
  hellodocker:any[]=[];
  searchKey:string;
  EditRowId:any='';
  editField:any;
  list$: BehaviorSubject<dockerElement[]> = new BehaviorSubject(this.hellodocker)
  constructor(private http:DockerTableService,public dialog: MatDialog, public router:Router,public dockerservice:DokerbookService) { }

  ngOnInit(): void {
    this.http.currentmessages.subscribe(message =>{
      this.message = message;
    })
      this.http.getdata('http://localhost:8080/bookservice/books',{status:"Active"}).subscribe((data:[])=>{
      this.hellodocker= data;
      this.dataSource = data;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.hellodocker[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  deletedocker(dockerId:any){
  this.http.deletedocker(dockerId).subscribe((data:[]) => {
    console.log(data)
  console.log('Deleted Successfully');
}
  )}
  showBookDetailForm(){
    this.show=true;
  }

  onEdit(id){
    this.dockerservice.popularform(id);

    const dialogRef = this.dialog.open(BookDetailsComponent, {

      width: '450px'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }


}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',

})
export class BookDetailsComponent implements OnInit {

  isLooding = false;
  public mode ='create';
  postId;
  post : dockerElement;
  message:string;
  profileForm;

  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,private http:DockerTableService,public dockerbookservice:DokerbookService,
    @Inject(MAT_DIALOG_DATA) public data: any,public ActivateRout:ActivatedRoute,private fb:FormBuilder) {}

  ngOnInit(): void {

    this.http.currentmessages.subscribe(message =>{
      this.message = message;
    })

  }

  popularForm(id:string){
    this.profileForm.setValue(id);
  }

  onSubmit(){

    this.dialogRef.close();
    if(!this.dockerbookservice.form.get('id').value){
    this.http.postData('http://localhost:8080/bookservice/books/',this.dockerbookservice.form.value).subscribe(res=>{
         console.log('data successfully add')
    })

  }  else {
    var data=this.dockerbookservice.form.value;
     this.postId=data.id;
    this.http.putData('http://localhost:8080/bookservice/books/'+this.postId, this.dockerbookservice.form.value).subscribe(result =>{
      console.log('data update success');
      this.dockerbookservice.form.reset();
    })
  }
  }

}

