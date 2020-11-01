messages = document.getElementById('messages');
inputmsg = document.getElementById('input');
botblock = document.getElementById('botblock');
userblock = document.getElementById('userblock');

var c=0,msgno=0;

// sections variable stores all the mandatory sections requiredto build resume.
var sections="Work Experience , Projects , Skills , Education are mandatory and adds weight to your resume. Make sure you specify most recent information.";

// tips variable stores tips and keys essential to build resume
let tips="1. Make it simple, straightforward and easy to read 2. Include only the most relevant and important information 3. Try to make it professional ";

// function which takes the input from the user and creates userblock
function taketheinput(event){
    if(event.key==="Enter"){
        messages.innerHTML+=userblock.outerHTML;
        msgno+=1;
        c+=1;
        messages.lastChild.id=msgno;
        messages.lastChild.childNodes[1].textContent=inputmsg.value;
        processinput(inputmsg.value.toLowerCase());
        inputmsg.value="";    
    } 
}

//Process the input taken from the user
function processinput(inputval){
	if(inputval!=""){
        messages.innerHTML += botblock.outerHTML;
        msgno+=1;
		messages.lastChild.id = msgno;
		messages.lastChild.childNodes[3].textContent = reply(inputval);
	}
}

//returns the reply to the user message
function reply(inputdata){
    var result=inputdata.toLowerCase();
    try{
        if(c==1)
          return  "Hello " + result + " . Please let me know what you are looking for."; 
        else if(result.includes("create"))
          window.open("login.html");
        else if(result.includes("tips")){
          return tips;
        }
        else if(result.includes("quit"))
          return "Thank You. Hope to see you again."
        else if(result.includes("sections"))
          return sections;
        else
           return "Sorry Please come again";
      }
    catch{
      return "Something went wrong! Please try again";
    }
    return "Hope that you have created an impressive and exclusive CV. Please let me know if me know if you want to continue else enter QUIT";
}
