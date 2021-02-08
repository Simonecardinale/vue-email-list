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

var arrayEmail = [];

$.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/mail",
    type: "GET",
    success: function (response) {
        for(let i = 0; i < 10; i++){
            arrayEmail.push(response);
            console.log(arrayEmail);
        }
            for(var k in arrayEmail){
                $('#jqueryp').html(arrayEmail[k].response)
            }
    },
    error: function () {
        alert( 'C’è stato un’errore' );
    }
    
});