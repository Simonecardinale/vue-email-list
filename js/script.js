// var app = new Vue({
//     el: '#app',
//     data:
//     {
//         emailArray: [],
//     },

//     created(){
//             for(let i = 0; i < 10; i++){
//                 axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(result => {
//                     this.emailArray.push(result.data.response)
//                     console.log(this.emailArray);
//                 })
//             }
//     } 
    
// });



// JQuery

// var arrayEmail = [];
// for(let i = 0; i <10; i++){
//     $.ajax({
//         url: "https://flynn.boolean.careers/exercises/api/random/mail",
//         type: "GET",
//         success: function (response) {
//             console.log(response);
//             $('#jqueryp').append(response.response)
//         },
//         error: function () {
//             alert( 'C’è stato un’errore' );
//         }
        
//     });
// }



var arrayEmail = [];
for(let i = 0; i < 10; i++){
    fetch('https://flynn.boolean.careers/exercises/api/random/mail').then(function (response){
        return response.json();
    }).then(function(data) {
        console.log(data);
        document.getElementById("jqueryp").innerHTML+= data.response + "<br />";
    }) .catch (function(err) {
        alert("Errore", err)
    });
}