document.write("66. to display the city name if the string begins with 'Los' or 'New' otherwise return blank."+"<br>");
function test66(str){
    if(str.length>=3 && (str.substring(0,3)=="Lon" || str.substring(0,3)=="New")){
        return str;
    }
    return " ";
}
document.write("The string :New York, ans :"+test66("New York")+"<br>");
document.write("The string :sanjeev, ans :"+test66("sanjeev")+"<br><br>");