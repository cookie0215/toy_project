/* 내비게이션 메뉴 버튼 클릭 시 */
const menuBtns = document.querySelectorAll('nav li');

menuBtns.forEach(menuBtn => {
  menuBtn.addEventListener('click', e => {
    e.preventDefault();
    for(let menuBtn of menuBtns) {
      menuBtn.classList.remove('on');
    }
    
    menuBtn.classList.add('on');
  });
})



fetch(
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211222T124901Z&X-Amz-Expires=86400&X-Amz-Signature=9a33b3909afae7fbd8fd30dcedbb8e78261d3ec5bae1c9a2f5e51097f195c467&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject"
)

.then((res) => res.json())
.then((obj) => {
  start(obj.bankList);
});


function start(obj){
  const app = document.getElementById('app');
  const usageHistory = app.querySelector('.usage-history');
  const dailyUsage = document.createElement('div');
  const dailyUsageWrap = document.createElement('div');
  
  dailyUsage.classList.add('daily-usage');
  dailyUsageWrap.classList.add('daily-usage-wrap');

  usageHistory.appendChild(dailyUsage);
  dailyUsage.appendChild(dailyUsageWrap);
  
  // ul 과 li 만들기
  const usageLists = document.createElement('ul');
  usageLists.classList.add('usage-list');
  dailyUsageWrap.appendChild(usageLists);
  
  for(let i = 0; i <= obj.length - 1; i++){
    const usageLi = document.createElement('li');
    const usageTitle = document.createElement('span');
    const usageCost = document.createElement('span');
    
    usageTitle.classList.add('title');
    usageCost.classList.add('cost');

    usageTitle.textContent = obj[i].history;
    usageCost.textContent = obj[i].price;


    usageLists.appendChild(usageLi);
    usageLi.appendChild(usageCost);
    usageLi.insertBefore(usageTitle, usageCost);
  }


  /* 날짜 불러오기 */
  const dateAmount = document.createElement('div');
  for(let i = 0; i < obj.length - 1; i++){
    let date = obj[i].date;
    console.log(date);
  }

  const dateEl = document.createElement('span');
  const amountEl = document.createElement('span');

  dateEl.classList.add('date');
  amountEl.classList.add('amount');

  dailyUsageWrap.appendChild(dateAmount);
  dateAmount.appendChild(amountEl);
  dateAmount.insertBefore(dateEl, amountEl);




  // const month = date[date.length - 1];
  // console.log(month);

  // if(month === ){}

  
}
