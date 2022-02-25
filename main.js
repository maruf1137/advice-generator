const adviceBtn = document.querySelector(".advice-btn");
const adviceId = document.querySelector(".advice-id");
const adviceIText = document.querySelector(".advice-text");

const advice = () => {
  const fetchData = async function () {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();

    adviceId.innerHTML = `#${slip.id}`;
    adviceIText.innerHTML = ` ${slip.advice}`;
  };
  fetchData();
};

advice();
adviceBtn.addEventListener("click", advice);
