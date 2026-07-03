const previewEL = document.getElementById("preview-el")
const project = document.getElementById("prjct")
const headEl = document.getElementById("head")

project.addEventListener("click", function(e){ 
        if (e.target.tagName === 'A') {
            e.preventDefault()
            previewEL.innerHTML = `
                                <iframe src="${e.target.href}"></iframe>
                                `
            headEl.innerHTML = `
                                <h2>${e.target.textContent}</h2>
                                <span><a href="${e.target.href}" target="_blank"> View Project </a></span>
                                <span><a href="https://github.com/Delta-R-git/scrimba-projects/tree/main/${e.target.textContent}" target="_blank" class="repo"> Repo</a></span>
                        `
    }
})


                        

