


const headings = document.querySelectorAll("h1");
headings.forEach(h1 => {

  h1.onclick = (e) => {
    console.log(`click`);
    const target = e.target;

    target.nextElementSibling.hidden = !target.nextElementSibling.hidden;

  };
})
  
