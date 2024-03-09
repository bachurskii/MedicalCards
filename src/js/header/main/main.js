class Main {
  constructor() {}

  renderMain() {
    const main = document.createElement("div");
    main.innerHTML = `
    <div id ='loginMain' class="  border border-solid-red   ">
    <div class="bg-[url('src/img/backround-img.png')] h-full  bg-center ...">
   <div class=" flex flex-col  justify-center items-start">
    <div class="bg-white p-6 rounded shadow-md text-center mt-32 w-72 w-96  m-44 my-64">
        <h1 class="text-5xl font-bold mb-4">SERVICES FOR PATIENTS</h1>
        <p class="text-xl">We provide the widest range of accredited, innovative patient services.</p>
        <div class="flex justify-center gap-y-5 mt-4">
            <a href="#" class="text-blue-600 mx-2"> <img src='./src/img/facebook_icon-icons.com_53612.png' class ='w-8'></a>
            <a href="https://www.linkedin.com/feed/" class="text-blue-300 mx-2"><img src='./src/img/linkedin_icon-icons.com_65929.png' class ='w-8'></a>
            <a href="https://github.com/bachurskii" class="text-pink-600 mx-2"><img src='./src/img/github-logo_icon-icons.com_73546.png' class ='w-8'></a>
        </div>
    </div>
</div>
    </div>
    <h2 class ='mt-16 text-center uppercase font-bold text-5xl '>Medical Services</h2>
    <p class ='text-center mt-5 text-xl  text-teal-300'>Our Center offers you and your family a full range of medical services.</p>
    <div class="container mx-auto px-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Family care</h3>
      <p class="text-sm">Our doctors, nurses and clinic staff work together to provide friendly, personalized care for your family from birth to age 100+.</p>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Urgent Care</h3>
      <p class="text-sm">We will take care of you from inpatient care to same-day appointments to online visits. If you have an emergency...</p>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Pediatric</h3>
      <p class="text-sm">Our care team has earned a reputation for providing expert care to children, including treating many complex conditions.</p>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Laboratory services</h3>
      <p class="text-sm">We can help you know what to expect before, during, and after the test. Use this information and always follow your doctor's directions.</p>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Operation</h3>
      <p class="text-sm">With groundbreaking advances in medical research, educational programs shaping the future of healthcare, and large-scale community events</p>
    </div>
    <div class="bg-white rounded-lg shadow p-6">
      <h3 class="text-lg font-semibold mb-4 text-teal-300 text-xl font-bold uppercase">Palliative care</h3>
      <p class="text-sm">Palliative care is the active, comprehensive care of the physical, psychological, emotional and spiritual needs of patients with chronic, debilitating illnesses.</p>
    </div>

  </div>
</div>
    </div>
    
    `;
    this.main = main;
    return this.main;
  }
}
export default Main;
