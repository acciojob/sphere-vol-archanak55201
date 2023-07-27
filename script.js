function volume_sphere(e) {
	e.preventDefault();
    let r=document.getElementById("radius").value;
	let volume=((4*22*r*r*r)/(3*7)).toPrecision(7);
	let vol=document.getElementById("volume");
	vol.value=volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
