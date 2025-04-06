function volume_sphere() {
  // Get radius value from input
  let radius = document.getElementById("radius").value;

  // Convert radius to a number
  radius = parseFloat(radius);

  // Check for invalid input (non-numeric or negative)
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate volume using V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and show in output field
  document.getElementById("volume").value = volume.toFixed(4);
}
