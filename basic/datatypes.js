"user strict" ; // treat all js code as newer version


    // alert("3+3")   // we are using node  js , not browser


    // console.log(3+3);

    // console.log("Sandy");


    //
    let name = "sandeep"
    let age = 18
    let isLoggedIn = true ;    
    let state     
                                                          //bigint
                                                          //string => ""
                                                          //boolean => true /false
                                                          // null
                                                          //undefined
                                                          // symbol
                                                          //object
    //console.log(typeof age,name,isLoggedIn,state )                                                      


    //  ********************** //
   // stack (primitive type ) ,  heap (non-primitive type )

   let myYoutubename = "hiteshchowdharyyoutubeclass"

   let anotherName = myYoutubename
   anotherName = "chaiaurcode"

   console.log(myYoutubename);
   console.log(anotherName);

   let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
   }
   let userTwo =userOne

   userTwo.email ="hitesh@google.com"


   console.log(userOne.email)
   console.log(userTwo.email)