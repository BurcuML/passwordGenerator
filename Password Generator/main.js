const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const passwordRes = document.getElementById("password-res");

function generatedPassword(){
  const length= document.getElementById("length").value;
  const includeUpper = uppercase.checked;
  const includeLower = lowercase.checked;
  const includeNumber = number.checked;
  const includeSymbol = symbol.checked;
  const include = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_;,.+"
    }

    let passwordGenerator = "";

    if(includeUpper){
       passwordGenerator+= include.upper;
      }
    if(includeLower){
      passwordGenerator+= include.lower;
    }      
    if(includeNumber){
      passwordGenerator+= include.number;
    } 
    if(includeSymbol){
      passwordGenerator+= include.symbol;
    } 

    if (!(includeUpper || includeLower || includeNumber || includeSymbol)) {
      passwordRes.innerText = "Please select at least one option";
    }
    let generatedPass = '';
    for(let i = 0; i < length; i++){
      const randomPass = passwordGenerator[Math.floor(Math.random() * passwordGenerator.length)];
      generatedPass += randomPass;
      }
      passwordRes.innerHTML = generatedPass;
      }

