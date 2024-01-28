
const button1 = document.querySelector("#btn");

button1.addEventListener("click", function(){
    
    const input1 = document.querySelector(".box3");
    const output1 = document.querySelector(".out1");
    const input2 = document.querySelector(".box2");
    const output2 = document.querySelector(".out2");
    const input3 = document.querySelector(".box1");
    const output3 = document.querySelector(".out3");
    const message4 = document.querySelector(".Da1");
    const message5 = document.querySelector(".Da2");
    const message6 = document.querySelector(".Da3");
    const message1 = document.querySelector(".par1");
    const message2 = document.querySelector(".par2");
    const message3 = document.querySelector(".par3");

    
    const dobStr = [input1.value, input2.value, input3.value];
    const dob = new Date(dobStr);


    if (!isNaN(dob.getTime())) { 
        
        const monthDiff = Date.now() - dob.getTime();
        const ageDt = new Date(monthDiff);
        const year = ageDt.getUTCFullYear() - 1970;
        const month = ageDt.getUTCMonth();
        const day = ageDt.getUTCDate()-1;

        output1.innerHTML = year;
        output2.innerHTML = month;
        output3.innerHTML = day;

        message1.style.display = "none";
        message2.style.display = "none";
        message3.style.display = "none";
        input1.style.borderColor = "gray";
        input2.style.borderColor = "gray";
        input3.style.borderColor = "gray";
        message4.style.color = "gray";
        message5.style.color = "gray";
        message6.style.color = "gray";
    } 
  
    else {
        input1.style.borderColor = "red";
        input2.style.borderColor = "red";
        input3.style.borderColor = "red";
        message4.style.color = "red";
        message5.style.color = "red";
        message6.style.color = "red";
        message1.style.display = "flex";
        message2.style.display = "flex";
        message3.style.display = "flex";
        }
});
