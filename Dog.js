
class Dog{
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    getBadgeHtml(){
        const {hasBeenLiked, hasBeenSwiped} = this
        const badge = hasBeenLiked === true && hasBeenSwiped === true ? 
                            `<img src="./images/badge-like.png" alt="like badge" id="badge-like" class="badge"></img>`:
                            hasBeenLiked === false & hasBeenSwiped === true?
                            `<img src="./images/badge-nope.png" alt="dislike badge" id="badge-dislike" class="badge">`:
                            `<div></div>`
        return badge
    }
    getDogHtml(){
        const {name, avatar, age, bio} = this
        
        return `${this.getBadgeHtml()}
                    <img src="${avatar}" alt="Profile pic" class="main-img">
                    <div class="user-info">
                        <p class="name">${name}, ${age}</p>
                        <p class="message">${bio}</p>
                </div>`
    }
}

export default Dog;