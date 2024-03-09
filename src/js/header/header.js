class Header {
  constructor() {}

  renderHeader() {
    const header = document.createElement("div");
    header.innerHTML = `
    <div class=" mx-auto border-b-2 border-gray-200   " ">
    <div id="header-wrapper" class=" flex justify-between items-center bg-cyan-400 " >
    
    <img class="w-[80px] h-[80px]" src="./src/img/logo.jpg"/>
    <h1 class =' text-slate-50 font-serif	text-6xl font-extrabold leading-10 scroll-my-0 scroll-mx-0 scroll-mb-6 uppercase '>Welcome to our clinic<h1>
    </div>
    </div>
    
    `;
    this.header = header;
    return this.header;
  }
}
export default Header;
