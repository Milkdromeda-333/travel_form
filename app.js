const myForm = document.myForm;

document.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = myForm.firstName.value;
    const lastName = myForm.lastName.value;
    const age = myForm.age.value;

    let genderOptions = myForm.gender;
    let gender;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            gender = genderOptions[i].value;
        };
    }

    let select = myForm.getElementsByTagName("select")[0];
    const destinationIndex = select.selectedIndex;
    const destination = select.options[destinationIndex].value;

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nDestination: ${destination}`);



});
