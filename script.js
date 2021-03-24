//Version 0.1
// Change 17382564 to your toxic vk user
//TODO: add event listeners to reduce memory usage
setInterval(function(){ let elem = document.querySelectorAll('[data-peer="17382564"]')
Array.prototype.forEach.call( elem, function( node ) {
node.parentNode.removeChild( node );
}); }, 5000);