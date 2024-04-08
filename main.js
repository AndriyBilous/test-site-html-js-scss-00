const slider = document.querySelector("#slider");
const sliderLeftButton = document.querySelector("#slider_button_left");
const sliderRightButton = document.querySelector("#slider_button_right");
const currentSlider = document.querySelector("#current_slider");
const totalSliders = document.querySelector("#total_sliders");

// ----------------- SLIDER -------------------

// Data for slider
const images = ["building-slider_00.jpg", "projects_02.svg", "projects_00.svg"];

const imgAlts = ["slider_00", "slider_01", "slider_02"];

totalSliders.innerHTML = `0${images.length}`;

// slider id
let id = 0;

// slider function
function slide(id) {
  // set img
  slider.src = `./img/${images[id]}`;

  // add image fade animation

  slider.classList.add("image-fade");

  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
}

// add event listener to right arrow
sliderRightButton.addEventListener("click", () => {
  id++;

  if (id === images.length) {
    id = 0;
  }

  currentSlider.innerHTML = `0${id + 1}`;

  slide(id);
});

// add event listener to left arrow
sliderLeftButton.addEventListener("click", () => {
  id--;

  if (id < 0) {
    id = images.length - 1;
  }

  currentSlider.innerHTML = `0${id + 1}`;

  slide(id);
});

// ---------------- CONTACT ------------------

const form = document.getElementById("contact-form");
const formSubmitButton = document.getElementById("contact-form__submit");
const inputFields = document.querySelectorAll(".input");

// creating validation rules for a form submitting
function validation(form) {
  // creating function for a removing error classes
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains("error")) {
      parent.querySelector(".error-label").remove();
      parent.classList.remove("error");
    }
  }

  // creating function for adding error classes
  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label");

    errorLabel.classList.add("error-label");
    errorLabel.textContent = text;

    parent.classList.add("error");

    parent.append(errorLabel);
  }

  let result = true;

  // add verification for input filling => for a form submitting
  form.querySelectorAll(".input").forEach((input) => {
    removeError(input);
    console.log(input);

    if (input.dataset.maxLength) {
      if (input.value.length > Number(input.dataset.maxLength)) {
        result = false;
        createError(
          input,
          `Максимальное к-во символов ${input.dataset.maxLength}`
        );
      }
    }

    if (input.dataset.required === "true" && input.value === "") {
      result = false;
      createError(input, "Поле не заполнено");
    }
  });

  return result;
}

// add event listener for a form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  if (validation(form) === true) {
    alert("Форма отправлена успешно!");
  }
});

// add verification for filling in inputs => for a placeholder hiding
inputFields.forEach((input) => {
  input.oninput = () => {
    console.log(input.value);
    if (input.value.length > 0) {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  };
});

// add event listener for filling in inputs => for a placeholder hiding
inputFields.addEventListener("change input", () => {});
