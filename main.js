var name_of_guests = [] 
function sub(){
    var guest_name = document.getElementById("g-name").value;
    name_of_guests.push(guest_name);
    console.log(guest_name)
    console.log(name_of_guests)
    document.getElementById("guest").innerHTML = name_of_guests;
    document.getElementById("g-name").innerHTML = " "
}
function sor(){
    name_of_guests.sort()
    var sort = name_of_guests.join(" ")
    document.getElementById("sorth").innerHTML = sort;
}
function ser(){
    var search = document.getElementById("sear").value;
    var found = 0
    var i;
    for(i=0;i<name_of_guests.length;i++){

        if(search == name_of_guests[i]){
            found = found+1;
        }
        document.getElementById("fou").innerHTML = "founded in"+found+"/s";
        document.getElementById("guest-name").innerHTML = "<kbd>" + search + "</kbd>";

    }

}