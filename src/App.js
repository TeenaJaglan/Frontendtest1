import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App ">
      <div className="m-auto">
     <nav className=" flex relative flex-row justify-between text-white" >
  
      <div className="flex flex-row ml-[1rem] ">
      <img src="https://th.bing.com/th?id=OIP.j2QWWDcoLUQsePeiLsG7hwHaHV&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"alt="logo" className=" object-contain img m-[2rem] opacity-[0.9] w-[70px] h-[70px] "></img>
      <p className=" airfocus m-auto relative right-[0.6rem] text-bold text-white text-[3rem] ">airfocus</p>
      </div>
      <div className=" gap-2 box1 flex my-auto float-right flex-row m-[2rem] ">
        <p>product marketing and growth</p>
        <div className="h-[2rem] mx-[5px]  border-[1px] bg-white"></div>
        <div className="">Glossary</div>
      </div>
     </nav>
     <div className=" next  m-auto flex flex-col ">
      <div className=" heading absolute left-[3rem] my-[50px] " ><h1>Front End</h1></div>
      <p className=" text top-[8rem] relative  my-[60px] right-[21rem] m-auto w-6/12">The front end  of a website is everythimg that the user either sees or interact with when they visit the website . It is responsible for the look and the feel of a website.</p>
     </div></div>
    </div>
  );
}

export default App;
