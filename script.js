function volume_sphere() {
    //Write your code here
	let radius=document.getElementById("redius").value;

	radius = parseFloat(radius);

	if (isNaN(radius)|| radius<0) {

		document.getElementById("volume").value="NaN";
		return;
		
	}
	const volume=(4/3)*Math.PI * Math.pow(radius,3);

	document.getElementById("volume").value=value.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
