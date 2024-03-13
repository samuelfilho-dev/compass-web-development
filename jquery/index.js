// How To Select Elements
jQuery("h1");
$("h1");

// How To Add Styles on Select Elements

$('h1').css('color', 'green');
$("h1").addClass("big-title margin-50"); // Add Style Class
$("h1").removeClass("big-title"); // Remove Style Class
$('h1').hasClass('big-title'); // Verify if the element has a Style class or Not.

// Manipulating Text

$("h1").text("Bye");
$('button').html('<em>Hey</em>');

// Manipulating Atributes

$('img').attr('src'); // Get Atribute
$('a').attr('href', 'https://www.yahoo.com'); // Set Atribute

// Add Event Listeners

$("h1").click(() => {
  $("h1").css("color", "purple");
});

$("button").click(() => {
  $("h1").css("color", "purple");
});

$('input').keydown((event) => {
    console.log(event.key);
});

$("body").keydown((event) => {
  $("h1").text(event.key);
});

$("h1").on("click", () => {
  $("h1").css("color", "purple");
});

// Add and Remove Elements

$("h1").before("<button>New Before</button>"); // Add Element before the element was select
$("h1").after("<button>New After</button>"); // Add Element after the element was select
$("h1").prepend("<button>New Prepend</button>"); // Add Element before the content of element was select
$("h1").append("<button>New Append</button>"); // Add Element after the content of element was select

// Add Animation

$("button").on("click", () => {
  $("h1").hide(); // Hide Element

  setInterval(() => {
    $("h1").show(); // Show Element after his Hide
  }, 1000);
});

$("button").on("click", () => {
  $("h1").toggle();
});

$("button").on("click", () => {
  $("h1").fadeOut();

  setInterval(() => $("h1").fadeIn(), 1000);
});

$("button").on("click", () => {
  $("h1").fadeToggle();
});

$("button").on("click", () => {
  $("h1").slideToggle();
});

$("button").on("click", () => {
  $("h1").animate({opacity: 0.5}); // Add Animate CSS function
});

$("button").on("click", () => {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); // Running lots of animations
});
