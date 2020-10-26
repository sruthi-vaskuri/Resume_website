/* Redirects the inputs stored in the seessionStorage to required HTML page i.e Resume.html  */

window.addEventListener('load', () => {
   /* Retrieving the values stored in sessionStorage and assigning them to their respective variables.*/
    const name = sessionStorage.getItem('FIRSTNAME');
    const job = sessionStorage.getItem('DESIGNATION');
    const phno = sessionStorage.getItem('PHNO');
    const email = sessionStorage.getItem('EMAIL');
    const profile = sessionStorage.getItem('PROFILE');
    const projectname = sessionStorage.getItem('PROJECTNAME');
    const projectdetails = sessionStorage.getItem('PROJECTDETAILS');
    const college = sessionStorage.getItem('COLLEGE');
    const qualification = sessionStorage.getItem('QUALIFICATION');
    const description = sessionStorage.getItem('DESCRIPTION');
    const skills1 = sessionStorage.getItem('SKILLS1');
    const skills2 = sessionStorage.getItem('SKILLS2');
    const skills3 = sessionStorage.getItem('SKILLS3');

    /* Displaying the values assigned to the variables in the desired html page using getElementById tag */
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-job').innerHTML = job;
    document.getElementById('result-phno').innerHTML = phno;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-profile').innerHTML = profile;
    document.getElementById('result-projectname').innerHTML = projectname;
    document.getElementById('result-projectdetails').innerHTML = projectdetails;
    document.getElementById('result-college').innerHTML = college;
    document.getElementById('result-qualification').innerHTML = qualification;
    document.getElementById('result-description').innerHTML = description;
    document.getElementById('result-skills1').innerHTML = skills1;
    document.getElementById('result-skills2').innerHTML = skills2;
    document.getElementById('result-skills3').innerHTML = skills3;

})