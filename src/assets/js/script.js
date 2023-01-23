document.addEventListener("DOMContentLoaded", function(event) {
    
    let nav = document.getElementById('menu-icon');
    nav.addEventListener('click', function() {
      document.getElementById('main-nav').classList.toggle('open');
    });

    content = document.querySelector('.active-area');
    content.addEventListener('click', function(e){
		let target = e.target;
		var elementname = e.target.tagName;

		if( target.closest('.accordion') == null && target.closest('a') == null && target.id != 'menu-icon' ){
			// if not clicking on link
			var x = e.pageX;
			var y = e.pageY;

			// console.log(element);
			var sticker = document.getElementById('tag-label');
			sticker.innerText = elementname;
			sticker.style.cssText = `display: block; top: ${y-20}px; left: ${x-20}px;`;

		}

    });


    // $("#dark-mode").click(function(){
    // 	$('body').toggleClass('dark');
    // });

    //ACCORDION
    let dropdowns = document.querySelectorAll('.accordion');
    dropdowns.forEach(function(accordion){
    	accordion.addEventListener('click', function(){
    		// console.log('open display');
    		accordion.classList.toggle('open');
    	})
    });

    targetBlank();

});

function targetBlank() {
  // remove subdomain of current site's url and setup regex
  var internal = location.host.replace("www.", "");
      internal = new RegExp(internal, "i");
      
  var a = document.getElementsByTagName('a'); // then, grab every link on the page
  for (var i = 0; i < a.length; i++) {
    var href = a[i].host; // set the host of each link
    if( !internal.test(href) ) { // make sure the href doesn't contain current site's host
      a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
    }
  }
};