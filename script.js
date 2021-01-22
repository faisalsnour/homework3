
        // generate button has an eventlistener to call passwordLength function when clicked
        document.querySelector('#generate').addEventListener("click",passwordLength);  

        // the below code is an object of global variables

        var globalVariables = 
        {
          numbers : [0,1,2,3,4,5,6,7,8,9],
          lowerCase : ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
          upperCase : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
          specialChar : ["!","@","#","$","%","^","&","*","(",")","_","+","|"]
        }
   
        var criteria = [];
  
        var generatePassword = "";
        
      // This function create a random password based on user criteria and display it on password textarea
      
      function showPassword()
      {
        var shortCriteria = criteria.slice(1);
        for (j=0; j<criteria[0]; j++){
          var randomCriteria = shortCriteria[Math.floor(Math.random() * shortCriteria.length)];
          if(randomCriteria === "upperCase"){
            generatePassword += globalVariables.upperCase[Math.floor(Math.random() * globalVariables.upperCase.length)];
          }
          if(randomCriteria === "lowerCase"){
            generatePassword += globalVariables.lowerCase[Math.floor(Math.random() * globalVariables.lowerCase.length)];
          }
          if(randomCriteria === "numbers"){
            generatePassword += globalVariables.numbers[Math.floor(Math.random() * globalVariables.numbers.length)];
          }
          if(randomCriteria === "specialChar"){
            generatePassword += globalVariables.specialChar[Math.floor(Math.random() * globalVariables.specialChar.length)];
          }
          
        }
        
        document.querySelector("#password").value = generatePassword;
  
      }
  
      // a function to erase textarea value
  
      function eraseText() 
      {
      document.querySelector("#password").value = "";
      }
  
      // a function to take criteria from user
  
      function passwordLength(){
  
        eraseText();
        generatePassword = "";
        criteria = [];
        var tempCriteria = [];
        var counter = 0;
        var numberPassWordLength = prompt("Please enter the length of your password");
        numberPassWordLength = parseInt(numberPassWordLength);
        if(isNaN(numberPassWordLength))
        {
          alert('Try again and enter number only')
        }
        else if(numberPassWordLength >8 && numberPassWordLength <128)
          {
            tempCriteria.push(numberPassWordLength);
            if(confirm('Do you want uppercase letter?'))
            {
              tempCriteria.push("upperCase");
            }
              else
              {
                counter++;
              }
            if(confirm('Do you want lowercase letter?'))
            {
              tempCriteria.push("lowerCase");
            }
              else
              {
                counter++
              }
            if(confirm('Do you want to have numbers?'))
            {
              tempCriteria.push("numbers");
            }
              else
              {
                counter++
              }
            if(confirm('Do you want to have special characters?'))
            {
              tempCriteria.push("specialChar");
            }
            else
              { if(counter ===3){
                alert("Try again! password should have at least uppercase or lowercase or number or special character")
              }
              }
            if(counter <3){
              criteria = tempCriteria;
              showPassword();
            }
          }
          else
          {
            alert("Try again! Password should be greater than 8 and less the 128 character");
          }
        }