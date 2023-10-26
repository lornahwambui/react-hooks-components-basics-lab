import React from "react";



function Header({ blogName }) {
  return (
    <header>
      <h1>{blogName}</h1>
    </header>
  );
}

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}


function Article({ title, date, preview }) {

  date = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}


function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}



function About({ image, aboutText }) {
  image = image || "https://via.placeholder.com/215";
  aboutText = aboutText || "No about text available.";

  return (
    <aside id="about"> 
      <img src={image} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}


function App() {

  const blogName = "My Blog Name";


  const aboutImage = "https://example.com/my-blog-logo.png";
  const aboutText = "Welcome to My Blog! This is the about text.";


  const posts = [
    { title: "Post 1", date: "October 20, 2023", preview: "This is the first post." },
    { title: "Post 2", preview: "This is the second post." },
  ];

  return (
    <div>
      <Header blogName={blogName} />
      <NavBar />
      <Home />
      <About image={aboutImage} aboutText={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;


