$('.show-filters').on('click', function(){
    

   // When our nav is expanded, collapse it
   // change text of show filters to 'show filters
   //otherwise, if the nav is collapsed expand it
   //change the text to say 'hide filters


   if($('.filters-list').is(':visible')){
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
   } else{
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters') 
   }

   // this will block default behaviour of jumping to the default page
   return false


})




$('.filters-list a').on('click', function(){



    let filter = $(this).attr('data-filter')
    console.log(filter)

    //hide all products
    // show the products with a  particular filter

    $('.product').hide()
    $(filter).show()

    // this will add a selected to the current link we've selected
    $('.filters-list a').removeClass('selected')

    //this will add cclaasss name of selected to the current filter
    $(this).addClass('selected')


    // blocks default action of following hrefp
    return false
})