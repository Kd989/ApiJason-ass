'use strict';


const div_main = document.getElementById("main")





const Myload = () => {
    let a = new XMLHttpRequest()
    a.onload = function () {
        this.status === 200 ? this.responseText : "fail"
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText);
        // console.log(data);
        let res1 = data.map((e) => {
            return e
        })
        console.log(res1);



      



        for ( let b of res1) {
            var bx1 = document.createElement("div")
            div_main.appendChild(bx1)
            bx1.setAttribute("class", "bx1")


            // let key = ["id","category","description","title"]
            // key.forEach((e)=>{
            //     var span = document.createElement("span")
            //    var text = document.createTextNode(e)
            //   
            // })


            for (let i in b) {
                if (i == "id" || i == "title" || i == "price"|| i == "description"|| i == "category" ) 
                {   
                    var span = document.createElement("span")
                    var text = document.createTextNode(i)
                    var text1 = document.createTextNode(" : ")
                   
                   
                    var data1 = document.createElement('p')
                    bx1.appendChild(data1)
                    span.appendChild(text)
                    span.appendChild(text1)
                    data1.appendChild(span)
                    let info = document.createTextNode(b[i])
                    data1.appendChild(info)
                    
                }
                else if(i=="image"){
                    var div_Img = document.createElement("div")
                    var img = document.createElement("img");
                  
                   


                    div_Img.appendChild(img)
                    data1.appendChild(div_Img)
                    div_Img.className="image"
                    img.setAttribute("src",b[i])
                    img.setAttribute("class","img")
                    // console.log(div_Img);
                }
               else if(i== "rating"){
                    // console.log(b[i]);
                    for(let c in b[i]){
                        console.log(c,b[i][c]);

                        var span_id = document.createElement('span')
                        var text_id = document.createTextNode(c)
                        var text_id_colan = document.createTextNode(" : ")




                       

                        // var rating_span = document.createElement("span")
                        var rating = document.createElement("p");
                        bx1.appendChild(rating)
                        span_id.appendChild(text_id)
                        span_id.appendChild(text_id_colan)
                        rating.appendChild(span_id)
                        var ratin_data = document.createTextNode(b[i][c])
                        rating.appendChild(ratin_data)
                        
                        
                    }
               }
                
                


            }



        }
        // res2 = data.filter((v) => {
        //     return v.image

        // })
        // // console.log(res2);
        // for (k of res2) {
          
        //     for (o in k) {
        //         if (o == "image") {
        //             console.log(k[o]);

        //             let img = document.createElement("img")
        //             bx1.appendChild(img)
        //             img.setAttribute("src", k[o])
        //             img.setAttribute("alt", "sorry")
                   
        //              console.log(img);
        //         }
        //     }
        // }







    }

    a.open("GET", "https://fakestoreapi.com/products", true);
    a.send()
}
Myload()

































// class Trycatch {
//     constructor(data) {
//         // console.log(data)
//         this.val = data
//     }
//     read_name() {
//         let res1 = this.val.map((element) => {
//             return element.name
//         })
//         console.log(res1)
//     }
//     read_marks() {
//         let res2 = this.val.filter((element) => {
//             return element.marks > 35
//         })

//         // console.log(res2);
//         // document.write(res2)
//         for (let j of res2) {
//             // console.log(j)
//             for (var i in j) {
//                 // console.log(j[i])
//                 document.write(`${i} :---- ${j[i]}<br>`)
//             }

//             document.write("***************************<br>")
//         }
//     }


//     read_email() {
//         let user_input = prompt("Enter a Name")
//         let res3 = this.val.find((element) => {
//             return element.name == user_input
//         })
//         console.log(res3)
//         for (let j in res3) {
//             // console.log(j)
//             if (j == "email") {
//                 document.write(res3[j] + "<br>")
//             }
//         }
//     }

//     total_marks() {
//         let res4 = this.val.reduce((sum, element) => {
//             return sum = sum + element.marks
//         }, 0)
//         console.log(res4)
//     }



// }



// let new_demo = new Trycatch(students_info)
// new_demo.read_email()



// let std_data = new Trycatch(students_info)
// std_data.read_name()
// std_data.read_marks()
// std_data.read_email()
// std_data.total_marks()


// let new_demo = new Trycatch(students_info)
// new_demo.read_email()
