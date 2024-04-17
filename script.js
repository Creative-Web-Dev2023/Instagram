let posts = [
  {
    authorimg: "img/sherlight.jpg",
    authorname: 'sherlight',
    image: "img/calgary.jpg",
    description: "<small>Calgary Tripp, the Tv Tower</small>",
    like: 60,
    liked: false,
    comment: ["<small>sarah_clauson:Are you there now,Sherley??</small>"],
    myComments: [],
    date: '1 Day',
  },
  {
    authorimg: "img/bl_wisan.jpg",
    authorname: 'bl_wisan',
    image: "img/violinplayer.jpg",
    description: " <small>A man with a violin in Waschington DC.</small>",
    like: 60,
    liked: false,
    comment: ['<small>kay-ladwig : Thanks for sharing🥰</small>'],
    myComments: [],
    date: '23 Hours',
  },
  {
    authorimg: "img/design.jpg",
    authorname: 'design.ro',
    image: "img/livingroom.jpg",
    description: "<small>My new livingroom</small>",
    like: 30,
    liked: false,
    comment: ["<small>cathy markman:I love this!😍</small>"],
    myComments: [],
    date: '12 Hours',
  },
  {
    authorimg: "img/clausen_sarah.jpg",
    authorname: 'sarah_clauson',
    image: "img/grandson.jpg",
    description: '<small>We tried so hard to <br> make things better...</small>',
    like: 200,
    liked: false,
    comment: ["<small>shirley prosperion: I miss the simpler times....</small>"],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/matto_collors.jpg",
    authorname: 'matto_collors',
    image: "img/Natur.jpg",
    description: "<small>Spring is comming</small>",
    like: 30,
    liked: false,
    comment: ["<small>judith grebowsk: awesome</small>"],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/yumtam.jpg",
    authorname: 'yumtam',
    image: "img/ungarischesgericht.jpg",
    description: "<small>Rezept from my mom</small>",
    like: 30,
    liked: false,
    comment: ["<small>sharon gossellen: delicious!!</small>"],
    myComments: [],
    date: "10 Hours",
  },
]

function init(){
  loadArray();
  render();
}


function saveArray() {
  let postAsText = JSON.stringify(posts);
  localStorage.setItem('posts', postAsText);
}


function loadArray() {
  let postAsText = localStorage.getItem('posts');
  if (postAsText) {
    posts = JSON.parse(postAsText);
  }
}


function render() {
  let content = document.getElementById('content');
  content.innerHTML = '';

  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let heartIcon = post.liked ? './icons/heart_red.png' : './icons/heart.png';  //?= wenn ja, :=bedeutet else
    content.innerHTML+= generatePostsHTML(i, post, heartIcon);
    renderComment(i);
    saveArray();
}
}


function generatePostsHTML(i, post,heartIcon){
  return /* html */`
  <div class="post">
        <div class="profile">
          <img class="profileimage" src="${post["authorimg"]}"/>
          <p class="profileName">${post["authorname"]}</p>
          <p class="date">${post["date"]}</p>
        </div>
       <div>
       <img id="postImage" class="postImage"src="${post["image"]}">
       </div>
      <div class="postIcons">
      <div class="postIconsleft">
          <img class="icon" onclick="like(${i})"src="${heartIcon}">
          <img class="icon" src="./icons/news.png" alt="instagram">
          <img class="icon" src="./icons/restore.png"alt="store">
      </div>
       <div class="postIconsRight">
       </div>
      </div>
    <div class="likes">
         <b>Likes ${post["like"]} times</b>
    </div>
     <div id="postContainer">
    <div class="postComment">
       <p> <i><b>${post["authorname"]}</b></i> ${post["description"]}</p>
    <div id="comments">
       <p><i><b>${post["comment"]}</b></i></p>
    </div>
    <div id="commentsContent${i}"></div>
    <div class="commentsContent">
       <input type="text" class="inputComment" id="input${i}" placeholder="Comment..."><button onclick="addComment(${i})">Post</button>
     </div>
     <div class="separator"></div>
    </div>
  `
}


function renderComment(i){
    let commentsContent = document.getElementById(`commentsContent${i}`);
    commentsContent.innerHTML = ''; 

    for (let j = 0; j < posts[i]['myComments'].length; j++) {
        let comment = posts[i]['myComments'][j];
        commentsContent.innerHTML += `
        <div><b>gaby67:</b> ${comment}</div>`
    }
}


function addComment(i){ 
    let input = document.getElementById(`input${i}`).value;
    document.getElementById(`input${i}`).value = '';

    if (input === "") {
    } else {
        posts[i].myComments.push(input)
       renderComment(i);
        saveArray();
    }
  }


function like(i){
  if (posts[i].like) {
    posts[i].like --;
  } else{
    posts[i].like ++;
  }
  posts[i].liked = !posts[i].liked; 
  saveArray();
  render();
}

