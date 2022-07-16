window.addEventListener('load', () => {
  var child = document.createElement('div');
  child.innerHTML = '<div class="common__ModalWrapper-sc-17xm8t3-1 hdGTtK"><div><div class="ContactUs-sc-4iugqb-0 kfuWHE"><div class="ContactUs__Header-sc-4iugqb-1 hiAsUu"><div class="ContactUs__Title-sc-4iugqb-2 lgleQi">Contact Us</div><button class="ContactUs__CloseButton-sc-4iugqb-3 coqlKX">X</button></div><form class="ContactUs__ContactUsForm-sc-4iugqb-4 nxSYE"><input aria-label="Name" id="name" type="text" placeholder="Name *" required="" class="ContactUs__Input-sc-4iugqb-5 ContactUs__NameInput-sc-4iugqb-6 kpnmiL"><input aria-label="Email" id="email" type="email" placeholder="Email *" required="" class="ContactUs__Input-sc-4iugqb-5 ContactUs__EmailInput-sc-4iugqb-7 hbXott"><input aria-label="Mobile" id="mobile" type="tel" placeholder="Mobile Number" class="ContactUs__Input-sc-4iugqb-5 ContactUs__MobileInput-sc-4iugqb-8 fBiKXy"><input aria-label="Organization" id="org" type="text" placeholder="Organization *" required="" class="ContactUs__Input-sc-4iugqb-5 ContactUs__OrganizationInput-sc-4iugqb-9 kFiGPI"><button class="common__Button-sc-17xm8t3-0 eXrWzl">Submit</button></form></div></div></div>';
  child = child.firstChild;
  document.getElementById('body').appendChild(child);
})

