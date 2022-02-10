/*
    File: app.js
*/

"use strict";

let core;

((core) =>
{
    function displayHome()
    {
        console.log("Disp Home"); 
    }

    function displayAbout()
    {
        console.log("Disp About"); 
    }

    function displayProducts()
    {
        console.log("Disp Prod"); 
    }

    function displayServices()
    {
        console.log("Disp Serv"); 
    }

    function displayContact()
    {
        console.log("Disp Cont"); 
    }

    function Start()
    {
        console.log("App Started...");

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About Us":
              displayAbout();
            break;
          case "Products":
              displayProducts();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
        }

        // toggle login/logout
       //toggleLogin();
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;
})(core || (core={}));