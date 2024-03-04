//  click banner section buy-ticket btn,then show seat section 
 const bannerSectionBtn = document.getElementById('buy-ticket').addEventListener('click',function(){
    const element = document.getElementById('R-details');
    element.scrollIntoView();
    console.log('hi i am');
 })

// sellect seat and left seat number 
const selectSeat = document.getElementById('seats-num-select');
const seatLeft = document.getElementById('seat-left');
const selectTotalSeat = document.getElementById('select-seat-counte');
const seatSelectId = selectSeat.querySelectorAll('h1');
let seat_left =24;
let total_price = 0;
let grand_total = 0;
let max_select = 1;
let dis_price = 0;
let selectSeatCount = 0;

for(let i=0;i<seatSelectId.length;i++){
    let f = 0;
    const item = seatSelectId[i];
    item.addEventListener('click',function(){
        if(max_select <= 4)
        {
            item.style.backgroundColor = '#1DD100';
            // if(f==1)
            // { 
            //     selectSeatCount = selectSeatCount;
            //     seat_left = seat_left;

            // }
            if(f==0)
            {   
                // seat name 
                selectTotalSeat.innerText = ++selectSeatCount
                seatLeft.innerText = --seat_left;
                const showSeatDetails = document.getElementById('show-seat-details');
                const newSection = document.createElement('div');
                const p = document.createElement('p');
                p.innerText = item.innerText;
                showSeatDetails.appendChild(newSection);
                newSection.appendChild(p);

                // Economy
                const newSection2 = document.createElement('div');
                const p2 = document.createElement('p');
                p2.innerText = 'Economy';
                showSeatDetails.appendChild(newSection2);
                newSection2.appendChild(p2);

                // add 550 tk
                const newSection3 = document.createElement('div');
                const p3 = document.createElement('p');
                p3.innerText = '550';
                showSeatDetails.appendChild(newSection3);
                newSection3.appendChild(p3);

                //  3 div into parente div then flex parente div 
                const parenteSection = document.createElement('div');
                showSeatDetails.appendChild(parenteSection);
                parenteSection.appendChild(newSection);
                parenteSection.appendChild(newSection2);
                parenteSection.appendChild(newSection3);
                parenteSection.classList.add('flex');
                parenteSection.classList.add('justify-between');

                // total prise 
                const totalPriceId = document.getElementById('total-price');
                total_price = selectSeatCount * 550;
                totalPriceId.innerText = total_price;

                // 
                const grandTotalId = document.getElementById('grand-total');
                grand_total = total_price - dis_price ;
                grandTotalId.innerText = grand_total;
                f=1;
            }
            max_select++;
        }
        else {
            alert('You cannot select more than 4 seats!');
        }
    })
}
//  coupon code add 
const coupneBtn = document.getElementById('coupon-btn').addEventListener('click',function(){
    const element =  document.getElementById('input').value;
     if(total_price >= (4*550))
     {
        if(element == 'NEW15')
        {
           const hideBtn =  document.getElementById('coupon-container');
           hideBtn.classList.add('hidden');
           //    discount-div 
           const disPrise = document.getElementById('discount-price'); 
           const disP = total_price * 0.15;
           disPrise.innerText = disP;
           
           const disDiv = document.getElementById('discount-div');
           disDiv.classList.add('block');
           disDiv.classList.remove('hidden');

           const grandTotal = document.getElementById('grand-total');
           grand_total = total_price - disP;
           grandTotal.innerText = grand_total;
        }
        else if(element == 'Couple 20')
        {
           const hideBtn =  document.getElementById('coupon-container');
           hideBtn.classList.add('hidden');
           //    discount-div 
           const disPrise = document.getElementById('discount-price'); 
           const disP = total_price * 0.20;
           disPrise.innerText = disP;
           
           const disDiv = document.getElementById('discount-div');
           disDiv.classList.add('block');
           disDiv.classList.remove('hidden');

           const grandTotal = document.getElementById('grand-total');
           grand_total = total_price - disP;
           grandTotal.innerText = grand_total;
        }
        else
        {
            alert('Invalid Coupne Code Apply !');
            document.getElementById('input').value = '';
        }
     }

     else
     {
        alert('At least 4 seats select !');
        document.getElementById('input').value = '';
     }
})





