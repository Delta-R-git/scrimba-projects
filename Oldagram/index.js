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

const postEl = document.getElementById("post")
let postNum = -1

for (let i = 0; i < posts.length; i++ ) {
    postNum++
    postEl.innerHTML += `
                    <section class="container" >
                        <div class="creator">
                            <img src="${posts[postNum].avatar}" class="icon" alt="vangogh dp">
                            <div>
                                <h2 class="name">${posts[postNum].name}</h2>
                                <p class="location">${posts[postNum].location}</p>
                            </div>
                        </div>
                        <img src="${posts[postNum].post}" class="post">
                        <div class="action">
                            <img src="images/icon-heart.png">
                            <img src="images/icon-comment.png">
                            <img src="images/icon-dm.png">
                        </div>
                        <div class="reaction">        
                            <h3>${posts[postNum].likes} likes</h3>
                            <p><span>${posts[postNum].username}</span> ${posts[postNum].comment}</p>
                        </div>
                    </section>
    `
}

