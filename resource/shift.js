function page_selector(shown, hidden, hidden2) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    document.getElementById(hidden2).style.display='none';


    return false;
  }


  function myFunction() {
    document.getElementById("btn1").className = "nav-item active";
    document.getElementById("btn2").className = "nav-item";
    document.getElementById("btn3").className = "nav-item";


  }
  function myFunction2() {
      document.getElementById("btn1").className = "nav-item";
      document.getElementById("btn2").className = "nav-item active";
      document.getElementById("btn3").className = "nav-item";

  }
  function myFunction3() {
      document.getElementById("btn1").className = "nav-item";
      document.getElementById("btn2").className = "nav-item";
      document.getElementById("btn3").className = "nav-item active";

  }