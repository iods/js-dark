const gdate = new Date();                                        // creating a new date object
const time = gdate.getTime();                                    // getting the current UNIX time in milliseconds

function inputValidation(input) { // NO EXPORT!
  if (typeof input !== "number") {                             // If the input is not a number, throw this Error
    throw new TypeError(`Expected input type "number". Received: ${typeof input}`);
  } else if (input < 0) {                                      // UNIX timestamps can only be GEQ 0, error is thrown if unix is LSS 0
    throw new RangeError(`Input cannot be less than 0. Received: ${input}`);
  } else if (input > Number.MAX_SAFE_INTEGER) {                // Any integer greater than this may not be safe to work with and is rejected
    throw new RangeError(`Input cannot be greater than ${Number.MAX_SAFE_INTEGER}. Received: ${input}`);
  } else if (input % 1 !== 0) {
    throw new RangeError(`Input must be an integer! Received: ${input}`);
  }
  return 0;
};

function relTime(unix=time) {

  inputValidation(unix);                                      // function call to validate the UNIX timestamp (type number, GEQ 0, LSS MAX_SAFE)

  const diff = time - unix;                                   // calculating difference || positive integer = past; negative integer = future
  const pdif = Math.abs(diff);                                // converting negative integers to positive integers

  if (diff === 0) {                                           // no difference -> return
    return "just now";                                      // this is fast-tracked to avoid calculations if not needed
  }

  const t = {                                                 // time table (milliseconds)
    s: 1000,                                                // [s]econd
    m: 60000,                                               // [m]inute
    h: 3600000,                                             // [h]our
    d: 86400000,                                            // [d]ay
    w: 604800000,                                           // [w]eek
    M: 2629756800,                                          // [M]onth  (average of 30.437 days a month)
    y: 31556952000                                          // [y]ear   (precisely 365.2425 days long)
  };

  const d = [t.s, t.m, t.h, t.d, t.w, t.M, t.y];                          // array for the some() search
  var s = "s";                                                            // sets the default string return to plural, adding an s in every return string

  if (d.some(val => Math.floor(pdif / val) === 1) || pdif === 1) {        // if the string's value is 1 changes return string from plural to singular (Note Math.floor)
    s = "";
  }

  const strings = {                                           // all necessary strings are stored here
    lu: `in ${pdif} millisecond${s}`,
    ls: `in ${Math.floor(pdif / t.s)} second${s}`,
    lm: `in ${Math.floor(pdif / t.m)} minute${s}`,
    lh: `in ${Math.floor(pdif / t.h)} hour${s}`,
    ld: `in ${Math.floor(pdif / t.d)} day${s}`,
    lw: `in ${Math.floor(pdif / t.w)} week${s}`,
    lM: `in ${Math.floor(pdif / t.M)} month${s}`,
    ly: `in ${Math.floor(pdif / t.y)} year${s}`,

    gu: `${pdif} millisecond${s} ago`,
    gs: `${Math.floor(pdif / t.s)} second${s} ago`,
    gm: `${Math.floor(pdif / t.m)} minute${s} ago`,
    gh: `${Math.floor(pdif / t.h)} hour${s} ago`,
    gd: `${Math.floor(pdif / t.d)} day${s} ago`,
    gw: `${Math.floor(pdif / t.w)} week${s} ago`,
    gM: `${Math.floor(pdif / t.M)} month${s} ago`,
    gy: `${Math.floor(pdif / t.y)} year${s} ago`
  };

  if (diff < 0) {                                             // comparison to determine whether the time is in the future relative to now
    if (pdif < t.s) {
      return strings.lu;
    } else if (pdif < t.m) {
      return strings.ls;
    } else if (pdif < t.h) {
      return strings.lm;
    } else if (pdif < t.d) {
      return strings.lh;
    } else if (pdif < t.w) {
      return strings.ld;
    } else if (pdif < t.M) {
      return strings.lw;
    } else if (pdif < t.y) {
      return strings.lM;
    } else {
      return strings.ly;
    }
  } else if (diff > 0) {                                      // comparison to determine whether the time is in the past relative to now
    if (pdif < t.s) {
      return strings.gu;
    } else if (pdif < t.m) {
      return strings.gs;
    } else if (pdif < t.h) {
      return strings.gm;
    } else if (pdif < t.d) {
      return strings.gh;
    } else if (pdif < t.w) {
      return strings.gd;
    } else if (pdif < t.M) {
      return strings.gw;
    } else if (pdif < t.y) {
      return strings.gM;
    } else {
      return strings.gy;
    }
  };

  return "null";                                              // standard return - intellisense (string return) - this should not be seen if code executed successfully
};

function fullTime(unix=time, flag="f") {

  inputValidation(unix);                                      // function call to validate the UNIX timestamp (type number, GEQ 0, LSS MAX_SAFE)

  const weekdays = [                                          // zero indexed array containing weekdays
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const months = [                                            // zero indexed array containing months
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const date = new Date(unix);                                // Creating a Date object based on the timestamp provided using the Date constructor

  const t = {                                                 // time table (0 prefixed strings)
    s: `${date.getMilliseconds()}`.padStart(3, 0),          // milli[s]econds
    S: `${date.getSeconds()}`.padStart(2, 0),               // [S]econds
    m: `${date.getMinutes()}`.padStart(2, 0),               // [M]inutes
    h: `${date.getHours()}`.padStart(2, 0),                 // [h]ours
    d: `${date.getDate()}`.padStart(2, 0),                  // [d]ays
    M: `${date.getMonth() + 1}`.padStart(2, 0),             // [M]onth
    y: `${date.getFullYear()}`,                             // [y]ear

    id: date.getDate(),                                     // index [d]ay - used exclusively to determine 'o'
    iw: `${weekdays[date.getDay()]}`,                       // index [w]eekdays - used to fetch the correct string from 'weekdays' array
    iM: `${months[date.getMonth()]}`                        // index [m]onths - used to fetch correct string from 'months' array
  };

  var o = "th";                                               // variable used to display the ordinal in a string, shortened to use less space

  if (t.id === 3 || t.id === 23) {                            // numbers EQU 3 are suffixed "rd"
    o = "rd";
  } else if (t.id === 2 || t.id === 22) {                     // numbers EQU 2 are suffixed "nd"
    o = "nd";
  } else if (t.id === 1 || t.id === 21 || t.id === 31) {      // numbers EQU 1 are suffixed "st"
    o = "st";
  }

  const strings = {                                                   // string table
    d: `${t.y}/${t.M}/${t.d}`,                                      // date (short)                 [YYYY/MM/DD]
    D: `${t.iM} ${t.d+o}, ${t.y}`,                                  // date (long)                  [Month DD{st/nd/rd/th}, YYYY]
    f: `${t.iM.substring(0, 3)} ${t.d+o}, ${t.y} ${t.h}:${t.m}`,    // full date & time (short)     [MMM DD{st/nd/rd/th}, YYYY HH:MM]
    F: `${t.iw}, ${t.iM} ${t.d+o}, ${t.y} ${t.h}:${t.m}`,           // full date & time (long)      [Weekday, Month DD{st/nd/rd/th}, YYYY HH:MM]
    p: `${t.h}:${t.m}:${t.S}.${t.s}`,                               // precise time (short)         [HH:MM:SS.sss]
    P: `${t.y}/${t.M}/${t.d} ${t.h}:${t.m}:${t.S}.${t.s}`,          // precise time (long)          [YYYY/MM/DD HH:MM:SS.sss]
    t: `${t.h}:${t.m}`,                                             // time (short)                 [HH:MM]
    T: `${t.h}:${t.m}:${t.S}`,                                      // time (long)                  [HH:MM:SS]
    w: `${t.iw.substring(0, 3)}`,                                   // weekday (short)              (e.g. Mon; Tue; Wed)
    W: `${t.iw}`                                                    // weekday (long)               (e.g. Monday; Tuesday; Wednesday)
  };

  if (flag === "d") {
    return strings.d;                                       // returns string 'd' from strings
  } else if (flag === "D") {
    return strings.D;                                       // returns string 'D' from strings
  } else if (flag === "f") {
    return strings.f;                                       // default return string 'f'
  } else if (flag === "F") {
    return strings.F;                                       // returns string 'F' from strings
  } else if (flag === "p") {
    return strings.p;                                       // returns string 'p' from strings
  } else if (flag === "P") {
    return strings.P;                                       // returns string 'P' from strings
  } else if (flag === "t") {
    return strings.t;                                       // returns string 't' from strings
  } else if (flag === "T") {
    return strings.T;                                       // returns string 'T' from strings
  } else if (flag === "w") {
    return strings.w;                                       // returns string 'w' from strings
  } else if (flag === "W") {
    return strings.W;                                       // returns string 'W' from strings
  } else {
    return strings.f                                        // default return string 'f' with incorrect parameters
  }

  return "null";                                              // standard return - intellisense (string return) - this should not be seen if code executed successfully
};

module.exports = {
  relTime,
  fullTime
};
