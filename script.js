function volume_sphere() {
  // Get the value of radius from the input field
  const radiusInput = document.getElementById("radius").value;

  // Convert it to a floating-point number
  const radius = parseFloat(radiusInput);

  // Check if the input is valid (non-negative number)
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate the volume using the formula: V = (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round the result to 4 decimal places and display it
  document.getElementById("volume").value = volume.toFixed(4);
}
