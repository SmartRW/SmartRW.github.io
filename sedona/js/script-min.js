let booking=document.querySelector('.booking'),openBooking=document.querySelector('.open-form-button'),adults=document.querySelector('#booking-adults'),children=document.querySelector('#booking-children'),addAdults=document.querySelector('.input-adults .residents-number-add'),reduceAdults=document.querySelector('.input-adults .residents-number-reduce'),addChildren=document.querySelector('.input-children .residents-number-add'),reduceChildren=document.querySelector('.input-children .residents-number-reduce');booking.classList.add('booking-popup'),openBooking.addEventListener('click',function(a){a.preventDefault(),booking.classList.toggle('booking-popup')}),addAdults.addEventListener('click',function(a){a.preventDefault(),adults.value=99>parseInt(adults.value)?parseInt(adults.value)+1:99}),reduceAdults.addEventListener('click',function(a){a.preventDefault(),adults.value=1<parseInt(adults.value)?parseInt(adults.value)-1:1}),addChildren.addEventListener('click',function(a){a.preventDefault(),children.value=99>parseInt(children.value)?parseInt(children.value)+1:99}),reduceChildren.addEventListener('click',function(a){a.preventDefault(),children.value=0<parseInt(children.value)?parseInt(children.value)-1:0});
