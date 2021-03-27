<<<<<<< HEAD
// Here goes a function to return the smallest name from all of your friend names list.

function tinyFriend(friendNames){
    if(friendNames.length==0){
        return "Sorry to hear that you have no friends at all! :(";
    }
    let tinyFriendName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    for(var i = 0 ; i< friendNames.length; i++){
        if(friendNames[i].length < tinyFriendName.length){
            tinyFriendName = friendNames[i];
        }
    }
    return "Your Tiny Friend among all Friends is none but " + tinyFriendName + ".";
}

let aList = [] ;
=======
// Here goes a function to return the smallest name from all of your friend names list.

function tinyFriend(friendNames){
    if(friendNames.length==0){
        return "Sorry to hear that you have no friends at all! :(";
    }
    let tinyFriendName = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    for(var i = 0 ; i< friendNames.length; i++){
        if(friendNames[i].length < tinyFriendName.length){
            tinyFriendName = friendNames[i];
        }
    }
    return "Your Tiny Friend among all Friends is none but " + tinyFriendName + ".";
}

let aList = [] ;
>>>>>>> 72dc8de (pushing)
console.log(tinyFriend(aList));