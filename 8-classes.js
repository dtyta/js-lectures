class Comment{

    constructor(qweqweqweqe){
        this.text = qweqweqweqe
        this.likesQuantity = 10
    }

    addLike(){
        this.likesQuantity++
        //this.likesQuantity = this.likesQuantity + 1
    }


}


const firstComment = new Comment("firstComment");

// console.log(firstComment)
// console.log(firstComment.text)
// console.log(firstComment.likesQuantity)

firstComment.addLike();

// console.log(firstComment)
// console.log(firstComment.text)
// console.log(firstComment.likesQuantity)

firstComment.addLike();

// console.log(firstComment)
// console.log(firstComment.text)
// console.log(firstComment.likesQuantity)



const secondComment = new Comment("secondComment");
const thirdComment = new Comment("thirdComment");

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`)
console.log(`thirdComment: ${thirdComment.likesQuantity}`)

secondComment.addLike();
thirdComment.addLike();
console.log(`secondComment: ${secondComment.likesQuantity}`)
console.log(`thirdComment: ${thirdComment.likesQuantity}`)

// let comment = {
//     text: "qweqwe",
//     likesQuantity: 0
// }