/** @format */

let dataList = [
  {
    img: "./img/head1.png",
    time: "3個月前",
    desc: "能夠加入莫博士投資理財社群是一件很幸運又很幸福的事！加入以前，投資，對我來說是一件很遙遠的事。直到加入莫博士投資理財社群才發現，投資其費可以是生活的一部分。從日常用品、食品飲料品牌、手機、網路平台這些我們每日生活都會接觸到有形或無形的商品，背後可能都是一家家好公司。從研究這些公司開始，找出持續賺錢的好公司，就是開啟投資的第一步",
    name: "Hjh*****",
  },
  {
    img: "./img/head2.png",
    time: "2個月前",
    desc: "莫博士投資理財社群的培訓師擅長用淺白的文字講述深奥的投資道理。從投資的概念、如何評斷好公司、如何看公司的財報、年報到如何開戶、匯款等，都可以在這裡學到滿滿的知識。透過手把手的教學，讓即使是新手的我，也可以慢慢開始一步步地開始理財、逐漸累積自己的財富。",
    name: "開***3",
  },
  {
    img: "./img/head3.png",
    time: "1個月前",
    desc: "加入line群，并且學完價值投資課程後，感到非常滿足，有問必答，一種只要你肯努力，莫博士投資理財社群所有人都會幫你的甘心路線",
    name: "熱**3",
  },
  {
    img: "./img/head4.png",
    time: "1個月前",
    desc: "自己的投資觀念一直是游走在投資與投機之間，所以總是無法累積財富，直到朋友介紹到莫博士投資理財社群後，才真正了解正確價值投資的重要性，也學習到知足感恩及樂於給予，感謝講師苦口婆心，不厭其煩的教導及碎碎唸的叮嚀，真心誠擊的推薦給大家，真的是一個很棒的學習聖地",
    name: "大水***2",
  },
];
let Evaluation = document.querySelector(".mainEvaluation");
let str = "";
for (let i = 0; i < dataList.length; i++) {
  dataList[i];
  str += `<div class="item">
	<div class="leftHead">
		<img src="${dataList[i].img}" alt="" srcset="" />
	</div>
	<div class="rightContent">
		<p class="name">${dataList[i].name}</p>
		<p class="oneEval">1則評論</p>
		<p class="starBox">
			<img src="./img/star.png" alt="" />
			<img src="./img/star.png" alt="" />
			<img src="./img/star.png" alt="" />
			<img src="./img/star.png" alt="" />
			<img src="./img/star.png" alt="" />
			<span class="time oneEval">${dataList[i].time}</span>
		</p>
		<p class="desc">${dataList[i].desc}</p>
	</div>
</div>`;
}
Evaluation.innerHTML = str;
