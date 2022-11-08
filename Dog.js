export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    
    getDogHtml() {
        const {avatar, name, age, bio} = this
        return `<div class="img-container">
                    <img class="dog-avatar" src=${avatar}>
                    <div class="description">
                        <h2 class="name">${name}, ${age}</h2>
                        <p class="bio">${bio}</p>
                    </div>
                </div>`
    }
    getLikeHtml() {
        const {avatar, name, age, bio} = this
        return `<div class="img-container">
                    <img class="like-badge" src="badge-like.png">
                    <img class="dog-avatar" src=${avatar}>
                    <div class="description">
                        <h2 class="name">${name}, ${age}</h2>
                        <p class="bio">${bio}</p>
                    </div>
                </div>`
    }
    getDislikeHtml() {
        const {avatar, name, age, bio} = this
        return `<div class="img-container">
                    <img class="dislike-badge" src="badge-nope.png">
                    <img class="dog-avatar" src=${avatar}>
                    <div class="description">
                        <h2 class="name">${name}, ${age}</h2>
                        <p class="bio">${bio}</p>
                    </div>
                </div>`
    }
}
