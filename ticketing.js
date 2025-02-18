function buy() {
    hideElementById('header');
    hideElementById('coupon');
    showElementById('main');

}

function selectSeat(div) {
    // get id to clicking seat
    const divId = div.id;

    // set background
    addBackgroundById(divId);

    // set seatLeft button
    const leftSeat = getElement('seatLeft')
    const currentSeat = leftSeat.innerText
    leftSeat.innerText = currentSeat - 1;

    // set selected seat
    const selectedSeat = getElement('selected-seat');
    const currentSelectedSeat = selectedSeat.innerText;
    selectedSeat.innerText = parseInt(currentSelectedSeat) + 1;

    const selectedSeatInnerText = selectedSeat.innerText;

    //------------ create selected seats name,price,type---------------------
    const newDiv = document.createElement('div');
    newDiv.classList.add('flex', 'justify-around');
    // create some childs
    const h5 = document.createElement('h5');
    h5.classList.add('text-sm', 'font-bold', 'text-lime-400');
    h5.innerText = divId;
    newDiv.appendChild(h5);

    const h2 = document.createElement('h5');
    h2.classList.add('text-sm', 'font-bold', 'text-lime-400');
    h2.innerText = 'Economy';
    newDiv.appendChild(h2);

    const h1 = document.createElement('h5');
    h1.classList.add('text-sm', 'font-bold', 'text-lime-400');
    h1.innerText = '550';
    newDiv.appendChild(h1);

    // newDiv set in the parent
    const blankDiv = getElement('blank-div');
    blankDiv.appendChild(newDiv);

    // -----------------------total price--------------------------
    const totalPrice = getElement('total-price');
    const totalPriceText = totalPrice.innerText;
    totalPrice.innerText = parseInt(totalPriceText) + 550;
    let total = totalPrice.innerText;

    // stoping multiple clicking
    getElement(divId).onclick = null;

    // stopping clicking when selected is more than 4
    if(selectedSeatInnerText > 4){
        
    }

    // coupon code applying
    getElement('apply-btn').addEventListener('click', function () {
        // get that coupon
        const new15Coupon = getElement('new15-coupon').innerText;
        const coupleCoupon = getElement('couple-coupon').innerText;
        // get the value from input field
        const couponInput = getElement('coupon-input').value;

        if (couponInput === new15Coupon) {
            const totalDiscountfloat1 = total * (15 / 100);
            const totalDiscount1 = parseInt(totalDiscountfloat1);
            // set the discountPrice
            getElement('discount-price').innerText = totalDiscount1;
            getElement('grand-total-price').innerText = total - totalDiscount1;
        }
        else if (couponInput === coupleCoupon) {
            const totalDiscountfloat2 = total * (20 / 100);
            const totalDiscount2 = parseInt(totalDiscountfloat2);
            // set the discountPrice
            getElement('discount-price').innerText = totalDiscount2;
            getElement('grand-total-price').innerText = total - totalDiscount2;
        }
    })


    // get the passenger information
    getElement('next-btn').addEventListener('click', function(){
        let passengerName = getElement('passenger-name').value;
        let passengerNumber = parseInt(getElement('passenger-number').value);
        let passengerEmail = getElement('passenger-email').value;
        
        if(typeof passengerName === 'string' && typeof passengerNumber === 'number' && typeof passengerEmail === 'string'){
            hideElementById('seat-selection')
            showElementById('success')

        }
    })



}



