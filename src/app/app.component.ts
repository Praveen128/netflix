import { Component } from '@angular/core';
import {AppService} from'./app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public myList:any[]=[];
	public recommendationsList:any[]=[];
	public showItem:boolean = false;
	public showItemRec:boolean = false;
	public showIndex;
  constructor(private appService:AppService){
	  
  }
  ngOnInit(){
	  this.appService.getMockData().subscribe(
	  data =>{
		 this.myList = data.mylist;
		 this.recommendationsList = data.recommendations
	  },err =>{
		  console.log(err);
	  });
  }
	onMouseOver(index,type){
		if(type=='myList'){
			this.showItem = true;
		}else{
			this.showItemRec = true;
		}
		this.showIndex = index;
	}
	onMouseLeave(type){
			if(type=='myList'){
			this.showItem = false;
		}else{
			this.showItemRec = false;
		}
	}
	removeFromMyList(item,index){
		 this.myList.splice(index,1)
	}
	addToMyList(item){
		let matchTitle = false;
		for(let listItem of this.myList){
			if(listItem.title==item.title){
				matchTitle = true;
			}
		}
		if(!matchTitle){
			this.myList.push(item);
		}
	}
}
