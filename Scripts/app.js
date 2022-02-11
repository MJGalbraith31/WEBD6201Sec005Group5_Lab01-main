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

        let body = document.getElementById("bodyCopy"); 

        body.innerHTML = `<br/><h2>Welcome to our WEBD6201 lab page.</h2>
        <p>We created this website to domonstrate our proficiency and understanding with Javascript.</p>`; 
    }

    function displayAbout()
    {
        console.log("Disp About"); 
    }

    function displayProjects()
    {
        console.log("Disp Proj"); 
    }

    function displayServices()
    {
        console.log("Disp Serv"); 

        let body = document.getElementById("bodyCopy"); 

        body.innerHTML = `<br/><h2>Our Services</h2>
        <p>Below are several of the main services that we provide. </p>`; 
    }

    function displayContact()
    {
        console.log("Disp Cont"); 
    }

    function Start()
    {
        console.log("App Started...");

        document.getElementById("projLink").innerHTML = `<i class="fas fa-cog fa-lg"></i> Projects`;

        console.log(document.getElementById("projLink").textContent); 

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About Us":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
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