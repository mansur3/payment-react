// import logo from './logo.svg';
import './App.css';
import Payment from "./components/Payment";
import Apple from "./components/Apple";
function App() {
  return (
    <div className="App">
        <Payment date = "28/10/2020" caseStudy = "Case Study" gift = "Amazon Gift" pay = "Pay" desktop = "Desktop - Mobile" icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" arrow = "https://www.svgrepo.com/show/102957/arrow.svg" />
        <Payment date = "28/10/2020" caseStudy = "Case Study" gift = "Amazon Gift" pay = "Pay" desktop = "Desktop - Mobile" icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png" arrow = "https://www.svgrepo.com/show/102957/arrow.svg" />
        <Apple style = {{backgroundColor : "grey"}} date = "28/10/2020" caseStudy = "Case Study" gift = "Apple Gift" pay = "Pay" desktop = "Desktop - Mobile" icon = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/758px-Apple_logo_black.svg.png" arrow = "https://www.svgrepo.com/show/102957/arrow.svg" />

    </div>
  );
}

export default App;
