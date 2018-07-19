import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  data = [];

  show: Boolean;

  constructor() {}

  ngOnInit() {
    this.show = true;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {

        this.data = res.data;
        this.show = false;
      })
      .catch(err => console.log(err));
  }
}
