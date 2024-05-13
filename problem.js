document.getElementById('calculatorForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const transportation = parseFloat(document.getElementById('transportation').value);
  const energy = parseFloat(document.getElementById('energy').value);
  const lifestyle = parseFloat(document.getElementById('lifestyle').value);

  const carbonFootprint = (transportation * 0.3) + (energy * 0.5) + (lifestyle * 0.2);

  document.getElementById('result').innerHTML = `<p>Your estimated carbon footprint is<br>${carbonFootprint.toFixed(2)} tons of CO<sub>2</sub> per week.</p>`;
});
