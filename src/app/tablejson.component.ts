import {Http} from '@angular/http';
import {Component} from '@angular/core';
@Component({
selector:'htable',
template:`



<table border="1">

<tr>
<th>Post Id </th>
<th>Post title </th>
<th>Post Body</th>
</tr>

<tr *ngFor ="let post of posts">
<td cellpadding="3">{{ post.id }} </td>
<td>{{ post.title}} </td>
<td>{{ post.body}} </td>
</tr>

</table>

`

})

export class HTTPTableServiceComponent{
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


}
