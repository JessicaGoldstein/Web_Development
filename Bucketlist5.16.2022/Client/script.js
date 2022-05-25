//CRUD - Create, Read, Update, Delete

//Update
// $("li").on("click", function(){
//   $(this).toggleClass("completed")  
// })
// //Delete
// $('ul').on('click', "span", function(){
// $(this).parent().remove();
// });

//Create
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val().trim()) {
    let listItem = $(this).val());
    $("ul").append(
        <li>
        ${listItem}
        <span>
            <i class="fa fa-trash-alt"></i>
            </span>
            </li>
    );
    $(this).val("")
    }
});