

const phoneBook = [
    {name: 'Jacques', number: '123456789'},
    {name: 'Mitchell', number: '987654321'},
]

function renderPhoneBook() {
    let output ='<ol>';
    phoneBook.forEach((contact) => {
        output += `<li>${contact.name} - ${contact.number} </li>`
    })
    output += '</ol>'

    document.body.innerHTML = output;
}

//this is the old method of async functions (using callback). this may be useful for legacy code but otherwise isn't used now
// function saveContact(contact, callback) {
//     setTimeout(() => {
//         //let the caller know we have saved
//         callback(err, contact);
//     }, 5000)
// }


//new method of handling async functions, using "old-school" Promises (can be annoying if doing multiple saveContact())
//however, this combined with the init() function (below) is the newest way to deal with Promises in javascript
function saveContact(contact) {

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
    
            //let the promise caller know we were successful
            resolve(contact);

            //let the promise caller know we were not successful
            //reject(new Error('failed to save contact')); //only have EITHER the resolve OR reject??

        }, 5000)
    });  
}

const newContact = {
    name: 'Cam',
    number: '234762934'
};

renderPhoneBook();
////this is the call for old method (using callback)
// saveContact(newContact, (err, savedContact) => {
//    if(err) {
//      //handle the error
//    } else {
//     phoneBook.push(savedContact);
//     renderPhoneBook();
//    }

////this is the call for using "old-school" Promises
// const promise = saveContact(newContact);
//     promise.then((response) => {
//         //handle success
//         phoneBook.push(response);
//         renderPhoneBook();
//     }).catch((err) => {
//         //handle error
//         alert(err.message);
//     });



//this is the most recent way of dealing with Promises
async function init() { //async keywordd makes function return Promise
    try {
        //await the promise
        const response = await saveContact(newContact);
        //won't execute the next two lines until the above Promise is resolved, and if the Promise fails it goes straight to the catch
        phoneBook.push(response);
        renderPhoneBook();

    } catch(err) {
        //handle the error
        alert(err.message);
    }
}

init();