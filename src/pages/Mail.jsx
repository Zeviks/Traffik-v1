import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { FaTelegramPlane } from "react-icons/fa";

import { EmailData } from "../data/dummy";
import { Header } from "../components";

const Mail = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-slate-900 rounded-3xl">
      <Header category="App" title="Mail" />
      <h2 className="text-2xl mb-3 font-extrabold tracking-tight text-slate-900 dark:text-amber-400">
        Templates
      </h2>
      <div className="mb-5 grid grid-cols-3 gap-4 grid-row-1">
        <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://source.unsplash.com/random/200×200"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Make an Announcemnt
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This template is designed for Knowledgeable readers. With a
              Neutral formality, this is the perfect fit Sharing details about a
              sale, event, or other big news.
            </p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-900 transition-all rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-secondary-dark-bg dark:hover:text-white dark:text-slate-900 dark:focus:ring-blue-800"
            >
              Select Template
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://source.unsplash.com/random/200×200"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Follow Up
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This template is designed for expert readers. With a formal focus
              formality, perfectly tailored emails to people who have engaged
              with you.
            </p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-900 transition-all rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-secondary-dark-bg dark:hover:text-white dark:text-slate-900 dark:focus:ring-blue-800"
            >
              Select Template
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://source.unsplash.com/random/200×200"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Educate
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This template is designed for general readers. With a Neutral
              focus formality, this is the perfect fit for explaining your
              products or share knowledge about a topic.
            </p>
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-900 transition-all rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-400 dark:hover:bg-secondary-dark-bg dark:hover:text-white dark:text-slate-900  dark:focus:ring-blue-800"
            >
              Select Template
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <form>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Recipient
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@Recipient.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Sender
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@Sender.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="text"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="text"
            placeholder="Subject"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </form>

      <RichTextEditorComponent id="defaultRTE" value={EmailData}>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
      <div>
        <button
          type="submit"
          class="mt-8 md:mt-5 text-white bg-slate-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-400 transition-all dark:hover:bg-secondary-dark-bg  dark:focus:ring-blue-800"
        >
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default Mail;
