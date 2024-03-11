function bmiCalculator(weight, height) {
  const bmi = Math.round(weight / Math.pow(height, 2));
  let interpretation;

  if (bmi < 18.5) {
    interpretation = `Your BMI is ${bmi}, so you are underweight.`;
  }

  if (bmi > 18.5 && bmi < 24.9) {
    interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
  }

  if (bmi > 24.9) {
    interpretation = `Your BMI is ${bmi}, so you are overweight.`;
  }

  return interpretation;
}

const msg = bmiCalculator(64, 1.70);
console.log(msg);