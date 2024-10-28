import "../index.css";

export default function Connect_with_us() {
  return (
    <div class="p-2 max-w-sm mx-auto bg-white  shadow-lg items-center space-x-4 font-bold flex py-4 first:pt-0 last:pb-0 bottom-5 mt-4 ...">
      <div>Свяжитесь с нами:</div>

      <div>
        <input
          class=" w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-blue-500 hover:border-blue-300 shadow-sm focus:shadow"
          placeholder="Имя"
        />

        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-300 shadow-sm focus:shadow"
          placeholder="Фамилия"
        />

        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-indigo-500 hover:border-indigo-300 shadow-sm focus:shadow"
          placeholder="Телефон"
        />

        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
          placeholder="Почта"
        />

        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-teal-500 hover:border-teal-300 shadow-sm focus:shadow"
          placeholder="Ваше сообщение"
        />
      </div>
    </div>
  );
}
