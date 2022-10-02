const checkAir = function (samples, threshold) {
  let clean = 0;
  let dirty = 0;
  for (let sample of samples) {
    if (sample === 'clean') {
      clean++;
    } else {
      dirty++ 
    }
  }
  if (dirty / clean > threshold) {
    return 'Polluted'
  } else {
    return 'Clean'
  }
};

    // if (dirty / clean > threshold) {
      // console.log('dirty: ' + dirty)
      // console.log('clean: ' + clean)
      // console.log('dirty/clean: ' + dirty/clean)
      // console.log('threshold: ' + threshold)
      // console.log('------------------')
    //   return 'Polluted';

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))