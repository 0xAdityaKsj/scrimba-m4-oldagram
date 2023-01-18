const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function render(posts) {
    let html = ''
    for (let i = 0; i < posts.length; i++) {
        html += `

            <section class="section-1">
                <div class="container-2">
                    <img src="${posts[i].avatar}" alt="vandp" class="img3">
                    <p> <span class="span1">${posts[i].name}</span><br><span class="span2">${posts[i].location}</span> </p>
                </div>
                <div>
                    <img src="${posts[i].post}" alt="vgpost" class="img4">
                </div>
            </section>
            <footer>
                <div class="footer-div1">
                    <img src="images/icon-heart.png" alt="icon-heart" class="img5">
                    <img src="images/icon-comment.png" alt="icon-comment" class="img6">
                    <img src="images/icon-dm.png" alt="icon-dm" class="img7">
                </div>
                <p class="like-count">${posts[i].likes} likes</p>
                <p class="comment"><span class="random-user">${posts[i].username}</span> ${posts[i].comment}</p>

            </footer>    
    `
    }
    document.getElementById('body-1').innerHTML += html;
}




