const signupFormHandler = async (event) => {
  
  event.preventDefault();

  const username = document.querySelector("#username-input-signup").value.trim();
  // const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-input-signup").value.trim();

  if (username && password) {
    console.log({username}, {password})
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);