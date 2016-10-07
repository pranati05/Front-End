function sortJsonName(a,b){
	   
	   return a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1;
      };
function reverse(a,b){
   return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;   
};
function capitalizeFirstLetter(str) {
   
    str = str.split(' ');
   for (var i = 0; i < str.length; i++) {
       
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
   }
       return str.join(' '); 
};
$(document).ready(function() {
               
				var folder = "images/"
				var jsonData;
            $.ajax({
                    type: 'GET',
                    url: 'data.json',
                    dataType: 'json',
                    success: function(data) {
						jsonData = data;
                        
						var res = jsonData.sort(sortJsonName);
                      
						$("#order").click(function(){
                             
                           if (rev = res)
                    {           
                                rev = jsonData.sort(reverse); 
                              
                    } else 
                                {
                                    rev = jsonData.sort(sortJsonName);
                                    
                                }
                           
                               console.log(rev);
                        return rev;
                                
                        });
						for(var i=0; i<jsonData.length; i++)
						{	
						var cap = capitalizeFirstLetter(jsonData[i].title);
						
                           
							if(jsonData[i].is_published == true)
						{	
							
                               var row = $("<tr><td><img src = ' " + folder + jsonData[i].image_name + " 'height ='201'></td><td>" + cap + "</td><td>" + jsonData[i].image_name + "</td><td><hr/>" + jsonData[i].description + "</td><td></tr>");
                              
							   $("#results").append(row);
							  
							    $("#results tbody tr:last-child").append('<td><p><i class="material-icons">favorite</i><i class="material-icons">grade</i></p></td>');
						}
						}
					}
        });
            return false;
        });