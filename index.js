
function generateBioString() {
  return `
  <section class="biography">
  <section class="bioPhoto">
    <img src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/13776013_1227858987232717_2650536020539220260_n.jpg?_nc_cat=104&_nc_sid=13bebb&_nc_ohc=hj11PBmLMW4AX9GxySn&_nc_ht=scontent-den4-1.xx&oh=16350b4a15fe40b55ce6f51f35b5621c&oe=5EABB584" 
    alt="A photo of myself and my friend rock climbing" />
  </section> 
  <section class="bioContent">
    <h3>WHERE I'VE BEEN</h3>
    <img src="https://odis.homeaway.com/odis/listing/96ae1452-6b70-4e94-9167-993fbadd2af8.f10.jpg" alt="View of Maui from Makawao" />
    <p>

      I am originally from Makawao, HI. I grew up surfing the beaches and
      exploring the jungles of the island of Maui. In my high school years
      my family was relocated to Albuqeruque, NM where I found a passion for
      CAD and engineering systems. For the next ten years I studied and
      worked in high-tech manufacturing, opening more opportunities for
      myself and moving again to Colorado, eventually settling in downtown
      Louisville. Here I enjoy every mountain sport there is and living life
      with my friends and family that I've found here.
      
    </p>
   
  </section>

  
  <section class="bioContent">
    <h3>WHAT I'M DOING</h3>
    <img src="https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="generic screen of VScode" />
    <p>
      I'm a software engineer, machinist and maker. Fueled by my beliefs
      that aesthetics and user experience are an essential integration to
      everything we make or use, I bring a unique approach to design in
      everything I do. Currently a student at Thinkful, I'm learning the
      skills to create powerful, user-friendly applications for machine and
      server interfaces with limitless applications. My extensive experience
      in manufacturing ensures I will understand the challenges your
      business faces and create a tailor- made solution that will maximize
      your efficiency. It is my personal mission to create tools that push
      businesses to be competitive at the next level, whether its a small
      shop looking to expand or a business of thirty years.
    </p>
    
  </section>
  <section class="bioContent">
    <h3>WHAT I HOPE TO DO</h3>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Starlink_Mission_%2847926144123%29.jpg" alt="Image of Starlink" />
    <p>
      Through everything I have and will do, I aspire to be the best
      designer and human being I can be. I hope to use all of my skills and
      experience to contribute to deepening our knowledge of the cosmos,
      working with a talented team of developers to create applications and 
      software to support the aerospace industry and all applicable applied 
      sciences. Increasing the level of our world's technology means 
      increasing the opportunities and quality of life available to everyone 
      and a great deal of these technologies have come from the continued 
      development of space exploration programs.
    </p>
    
  </section> 
</section>
`;
}

function renderBioString() {
  const bioMain = generateBioString();
  $('main').html(bioMain);
}

function generateContactString() {
  return `<section class="contactPage">
  <h3>
  Read through my list of skills and contact me
  if we'll be a good fit to work together!
  </h3>
  <ul class="skillsList">
  <li class="skillsIcon"><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" class="fa fa-html5"></a></li>
  <li class="skillsIcon"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" class="fa fa-css3"></a></li>
  <li class="skillsIcon"><a href="https://www.javascript.com/" target="_blank" class="	fa fa-jsfiddle"></a></li>
 
  </ul>
  
  <h3>
  Get in touch with me on any of these mediums
  </h3>
  <ul class="contactList">
    <!-- list elements to hyperlink to my respective pages in JS -->
    <li class="social_icon"><a href="https://github.com/lstribli" target="_blank"class="fa fa-github-square"></a></li>
    <li class="social_icon"><a href="https://www.linkedin.com/in/logan-stribling-a0573b1a5/" target="_blank"	class="fa fa-linkedin-square"></a></li>
    <li class="social_icon"><a class="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=logan.stribling@gmail.com" target="_blank"><img src="https://cdn.clipart.email/f5ee43c6bce0887c06a10900025d77c2_round-gmail-logo-logodix_512-512.png" alt="gmail"></img></a></li>
  </ul>
</section>`;
}

function renderContactString() {
  const contactMain = generateContactString();
  $('main').html(contactMain);
}

function generateProjectsString() {
  return `<section class="projectsPage">
 
  <section class="projectsMain">
  <section class="quizApp">
  <h2>QuizApp</h2>
  
  <a href="https://lstribli.github.io/QuizApp/" target="_blank"><img src="https://media.discordapp.net/attachments/701514992767205459/701515426961555467/Screenshot_3.png?width=940&height=468" alt="QuizApp Screenshot"></a>
  <p>
  This fully-interactive web app is one of the first assigned projects I built during my coursework at Thinkful.
  I built it from scratch in VScode using the Jquery library and is intended to show off some skills
  that I've developed throughout my coursework.
  </p>
  <a href="https://github.com/lstribli/QuizApp" target="_blank">GitHub repo</a>
</section>

  <section class="society">
  <a href="https://lstribli.github.io/Society-s-Playground/" target="_blank"><img src="https://media.discordapp.net/attachments/502185091364028427/685453169676779555/oxy.png" alt="Society's Playground"></a>
  <h2>Society's Playground</h2>
  <p>
   I built this website using the Jquery javascript library, coding from scratch in VScode using GitBash and GitHub as my tools.
   This is a side project for a server on "Rust," one of the most-played games on Steam.
   The site and server itself are both a WIP however the server is fully-playable and deployed.
    The Society's Playground website is a tool used to direct more players to the Game's server, give players information 
   about the server such as how the server is ran and maintained, console commandsavailable to players and sign up for
   VIP subscription.
  </p>
  <a href="https://github.com/lstribli/Society-s-Playground" target="_blank">GitHub repo</a>
</section>
</section>

</section>`;
}
function generateMainPageString() {
  return `<section class="mainImg">
  <img
    src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/50943359_2305592866125985_5663419845887131648_n.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=wvnDKZb7ZOkAX-bCDyT&_nc_ht=scontent-den4-1.xx&oh=77c971e2a095e9399ca4aed4567ee9e4&oe=5EAD442D"
    alt="A photo of me"
  />
</section>`;
}
function renderMainPageString() {
  const mainPage = generateMainPageString();
  $('main').html(mainPage);
}
function renderProjectsString() {
  const projectsMain = generateProjectsString();
  $('main').html(projectsMain);
}

function renderStart() {
  $('main').empty();
  $('main').html(renderMainPageString());
}
function listenClick() {
  $('body').on('click', (function (event) {
    // event.preventDefault();
    event.currentTarget === this;
  }));
}
function headerClick() {
  $('header').on('click', (function (event) {
    event.preventDefault();
    event.currentTarget === this;
  }));
}
function bioClick() {
  $('#bio').click(function () {
    renderBioString();
  });
}
function contactClick() {
  $('#contact').click(function () {
    renderContactString();
  });
}
function projectClick() {
  $('#projects').click(function () {
    renderProjectsString();
  });
}
function headClick() {
  $('.headerButton').click(function () {
    renderStart();
  });
}
function bindEventListeners() {
  listenClick();
  bioClick();
  contactClick();
  projectClick();
  headerClick();
  headClick();
}
function render() {
  bindEventListeners();
}

$(render);