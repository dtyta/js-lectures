class Comment{

    constructor(qweqweqweqe){
        this.text = qweqweqweqe
        this.likesQuantity = 10
    }

    addLike(){
        this.likesQuantity++
        //this.likesQuantity = this.likesQuantity + 1
    }

    static mergeComments(first, second){
        return `${first} ${second}`
    }

}

let merged = Comment.mergeComments('First comment', 'Second comment')
console.log(merged)

const newComment = new Comment('Some new comment')

console.log(newComment)

newComment.addLike()

console.log(newComment)

newComment.mergeComments('qweqew', '12123123') // error

console.log(newComment)








// let comment = {
//     text: "qweqwe",
//     likesQuantity :0
// }