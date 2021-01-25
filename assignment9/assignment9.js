"use strict"
//Assignment 9 Part A:

const john = {
    firstName: "John",
    lastName: "Williams",
    birthYear: 1996,
    job: "student",
    friends: ["Mike", "Jack", "Peter"],
    licenseOrNo: true,
    calAge: function (birthYear) {
        this.age = 2021 - this.birthYear
        return this.age
    },
    license: function (licenseOrNo) {
        if (true) {
            return "a"
        }
        else {
            return "no"
        }
    },
    getSummary: function (firstName, age, license) {
        return ` ${this.firstName} is ${parseFloat(this.calAge(this.birthYear))} years old, and he has ${this.license(this.licenseOrNo)} driver's license.`

    }
};
console.log(john.getSummary());



const modal = document.querySelector(".modal");
const btnOpen = document.querySelectorAll("#show-modal");
const btnClose = document.querySelector("#modal_contents_button")

const open = function () {
    modal.classList.remove("modal--hidden");
};

const close = function () {
    modal.classList.add("modal--hidden");
};

for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', open);
    btnClose.addEventListener('click', close);
};





