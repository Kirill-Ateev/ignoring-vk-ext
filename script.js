// Change 17382564 to your toxic vk user
let elem = document.querySelectorAll('[data-peer="17382564"]')
Array.prototype.forEach.call( elem, function( node ) {
node.parentNode.removeChild( node );
});