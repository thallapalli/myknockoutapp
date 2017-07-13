function myPostsViewModel() {
    $.getJSON("http://localhost:3000/posts/", function (data) {
        this.posts = data;
    }
    );
}


