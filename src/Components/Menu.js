import "../index.css";

export default function Menu() {
  return (
    <div class="w-full absolute bottom-0 p-6 mx-margin left bg-black shadow-lg flex items-center space-x-4 ">
      <div>
        <div class="p-2 max-w-sm margin-left shadow-lg items-center space-x-1flex flex-row mr-10">
          <button class=" h-5 px-1 font-semibold text-base/4  rounded-lg bg-blue-600 ...">
            VORON
          </button>
          <button class="h-5 px-1 font-semibold text-base/4  bg-white ...">
            SCRIPT
          </button>
        </div>
        <div class="text-xl font-medium text-white">VORONSCRIPT</div>
        <p class="text-white">
          Voron Script занимается генерацией рекламы с помощью искусственного
          интеллекта
        </p>
      </div>
    </div>
  );
}
