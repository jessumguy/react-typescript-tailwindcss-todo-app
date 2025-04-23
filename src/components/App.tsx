import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="flex-col justify-items-center font-roboto bg-[#070F2B] min-h-screen">
      <BackgroundHeading />

      <main className="w-[972px] h-[820px] bg-[#1B1A55] rounded-[1rem] shadow-[0_4px_4px_rgba(0,0,0,0.50)] grid grid-cols-[4fr_8fr] grid-rows-[1fr_8fr] overflow-hidden">
        <Header />

        <TodoList />

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
