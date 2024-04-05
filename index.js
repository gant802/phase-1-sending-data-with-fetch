// Add your code here

function submitData(userName, userEmail) {
    const formData = {
        name: `${userName}`,
        email: `${userEmail}`
    }
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    })
        .then((res) => res.json())
        .then((userObj) => {
            return document.body.innerHTML = userObj.id
        })
        .catch((error) => {
            alert("Error! Failed POST Request!")
            return document.body.innerHTML = error
          })
}

