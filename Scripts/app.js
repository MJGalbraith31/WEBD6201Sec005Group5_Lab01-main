/*
    Authors: MJ Galbraith (100755993), Matthew Austin (100660651)
    File: app.js
    Date: 2022/02/09
    Description: 
        This is the javascript file for the website
    
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

        let body = document.getElementById("bodyCopy");

        /* about section style modeled from... 
         https://www.w3schools.com/howto/howto_css_about_page.asp
        */
         body.innerHTML = `
        <div class="about-section">
        <h1>About Us Page</h1>
        <p>WEBD 6201 Group# 05</p>
      </div>
      
      <h2 style="text-align:center">Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src="#" alt="MJ" style="width:100%">
            <div class="container">
              <h2>MJ Galbraith</h2>
              <p class="title">Computer Programmer</p>
              <p>murray.galbraith@dcmail.ca</p>
              <a href="#">Resume</a>
            </div>
          </div>
        </div>
      
        <div class="column">
          <div class="card">
            <img src="#" alt="Matthew" style="width:100%">
            <div class="container">
              <h2>Matthew Austin</h2>
              <p class="title">Computer Programmer</p>
              <p>matthew.austin@dcmail.ca</p>
              <a href="#">Resume</a>
            </div>
          </div>
        </div>
      </div>
        `;
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

    /**
     * displayContact - This method adds the body html elements for the contact page
     */
    function displayContact()
    {
        console.log("Disp Cont"); 

        let body = document.getElementById("bodyCopy");

        body.innerHTML = `<form>
            <h2>Contact Us</h2>
            <div class="form-group row">
                <label for="inputFName" class="col-sm-2 col-form-label">First Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputFName" placeholder="First Name">
            </div>
            </div>
            <div class="form-group row">
                <label for="inputLName" class="col-sm-2 col-form-label">Last Name</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputLName" placeholder="Last Name">
            </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-2 col-form-label">Email Address</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" placeholder="Email Address">
            </div>
            </div>
            <div class="form-group row">
                <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputMessage" placeholder="Message">
            </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
             <button type="submit" class="btn btn-primary">Submit</button>
             </div>
            </div>
            </form> `;
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