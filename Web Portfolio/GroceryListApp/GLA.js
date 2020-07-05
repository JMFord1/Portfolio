 $(document).ready(function(){
      
      var groceryList = [];

      // add grocery item to list //

 $("#btn").click(function() {
    var item = prompt("what do you want to add?");
    groceryList.push(item);
    if(groceryList.length >= 25){
      $(".groceries1").append("<li>" + item + "</li>")
    } else {
      $(".groceries").append("<li>" + item + "</li>")
    }
   
    console.log(groceryList);
    return groceryList;
  });


  // remove grocery item from list;  need to clean this up. loop?  //


$(".groceries").on("click","li", function(){
      $(this).remove("li");
  console.log(groceryList);
    return groceryList;
    });

$(".groceries1").on("click","li", function(){
      $(this).remove("li");
  console.log(groceryList);
    return groceryList;
    });

$(".groceries2").on("click","li", function(){
      $(this).remove("li");
  console.log(groceryList);
    return groceryList;
    });

$(".groceries3").on("click","li", function(){
      $(this).remove("li");
  console.log(groceryList);
    return groceryList;
    });


});


 // test space //


 // working base button function //

  $("#btn").click(function() {
    var item = prompt("what do you want to add?");
    groceryList.push(item);
    if(groceryList.length >= 25){
      $(".groceries1").append("<li>" + item + "</li>")
    } else {
      $(".groceries").append("<li>" + item + "</li>")
    }
   
    console.log(groceryList);
    return groceryList;
  });  




// complex add button function //  

// maybe clean this up with loop? //
  
  $("#btn").click(function() {
    var item = prompt("what do you want to add?");
    groceryList.push(item);
    if(groceryList.length <= 25){
      $(".groceries").append("<li>" + item + "</li>");
    } else if(groceryList.length > 25 && groceryList.length <= 50){
      $(".groceries1").append("<li>" + item + "</li>");
    }else if(groceryList.length > 50 && groceryList.length <= 75){
    	 $(".groceries2").append("<li>" + item + "</li>");
    }else if(groceryList.length > 75 && groceryList.length <= 100){
    	 $(".groceries3").append("<li>" + item + "</li>");
    }else{
    	alert("remove an item to add a new one");
    }
   
    console.log(groceryList);
    return groceryList;
  });  





 // saving this drop-down html button //

  <div class="dropdown">
<button class="dropBtn">My Lists</button>
<div class="dropdown-content" id="myLists">
		<a href='#' id='newListBtn'>New List</a>
		<a href="#">groceries</a>
		<a href="#">office supplies</a> 
    </div>
    </div> 





		// more indexing code KEEP //

		var p = document.getElementById('list');
for (var i = 0, len = p.children.length; i < len; i++)
{

    (function(index){
        p.children[i].onclick = function(){
        	var g = p.children[i];
        	groceryList.splice(g, 1);
              alert(index)
              return g;
        }    
    })(i);

} 


// just a copy to play around with //
    var p = document.getElementById('list');
for (var i = 0, len = p.children.length; i < len; i++)
{

    (function(index){
        p.children[i].onclick = function(){
          var g = p.children[i];
          groceryList.splice(g, 1);
              console.log(groceryList);
              return g;
        }    
    })(i);

} 





