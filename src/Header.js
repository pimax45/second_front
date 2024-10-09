import "./index.css";

export default function Header() {
  return (
    <div class="p-6 max-w-sm margin shadow-lg space-x-1flex flex-row w-screen ">
      <button class=" h-5 px-1 font-semibold text-base/4  rounded-lg bg-blue-600 ...">
        VORON
      </button>
      <button class="font-semibold  bg-white hover:bg-white ...">SCRIPT</button>
    </div>
  );
}
