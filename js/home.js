// our mission modal
document.getElementById("mission").addEventListener("click", function () {
  Swal.fire({
    title: '<span class="text-SlateBlue" style="font-size:clamp(18px, 2vw, 30px)">Why Mathematics Site?</span>',
    html: '<p class="text-justify text-lg text-DarkBlue" style="font-size:clamp(12px, 2vw, 18px)"> At Mathematics, our mission is to provide quality resources and tools for students, educators, and professionals in the field of mathematics. We believe that everyone should have access to reliable and accurate information to help them succeed in their academic and professional pursuits.</p><br/><p class="text-justify text-lg text-DarkBlue" style="font-size:clamp(12px, 2vw, 18px)">Our website offers a range of resources and tools to support your learning and problem-solving needs. Our calculators and engineering calculators are designed to help you perform calculations quickly and accurately. Our foundation section provides a solid grounding in the fundamental concepts of mathematics, while our matrics section offers advanced topics for those seeking to deepen their understanding.</p><br/><p class="text-justify text-lg text-DarkBlue" style="font-size:clamp(12px, 2vw, 18px)"> We also offer a range of resources for visualizing mathematical concepts, including tools for drawing lines and plotting graphs. And for those interested in more advanced topics, we offer resources on d operator math and other complex topics.</p><br/><p class="text-justify text-lg text-DarkBlue" style="font-size:clamp(12px, 2vw, 18px)">Our goal is to make mathematics accessible and engaging for everyone. Whether you are a student just starting out or a seasoned professional, we are here to support you on your journey.</p>',
    showCloseButton: true,
    showConfirmButton: false,
    width:'66%',
    background: "#FEF5AC",
    backdrop: "rgba(151,210,236,0.4)",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});

// select sections modal
const modalButton = document.getElementById('modal-button');

modalButton.addEventListener('click', function() {
  Swal.fire({
    title: '<span class="text-SlateBlue">go to...</span>',
    html: '<form action="/action_page.php" class="bg-SlateBlue rounded-md p-1 inline-block mb-2"><input type="text" placeholder="Search..." name="search" class="bg-SlateBlue placeholder-DarkBlue border-2 border-DarkBlue !important"/><button type="submit" class="p-2 text-SlateBlue m-2 !important" style="border-left:2px solid white;" onmouseover="this.style.color=\'#FCE5CD\'" onmouseout="this.style.color=\'#5F6F94\'"  onfocus="this.style.color=\'white\'">find!</button></form><div><ul style="margin-top:16px"><li class="mt-2 p-2" style="margin-top:8px; background-color: #FFF" onmouseover="this.style.backgroundColor=\'#FFF5D7\'" onmouseout="this.style.backgroundColor=\'#FFF\'"><a href="./calc.html" class="m-1 p-2 text-SlateBlue">calculator</a></li><li class="mt-2 p-2" style="margin-top:8px; background-color: #FFF" onmouseover="this.style.backgroundColor=\'#FFF5D7\'" onmouseout="this.style.backgroundColor=\'#FFF\'"><a href="#" class="m-1 p-2 text-SlateBlue">matrices</a></li><li class="mt-2 p-2" style="margin-top:8px; background-color: #FFF" onmouseover="this.style.backgroundColor=\'#FFF5D7\'" onmouseout="this.style.backgroundColor=\'#FFF\'"><a href="#" class="m-1 p-2 text-SlateBlue">equation</a></li><li class="mt-2 p-2" style="margin-top:8px; background-color: #FFF" onmouseover="this.style.backgroundColor=\'#FFF5D7\'" onmouseout="this.style.backgroundColor=\'#FFF\'"><a href="#" class="m-1 p-2 text-SlateBlue">line</a></li><li class="mt-2 p-2" style="margin-top:8px; background-color: #FFF" onmouseover="this.style.backgroundColor=\'#FFF5D7\'" onmouseout="this.style.backgroundColor=\'#FFF\'"><a href="#" class="m-1 p-2 text-SlateBlue">list</a></li></ul></div>',
    background: "#25316D",
    backdrop: "rgba(151,210,236,0.4)",
    showConfirmButton: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    onOpen: function() {
      const closeButton = Swal.getPopup().querySelector('#modal-close');
      closeButton.addEventListener('click', function() {
        Swal.close();
      });
    }
  });
});


