document.getElementById('mission').addEventListener('click', function() {
    Swal.fire({
      title: '<span class="text-SlateBlue">Why Mathematics Site?</span>',
      html:'<p class="text-justify text-lg text-DarkBlue"> At Mathematics, our mission is to provide quality resources and tools for students, educators, and professionals in the field of mathematics. We believe that everyone should have access to reliable and accurate information to help them succeed in their academic and professional pursuits.</p><br/><p class="text-justify text-lg text-DarkBlue">Our website offers a range of resources and tools to support your learning and problem-solving needs. Our calculators and engineering calculators are designed to help you perform calculations quickly and accurately. Our foundation section provides a solid grounding in the fundamental concepts of mathematics, while our matrics section offers advanced topics for those seeking to deepen their understanding.</p><br/><p class="text-justify text-lg text-DarkBlue"> We also offer a range of resources for visualizing mathematical concepts, including tools for drawing lines and plotting graphs. And for those interested in more advanced topics, we offer resources on d operator math and other complex topics.</p><br/><p class="text-justify text-lg text-DarkBlue">Our goal is to make mathematics accessible and engaging for everyone. Whether you are a student just starting out or a seasoned professional, we are here to support you on your journey.</p>',
      showCloseButton: true,
      showConfirmButton:false,
      background: '#FEF5AC',
      backdrop: 'rgba(151,210,236,0.4)',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  });
  