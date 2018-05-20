import { Component,ViewChild, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ModalComponent } from '../bootstrap/modal/modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  posts: Array<any> = [];
  postToDelete 		= null;
  @ViewChild(ModalComponent)
  modal: ModalComponent;

  constructor(private postService:PostService) { }

  ngOnInit() {
  	this.postService.query()
  	.subscribe(data => this.posts = data)
  }

/*	destroy(id, index) {

		if (confirm("tem certeza ?")) {
			this.postService.destroy(+id).subscribe(() => {
				this.posts.slice(index, 1)
			})
		}
	}
*/
  openModal(post) {
  	this.postToDelete = post;
  	this.modal.open()
  }

}
