let posts = [
  {
    authorimg: "img/sherlight.jpg",
    authorname: "sherlight",
    image: "img/calgary.jpg",
    description: "Calgary Tripp, the Tv Tower",
    like: 60,
    likes: 0,
    comment: ["<b>sarah_clauson: </b> Are you there now,Sherley??"],
    myComments: [],
    date: "1 Day",
  },
  {
    authorimg: "img/bl_wisan.jpg",
    authorname: "bl_wisan",
    image: "img/violinplayer.jpg",
    description:
      " In Washington DC, at a Metro Station, on a cold January morning in 2007,<br>a man with a violin played six Bach pieces for about 45 minutes.",
    like: 60,
    likes: 0,
    comment: ['<b>kay-ladwig </b> ./img/menwithheart.jpg"'],
    myComments: [],
    date: "23 Hours",
  },
  {
    authorimg: "img/designer.ro.jpg",
    authorname: "designer.ro",
    image: "img/livingroom.jpg",
    description: "",
    like: 30,
    likes: 0,
    comment: ["<b>cathy markman </b> I love this."],
    myComments: [],
    date: "12 Hours",
  },
  {
    authorimg: "img/clausen_sarah.jpg",
    authorname: "clausen_sarah",
    image: "img/grandson.jpg",
    description:
      "Paul harveys letter to his grandchildren</i><br> We tried so hard to make things better for our kids that we made them worse.<br> For my grandchildren,<br> Id like better.",
    like: 200,
    likes: 0,
    comment: ["<b>shirley prosperion </b> I miss the simpler times...."],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/matto_collors.jpg",
    authorname: "matto_collors",
    image: "img/Natur.jpg",
    description: "",
    like: 30,
    likes: 0,
    comment: ["<b>judith grebowski</b>awesome"],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/matto_collors.jpg",
    authorname: "matto_collors",
    image: "img/Natur.jpg",
    description: "",
    like: 30,
    likes: 0,
    comment: ["<b>judith grebowski</b>awesome "],
    myComments: [],
    date: "10 Hours",
  },
];

loadArray();

function saveArray() {
  let postAsText = JSON.stringify(posts);
  localStorage.setItem("posts", postAsText);
}

function loadArray() {
  let postAsText = localStorage.getItem(posts);
  if (postAsText) {
    posts = JSON.parse(postAsText);
  }
}
function render() {
  let content = document.getElementById("content");
  content.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    document.getElementById("newPosts").innerHTML += `
       
        <div class="post">
        <div class="profile">
          <img class="profileimage" src="${post["authorimg"]}"/>
          <p class="profileName">"${post["authorname"]}"</p>
          <p class="date">"${post["date"]}"</p>
        </div>
       <div>
       <img class="postImage"src="${post["image"]}">
      </div>
      <div class="postIcons">
      <div class="postIconsleft">
        <img class="icon" onclick="like(${i})"src="${addRedHeart(i)}>
        <img class="icon" src="./icons/chat.png" alt="chat">
        <img class="icon" src="./icons/news.png" alt="instagram">
        <img class="icon" src="./icons/restore.png" alt="store">
      </div>
      <div class="postIconsRight">
     </div>
     </div>
    <div class="likes">
       <b>Likes ${post["like"]}times</b>
    </div>
    <div id="postContainer">
    <div class="postComment">
    <p> <i><b>${post["authorname"]}</b></i> ${post["description"]}</p>
    <div id="comments">
      <p><i><b>${post["comment"]}</b></i></p>
    </div>
    <div id="commentsContent${i}"></div>
    <div class="commentsContent">
      <input  type="text" class="inputComment" id="input${i}" placeholder="Comment..."><button onclick="addComment(${i})">Post</button>
    </div>
    <div class="separator"></div>
    </div>
        `;
  }
}

function renderComment(i){
    let commentsContent =document.getElementById('commentsConten${i}');

    for (let j = 0; j < posts['myComments'].length; j++) {
        let comment = posts[i]['myComments'][j];
        commentsContent.innerHTML += `
        <div><b>gaby67:</b> ${comment}</div>`
    }
}

function addComment(i) { 
    let input = document.getElementById(`input${i}`).value;
        render();
        saveArray();
    }
function like(i){

}
