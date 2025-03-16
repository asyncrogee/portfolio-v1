import Nav from './Components/Navbar/Nav';
import Header from './Components/MainArea/Header';
import Content from './Components/MainArea/Content';

export default function App() {
  return (
    <div className="flex justify-between w-screen gap-4 h-screen p-5 text-coalblack">
      <Nav />
      <div className="flex flex-col w-full gap-2">
          <Header />
          <Content />
      </div>
    </div>
  );
}