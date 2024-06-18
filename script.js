var like = document.getElementById('like');

function post() {
    const liked = document.createElement("i");
    liked.className = 'fas fa-heart fa-lg'; // Apply the necessary classes
    liked.setAttribute('aria-hidden', 'true');

    // Check if the 'like' element already has the 'liked' icon
    if (!document.getElementById('liked')) {
        liked.id = 'liked'; // Give a unique id to the liked icon
        like.append(liked);
        
    }
}