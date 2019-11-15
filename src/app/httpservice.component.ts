import {Http} from '@angular/http';
import {Component} from '@angular/core';
@Component({
selector:'ht',
template:`

<input (keyup.enter)="createPost(title)" #title
type="text"
class="form-control">

<ul class="list-group">
<li *ngFor="let post of posts" class="list-group-item">
{{ post.id }}

<button
(click)="updatePost(post)"
class="btn btn-info btn-sm">Update</button>

<button
(click)="deletePost(post)"
class="btn btn-danger btn-sm">Delete </button>
{{ post.title }}

</li>
</ul>
`

})

export class HTTPServiceComponent{
posts:any[];
constructor(private http: Http){
  http.get('http://jsonplaceholder.typicode.com/posts')
  .subscribe(response => {
    console.log(response.json());
    this.posts = response.json();
  })

}

createPost(title: HTMLInputElement){
  let post ={title:title.value};
  title.value='';
  this.http.post('http://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
  .subscribe(response =>{
    post['id']=response.json().id;
    this.posts.splice(0,0,post)
  });
}


updatePost(post){
  this.http.patch('http://jsonplaceholder.typicode.com/posts' + '/' +post.id,JSON.stringify({isUpdate:true}))
  .subscribe(response=>{
    console.log(response.json());
  });
}



deletePost(post){
  this.http.delete('http://jsonplaceholder.typicode.com/posts' + '/' +post.id)
  .subscribe(response=>{
    let location =this.posts.indexOf(post);
    this.posts.splice(location,1);
  });
}

}
