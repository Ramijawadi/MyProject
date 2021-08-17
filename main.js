
var friends = [
  "ali",
  "mohamed",
  "salah",
  "rami"
];

var specialFriends = friends.indexOf("salah");
console.log(specialFriends);
console.log(friends[3]);

document.getElementById("all").innerHTML = "My freinds are " + friends ; 
document.getElementById("special").innerHTML ="my special friend is " +friends[specialFriends] ;
 






