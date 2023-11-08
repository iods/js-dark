function tail(n) {
  if (n === 0) {
    return;
  } else {
    console.log(n);
  }
  tail(n - 1);
}

tail(5);

console.log("---------------------------");

function head(m) {
  if (m === 0) {
    return;
  } else {
    head(m - 1);
    console.log(m);
  }
}

head(5);
