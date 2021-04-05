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
    displayBenchmark_graph(`1`);
})
//functions
const displayBenchmark = () => {
    benchmarkBtns.forEach(button => {
        button.addEventListener("click", () => {
//animate transition display benchmark info
            const benchamrkBoxAnimate = document.getElementById("benchmarkInfo__results");
            const graph1 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[0];
            const graph2 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[1];
            benchamrkBoxAnimate.style.opacity = 0;
        //set graph1/2 width to animate
            setTimeout(() => {
                graph1.style.width = `0px`;
                graph2.style.width = `0px`;
                displayBenchmark_graph(button.getAttribute("name"));
                benchamrkBoxAnimate.style.opacity = 1;
            },500)
        })
    })
}

const displayBenchmark_graph = (index) => {
    const data = benchmarkData.filter(data => {
        return data.id == index;
    })
//get documents from html
    const graphValue = Math.round((data[0].quadCore / data[0].eightCore)*100)/100;

    const graph1 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[0];
    const graph2 = document.querySelectorAll(".benchmarkInfo__results__graph__line")[1];

    const resultBox = document.getElementById("benchmarkInfo__results__increases");

    const resultNumber = resultBox.querySelector("h1").querySelectorAll("p")[0];
    const resultSymbol = resultBox.querySelector("h1").querySelectorAll("p")[1];
    const resultInfo = resultBox.querySelectorAll("p")[2];
//assign data/styles to documents // animate width line
    resultInfo.innerText = data[0].textInfo;
    setTimeout(() => {
        graph1.style.transition = `all 0.8s`;
        graph2.style.transition = `all 0.8s`;
        graph1.style.width = "500px";
        graph2.style.width = `${500 * graphValue}px`;
    },200)
    graph1.style.transition = ``;
    graph2.style.transition = ``;
//check if contains % or x
    if ( data[0].increse[data[0].increse.length-1] === "%" || data[0].increse[data[0].increse.length-1] === "x") {
        const increseNumber = data[0].increse.slice(0,data[0].increse.length-1)
        const symbol = data[0].increse[data[0].increse.length-1];

        resultNumber.innerText = increseNumber;
        resultSymbol.innerText = symbol;
    }
    else {
        resultNumber.innerText = data[0].increse;
        resultSymbol.innerText = "";
    }

    benchmarkBtnColorHandler(index);
}

const benchmarkBtnColorHandler = (clickedButton) => {
    benchmarkBtns.forEach(button => {
        (button.getAttribute("name") === clickedButton) ? 
            button.style.color = "black"
            : 
            button.style.color = "rgba(0, 0, 0, 0.4)"
    })
};
