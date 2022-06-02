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
import { AiOutlinePlus } from "react-icons/ai";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Wordpad = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-slate-900 rounded-3xl">
      <Header category="App" title="Wordpad" />
      <RichTextEditorComponent id="defaultRTE" value={EditorData}>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
      <div class=" mt-8 inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          class=" transition-all text-white bg-slate-900 hover:bg-green-200 hover:text-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-amber-400 dark:text-slate-900 dark:hover:bg-secondary-dark-bg dark:hover:text-white dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          Save
        </button>
        <button
          type="button"
          class=" transition-all text-slate-900 bg-green-200 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-secondary-dark-bg dark:text-white dark:hover:bg-slate-700  dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          Share
        </button>
      </div>
    </div>
  );
};

export default Wordpad;
