const prevBtn = document.querySelectorAll(".btn-prev");
const nexBtn = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progSteps = document.querySelectorAll(".progress-step");
const forms = document.getElementById("form");

const firstBtn = document.getElementById("first-page");
const secondBtn = document.getElementById("second-page");
const thirdBtn = document.getElementById("third-page");

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const ffname = document.getElementById("father-fname");
const flname = document.getElementById("father-lname");
const mfname = document.getElementById("mother-fname");
const mlname = document.getElementById("mother-lname");
const nation = document.getElementById("nation");
const street = document.getElementById("street");
const city = document.getElementById("city");
const country = document.getElementById("country");
const hphone = document.getElementById("h-phone");
const mphone = document.getElementById("mobile");

const instname = document.getElementById("inst-name");
const hscb = document.getElementById("hsc-board");
const hscs = document.getElementById("hsc-score");
const sscin = document.getElementById("ssc-inst-name");
const sscb = document.getElementById("ssc-board");
const sscs = document.getElementById("ssc-score");
const cure = document.getElementById("current-edu");
const curei = document.getElementById("current-edu-inst");
const totper = document.getElementById("total-perc");
const back = document.getElementById("backlog");

const pspimg = document.getElementById("passport-image");
const hscmrimg = document.getElementById("hsc-mark-img");
const sscmrimg = document.getElementById("ssc-mark-img");
const semimg = document.getElementById("sem-img");

let formStepNum = 0;
let userDetailsObj = {};
let userEduObj = {};
let userDocObj = {};

// nexBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     validateInputs();
//   });
// });

firstBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateInputs();
});

secondBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateSecondInputs();
});

thirdBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateThirdInput();
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepNum--;
    updateFormSteps();
    updateProgressStep();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("active") &&
      formStep.classList.remove("active");
  });
  formSteps[formStepNum].classList.add("active");
}

function updateProgressStep() {
  progSteps.forEach((prog, idx) => {
    if (idx < formStepNum + 1) {
      prog.classList.add("active");
    } else {
      prog.classList.remove("active");
    }
  });

  const progActive = document.querySelectorAll(".progress-step.active");
  progress.style.width =
    ((progActive.length - 1) / (progSteps.length - 1)) * 100 + "%";
}

const setError = (element, message) => {
  let inputgroup;
  if (element.name === "fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "father-fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "father-lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "mother-fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "mother-lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "street") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "city") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "country") {
    inputgroup = element.parentElement.parentElement;
  } else {
    inputgroup = element.parentElement;
  }
  const errorShow = inputgroup.querySelector(".error");

  errorShow.innerText = message;
  element.classList.add("input-error");
  element.classList.remove("success");
};

const setSuccess = (element) => {
  let inputgroup;
  if (element.name === "fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "father-fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "father-lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "mother-fname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "mother-lname") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "street") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "city") {
    inputgroup = element.parentElement.parentElement;
  } else if (element.name === "country") {
    inputgroup = element.parentElement.parentElement;
  } else {
    inputgroup = element.parentElement;
  }
  const errorShow = inputgroup.querySelector(".error");

  errorShow.innerText = "";
  element.classList.add("input-success");
  element.classList.remove("input-error");
};

const validateInputs = () => {
  const fnv = fname.value.trim();
  const lnv = lname.value.trim();
  const dobv = dob.value.trim();
  const emailv = email.value.trim();
  const ffnv = ffname.value.trim();
  const flnv = flname.value.trim();
  const mfnv = mfname.value.trim();
  const mlnv = mlname.value.trim();
  const nv = nation.value.trim();
  const sv = street.value.trim();
  const cv = city.value.trim();
  const countryv = country.value.trim();
  const hpv = hphone.value.trim();
  const mpv = mphone.value.trim();

  if (fnv === "") {
    setError(fname, "First name is required");
  } else {
    setSuccess(fname);
  }
  if (lnv === "") {
    setError(lname, "Last name is required");
  } else {
    setSuccess(lname);
  }
  if (dobv === "") {
    setError(dob, "DOB is required");
  } else {
    setSuccess(dob);
  }
  if (emailv === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }
  if (ffnv === "") {
    setError(ffname, "Fathers first name is required");
  } else {
    setSuccess(ffname);
  }
  if (flnv === "") {
    setError(flname, "Fathers last name is required");
  } else {
    setSuccess(flname);
  }
  if (mfnv === "") {
    setError(mfname, "Mothers first name is required");
  } else {
    setSuccess(mfname);
  }
  if (mlnv === "") {
    setError(mlname, "Mothers last name is required");
  } else {
    setSuccess(mlname);
  }
  if (nv === "") {
    setError(nation, "Nation is required");
  } else {
    setSuccess(nation);
  }
  if (sv === "") {
    setError(street, "");
  } else {
    setSuccess(street);
  }
  if (cv === "") {
    setError(city, "");
  } else {
    setSuccess(city);
  }
  if (countryv === "") {
    setError(country, "Address is required");
  } else {
    setSuccess(country);
  }
  if (mpv === "") {
    setError(mphone, "Mobile no is required");
  } else {
    setSuccess(mphone);
  }
  if (
    fnv &&
    lnv &&
    dobv &&
    emailv &&
    ffnv &&
    flnv &&
    mfnv &&
    mlnv &&
    nv &&
    sv &&
    cv &&
    countryv &&
    mpv
  ) {
    userDetailsObj={
      name: fnv + lnv,
      dateOfBirth: dobv,
      email: emailv,
      fathersName: ffnv + flnv,
      mothersName: mfnv + mlnv,
      nationality: nv,
      address: sv + cv + countryv,
      contactNo: mpv
    }
    window.localStorage.setItem("register-user", JSON.stringify(userDetailsObj))
    formStepNum++;
    updateFormSteps();
    updateProgressStep();
  }
};

const validateSecondInputs = () => {
  const instnamev = instname.value.trim();
  const hscbv = hscb.value.trim();
  const hscsv = hscs.value.trim();
  const sscinv = sscin.value.trim();
  const sscbv = sscb.value.trim();
  const sscsv = sscs.value.trim();
  const curev = cure.value.trim();
  const cureiv = curei.value.trim();
  const totperv = totper.value.trim();
  const backv = back.value.trim();

  if (instnamev === "") {
    setError(instname, "Institute name is required");
  } else {
    setSuccess(instname);
  }
  if (hscbv === "") {
    setError(hscb, "HSC board is required");
  } else {
    setSuccess(hscb);
  }
  if (hscsv === "") {
    setError(hscs, "HSC score is required");
  } else {
    setSuccess(hscs);
  }
  if (sscinv === "") {
    setError(sscin, "SSC insitute name is required");
  } else {
    setSuccess(sscin);
  }
  if (sscbv === "") {
    setError(sscb, "SSC board is required");
  } else {
    setSuccess(sscb);
  }
  if (sscsv === "") {
    setError(sscs, "SSC score is required");
  } else {
    setSuccess(sscs);
  }
  if (curev === "") {
    setError(cure, "Current education is requires");
  } else {
    setSuccess(cure);
  }
  if (cureiv === "") {
    setError(curei, "Current education institute is required");
  } else {
    setSuccess(curei);
  }
  if (totperv === "") {
    setError(totper, "Percentage is requires");
  } else {
    setSuccess(totper);
  }
  if (backv === "") {
    setError(back, "Backlog is requires");
  } else {
    setSuccess(back);
  }

  if (
    instnamev &&
    hscbv &&
    hscsv &&
    sscinv &&
    sscbv &&
    sscsv &&
    curev &&
    cureiv &&
    totperv &&
    backv
  ) {
    userEduObj = {
      instituteName: instnamev,
      hscBoard: hscbv,
      hscScore: hscsv,
      sscInstituteName: sscinv,
      sscBoard: sscbv,
      sscScore: sscsv,
      currentEdu: curev,
      currentEduInstituteName: cureiv,
      totalPercentage: totperv,
      backlog: backv
    }
    window.localStorage.setItem("register-user", JSON.stringify({...userDetailsObj, userEduObj}))
    formStepNum++;
    updateFormSteps();
    updateProgressStep();
  }
};

const validateThirdInput = () => {
  const pimgv = pspimg.value.trim();
  const hscmrimgv = hscmrimg.value.trim();
  const sscmrimgv = sscmrimg.value.trim();
  const semimgv = pspimg.value.trim();

  if (pimgv === "") {
    setError(pspimg, "Passport image is required");
  } else {
    setSuccess(pspimg);
  }
  if (hscmrimgv === "") {
    setError(hscmrimg, "HSC marksheet image is required");
  } else {
    setSuccess(hscmrimg);
  }
  if (sscmrimgv === "") {
    setError(sscmrimg, "SSC marksheet image is required");
  } else {
    setSuccess(sscmrimg);
  }
  if (pimgv && hscmrimgv && sscmrimgv) {
    forms.submit()
    userDocObj = {
      passportImage: pimgv,
      hscimage: hscmrimgv,
      sscimage: sscmrimgv,
      semesterimg: semimgv
    }
    window.localStorage.setItem("register-user", JSON.stringify({...userEduObj, userDocObj}))
  }
};
