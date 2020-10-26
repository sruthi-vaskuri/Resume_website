/* Storing all the inputs given by the users to the respective variables 

   And then setting the values into sessionStorage using setItem tag*/
   
function download () {
    const firstname = document.getElementById('firstname').value;
    const jobtitle = document.getElementById('jobtitle').value;
    const phno=document.getElementById('phno').value;
    const email=document.getElementById('email').value;
    const profileinfo =document.getElementById('profile').value;
    const projectname=document.getElementById('projectname').value;
    const projectdetails=document.getElementById('projectdetails').value;
    const college=document.getElementById('college').value;
    const qualification=document.getElementById('qualification').value;
    const description=document.getElementById('description').value;
    const skills1=document.getElementById('skills1').value;
    const skills2= document.getElementById('skills2').value;
    const skills3=document.getElementById('skills3').value;
    
    sessionStorage.setItem("FIRSTNAME", firstname);
    sessionStorage.setItem("DESIGNATION",jobtitle);
    sessionStorage.setItem("PHNO", phno);
    sessionStorage.setItem("EMAIL",email);
    sessionStorage.setItem("PROFILE", profileinfo);
    sessionStorage.setItem("PROJECTNAME", projectname);
    sessionStorage.setItem("PROJECTDETAILS", projectdetails);
    sessionStorage.setItem("COLLEGE", college);
    sessionStorage.setItem("QUALIFICATION", qualification);
    sessionStorage.setItem("DESCRIPTION", description);
    sessionStorage.setItem("SKILLS1", skills1);
    sessionStorage.setItem("SKILLS2", skills2);
    sessionStorage.setItem("SKILLS3", skills3);

    return;
}