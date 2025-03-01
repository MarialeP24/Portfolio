console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// step 2
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

let repoName = "/Portfolio"; // Your GitHub Pages repo name

let pages = [
	{url: "/", title: "Home"},
	{url: "/projects/", title: "Projects"},
    {url: "/contact/", title: "Contact"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = repoName + p.url; // Always prepend the repo name

	let a = document.createElement("a");
    a.href = url;
    a.textContent = p.title;

    // Highlight the current page link
    if (location.pathname === url || location.pathname === url + "index.html") {
        a.classList.add("current");
    }

    nav.append(a);
}

document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="light dark">Auto</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
		</select>
	</label>`
)

let select = document.querySelector("select");

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);
    document.documentElement.style.setProperty("color-scheme", event.target.value);
    localStorage.colorScheme = event.target.value;
});

if ("colorScheme" in localStorage) {
    // set color schemee to the stored local value
    document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
    select.value = localStorage.colorScheme;
}

// STEP 5 (OPTIONAL)
// Note: This is an optional part of the lab! If you want to do it, uncomment the lines below and fill in the TODOs. Otherwise, leave the lines commented out.

// TODO: Inside the /contact/index.html, remove the enctype and method attributes from the <form> element. Remove the "Email" label and input as well.

// TODO: uncomment below to select the form element!
// let form = document.querySelector("form");

// form?.addEventListener("TODO: FILL IN EVENT WE ARE WAITING FOR", function (event) {
//     event.preventDefault();
//     let data = new FormData(form);

    // let url = form.action + "?";
    // for (let [name, value] of data) {
	//     url += (name + "=" + value + "&")
	//     console.log(name, value);
    // }

        // TODO: open url here!
// })

