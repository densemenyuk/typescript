
 const UserData = []


// document.getElementById('button')?.onclick = save;

function save() {
    const name: string = ((document.getElementById('name') as HTMLInputElement)?.value);
    const surname: string  = ((document.getElementById('surname') as HTMLInputElement)?.value);
    const age: string = ((document.getElementById('age') as HTMLInputElement)?.value);
    const street: string = ((document.getElementById('street') as HTMLInputElement)?.value);
    const city: string = ((document.getElementById('city') as HTMLInputElement)?.value);
    const profession: string = ((document.getElementById('profession') as HTMLInputElement)?.value);

    let myObj = {
        name,
        surname,
        age,
        street,
        city,
        profession
    };

    UserData.push(myObj);

    console.log('Полученный объект данных', myObj);
    console.log('Полученный массив данных', UserData);

    // to do
    // Очистить все поля от их значений (найти инфу об очистке полей формы)
    const v = document.getElementById("myForm") as HTMLFormElement;
    v.reset();
}

function names() {
    for (let i = 0; i < UserData.length; i++) {
        console.log(UserData[i].name)
    }
}





