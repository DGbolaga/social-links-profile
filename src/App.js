import './App.css';

function App() {
  return (
    <main>
      <div className='card'>
        <img src='./avatar-jessica.jpeg' alt=''/>
        <div className='content'>
          <h1>Jessica Randall</h1>
          <h3>London, United Kingdom</h3>
        </div>
        <p className='spaced-text'>"Front-end developer and avid reader."</p>

        <div className='links'>
          <a href='https://github.com'>GitHub</a>
          <a href='https://www.frontendmentor.io/'>Frontend Mentor</a>
          <a href='https://www.linkedin.com'>Linkedin</a>
          <a href='https://x.com'>Twitter</a>
          <a href='https://www.instagram.com/'>Instagram</a>
        </div>
      </div>
    </main>
  );
}

export default App;
