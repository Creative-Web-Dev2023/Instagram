let posts = [
  {
    authorimg: "img/sherlight.jpg",
    authorname: 'sherlight',
    image: "img/calgary.jpg",
    description: "Calgary Tripp, the Tv Tower",
    like: 60,
    liked: false,
    comment: ["sarah_clauson:Are you there now,Sherley??"],
    myComments: [],
    date: '1 Day',
  },
  {
    authorimg: "img/bl_wisan.jpg",
    authorname: 'bl_wisan',
    image: "img/violinplayer.jpg",
    description: " A man with a violin in Waschington DC.",
    like: 60,
    liked: false,
    comment: ['kay-ladwig : Thanks for sharing🥰'],
    myComments: [],
    date: '23 Hours',
  },
  {
    authorimg: "img/design.jpg",
    authorname: 'design.ro',
    image: "img/livingroom.jpg",
    description: "My new livingroom",
    like: 30,
    liked: false,
    comment: ["cathy markman:I love this!😍"],
    myComments: [],
    date: '12 Hours',
  },
  {
    authorimg: "img/clausen_sarah.jpg",
    authorname: 'sarah_clauson',
    image: "img/grandson.jpg",
    description: 'We tried so hard \n to make things better \n for our kids that we made them worse.',
    like: 200,
    liked: false,
    comment: ["shirley prosperion: I miss the simpler times...."],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/matto_collors.jpg",
    authorname: 'matto_collors',
    image: "img/Natur.jpg",
    description: "Spring is comming",
    like: 30,
    liked: false,
    comment: ["judith grebowsk: awesome"],
    myComments: [],
    date: "10 Hours",
  },
  {
    authorimg: "img/yumtam.jpg",
    authorname: 'yumtam',
    image: "img/ungarischesgericht.jpg",
    description: "Recept from my mom",
    like: 30,
    liked: false,
    comment: ["sharon gossellen: delicious!!"],
    myComments: [],
    date: "10 Hours",
  },
]

loadArray();


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
    content.innerHTML+= generatePostsHTML(i, post);
    renderComment(i);
    saveArray();
}
}

function generatePostsHTML(i, post){
  return /* html */`
  <div class="post">
        <div class="profile">
          <img class="profileimage" src="${post["authorimg"]}"/>
          <p class="profileName">${post["authorname"]}</p>
          <p class="date">${post["date"]}</p>
        </div>
       <div>
       <img class="postImage"src="${post["image"]}">
       </div>
      <div class="postIcons">
      <div class="postIconsleft">
          <img class="icon" onclick="like(${i})"src="${addRedHeart(i)}">
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

    for (let j = 0; j < posts[i]['myComments'].length; j++) {
        let comment = posts[i]['myComments'][j];
        commentsContent.innerHTML += `
        <div><b>gaby67:</b> ${comment}</div>`
    }
}


function addComment(i){ 
    let input = document.getElementById(`input${i}`).value;
    if (input === "") {
    } else {
        posts[i].myComments.push(input)
        render();
        saveArray();
    }
  }


function like(i){
 posts[i]["liked"] = !posts[i]["liked"];  // liked-heart umkehren

  if (posts[i]["liked"]) {
     posts[i]["like"]++; //erhöhe die Anzahl der likes um 1
   } else {
    console.log("like")
     posts[i]["like"]--; //sonst reduziere sie um 1
     
     
  }
  render(); // neu rendern, um die Änderungen anzuzeigen
}

function addRedHeart(i) {
  if (posts[i] && posts[i]["liked"]) { //&& =und gibt true wenn die Bedingung wahr ist, sonst false
    console.log("post ist liked, return red heart")
    return "./icons/heart_red.png"; 
  } else {
    console.log("Post is not liked, return heart image")
    return "./icons/heart.png"; 
  }
}
