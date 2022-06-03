import React from "react";
import { Header } from "../components";
import styles from "../Styles/Invoice.module.css";
const Invoice = () => {
  return (
    <div
      className={`${styles.container} m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-slate-900 rounded-3xl`}
    >
      <Header category="App" title="Invoice" />
      <h2 className="text-xl mb-3 font-extrabold tracking-tight text-slate-900 dark:text-amber-400">
        Invoice Details
      </h2>
      <form autoComplete="off">
        <div class="mb-5 relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="invoice_company"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
            placeholder=" "
            required
          />
          <label
            for="invoice_company"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Client's Company (Ex. Google)
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="invoice_address"
            id="inoivce_address"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
            placeholder=" "
            required
          />
          <label
            for="inoivce_address"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Client's Address (Ex. 123 Main Street)
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="invoice_phone"
            id="invoice_phone"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
            placeholder=" "
            required
          />
          <label
            for="invoice_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="invoice_email"
            id="invoice_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
            placeholder=" "
            required
          />
          <label
            for="invoice_phone"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            pattern="[0-9]*"
            name="invoice_zip"
            id="invoice_zip"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 d focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
            placeholder=" "
            required
          />
          <label
            for="invoice_zip"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Zip Code
          </label>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="inovice_city"
              id="invoice_city"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
              placeholder=" "
              required
            />
            <label
              for="invoice_city"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="invoice_state"
              id="invoice_state"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-slate-900 dark:focus:border-amber-400 peer"
              placeholder=" "
              required
            />
            <label
              for="invoice_state"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-900 dark:peer-focus:text-amber-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              State
            </label>
          </div>
        </div>
        <div className="mb-2">
          <label
            for="invoice_country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-amber-400"
          >
            Select an option
          </label>
          <select
            id="invoice_country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </form>
      <button
        type="submit"
        class="mt-8 md:mt-5 text-white bg-slate-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 transition-all dark:hover:bg-secondary-dark-bg  dark:text-slate-900 dark:hover:text-white dark:focus:ring-blue-800"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default Invoice;
