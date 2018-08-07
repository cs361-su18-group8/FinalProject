/****************************************************************************
 * Author: Riley Kraft
 * Date: 08/07/2018
 * Description: This script enables the photo carousel on the home page to
 * 				operate automatically on a timed loop.
 * Resources:
 * 		
 ***************************************************************************/
function enable(label) {
	document.getElementById(label).disabled = false; 
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
