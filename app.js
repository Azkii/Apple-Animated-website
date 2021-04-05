import { benchmarkData } from './data.js';

const navBarBox = document.getElementById("NavBar-macBookPro16");
const benchmarkBtns = document.getElementById("benchmarkInfo_benchmarksList").querySelectorAll("button");
document.addEventListener("scroll",() => {
    const heightScroll = window.scrollY;
    if (navBarBox.offsetHeight - heightScroll > 0) {
        navBarBox.style.top = `${navBarBox.offsetHeight - heightScroll}px`;
    }
    else {
        navBarBox.style.top = 0;
        navBarBox.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    }
});
window.addEventListener("load", () => {
    displayBenchmark();
})
//functions
const displayBenchmark = () => {
    benchmarkBtns.forEach(button => {
        button.addEventListener("click", () => {
            displayBenchmark_graph(button.getAttribute("name"));
        })
    })
}
const displayBenchmark_graph = (index) => {
    const graph1 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[0];
    const graph2 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[1];

    const resultBox = document.getElementById("benchmarkInfo__results__increases");

    const resultNumber = resultBox.querySelector("h1");
    const resultInfo = resultBox.querySelector("p");

    const resultSymbol = resultNumber.querySelector("p");
    
    
}
