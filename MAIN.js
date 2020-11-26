students=[]; 
function makeingalign() {
    var deepak1=document.getElementById ("name1").value;
    var deepak2=document.getElementById ("name2").value;
    var deepak3=document.getElementById ("name3").value;
    var deepak4=document.getElementById ("name4").value;
    students.push(deepak1);
    students.push(deepak2);
    students.push(deepak3);
    students.push(deepak4);
    console.log(students);
    document.getElementById("div1").innerHTML=students;
    document.getElementById("makealign").style.display = "none"; document.getElementById("makealign2").style.display = "inline-block";
}
function makeingalign2() {
    students.sort();
    console.log(students);
    document.getElementById("div1").innerHTML=students;
}