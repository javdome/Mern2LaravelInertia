import Navbar from "@/Components/Navbar";

function App({children}) {  

  return (
    <div className="App">
        <Navbar />
        <div className="pages">
            {children}
        </div>
    </div>
  );
}

export default App;