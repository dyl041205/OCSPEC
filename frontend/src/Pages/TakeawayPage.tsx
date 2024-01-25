import { useEffect } from "react";


function Takeaway() {
  useEffect(() => {
    document.title = "Takeaway";
  });

  return (
    <>
      <h1>Bean & Brew Cafe</h1>

      <p>Welcome to our takeaway page! Within this page you can order our delightful coffees, teas, hot chocolates and sweet treats directly to your door!
      </p>
      
    </>
  );
}

export default Takeaway;