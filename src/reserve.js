const mainDiv = document.querySelector("#content");

export default function showReserve() {
  const reserveContent = document.createElement("div");
  reserveContent.setAttribute("id", "reserve-content");

  const reserveHeader = document.createElement("h1");
  reserveHeader.textContent = "make a reservation";

  const formDiv = document.createElement("div");
  formDiv.setAttribute("id", "form-element");

  const formElement = document.createElement("form");
  formElement.setAttribute("id", "reserve-form");

  const firstNameDiv = document.createElement("div");
  firstNameDiv.setAttribute("id", "first-name");
  firstNameDiv.textContent = "First Name:";

  const firstNameInput = document.createElement("input");
  firstNameInput.setAttribute("id", "first-name-input");

  const lastNameDiv = document.createElement("div");
  lastNameDiv.setAttribute("id", "last-name");
  lastNameDiv.textContent = "Last Name:";
  const lastNameInput = document.createElement("input");
  lastNameInput.setAttribute("id", "last-name-input");

  firstNameDiv.appendChild(firstNameInput);
  lastNameDiv.appendChild(lastNameInput);

  const partyNumberDiv = document.createElement("div");
  partyNumberDiv.setAttribute("id", "party-number");
  partyNumberDiv.textContent = "Number in Your Party:";
  const partyNumberInput = document.createElement("input");
  partyNumberInput.setAttribute("type", "number");
  partyNumberInput.setAttribute("id", "number-input");
  partyNumberInput.setAttribute("min", "1");
  partyNumberInput.setAttribute("max", "15");
  partyNumberInput.setAttribute("step", "1");
  partyNumberInput.setAttribute("value", "1");
  partyNumberDiv.appendChild(partyNumberInput);

  const dateDiv = document.createElement("div");
  dateDiv.setAttribute("id", "date");
  dateDiv.textContent = "Date:";
  const dateInput = document.createElement("input");
  dateInput.setAttribute("id", "date-input");
  dateInput.setAttribute("type", "date");
  dateDiv.appendChild(dateInput);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("id", "submit-btn");
  submitBtn.textContent = "Submit";

  reserveContent.appendChild(reserveHeader);
  formElement.appendChild(firstNameDiv);
  formElement.appendChild(lastNameDiv);
  formElement.appendChild(partyNumberDiv);
  formElement.appendChild(dateDiv);
  formElement.appendChild(submitBtn);
  formDiv.appendChild(formElement);

  reserveContent.appendChild(formDiv);
  mainDiv.appendChild(reserveContent);
}
