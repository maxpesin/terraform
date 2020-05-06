$(document).ready(function() {
    // Hide accordion section on page load
    $('.inner').css("display", "none");

    const gallery = document.querySelector('.accordion-tile-image-div');
    const overlay = document.querySelector('#overlay');
    const overlayImage = overlay.querySelector('img');
    const overlayLink = overlay.querySelector('a');
    const overlayClose = overlay.querySelector('.close');
    var i;
    // open overlay with correct image function
    function handleClick(e) {
      const src = e.currentTarget.querySelector('img').src;
      const href = this.childNodes[0].nextSibling.href;
      overlayLink.href = href;
      overlayLink.innerText = href;
      overlayImage.src = src;
      overlay.classList.add('open');
    }
    // construct items
    const items = document.querySelectorAll('.accordion-tile');
    // add a click event listener to each block 
    for (i = 0; i < items.length; i++) {
    var addClick = items[i];
      addClick.addEventListener('click', handleClick);
    };
    // execute close overlay function on click
    overlayClose.addEventListener('click', close);

    // close overlay function
    function close() {
        overlay.classList.remove('open');
      }
    // hide overlay click on grey
    /*overlay.addEventListener('click', function() {
        document.getElementById("overlay").classList.remove('open');
    })*/  
});

// Toggle Accordion
$('.toggle').click(function(e) {
  e.preventDefault();
  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  } else {
    $this.parent().parent().find('li .inner').removeClass('show');
    $this.parent().parent().find('li .inner').slideUp(350);
    $this.next().toggleClass('show');
    $this.next().slideToggle(350);
  }
});