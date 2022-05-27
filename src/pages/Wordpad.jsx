import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Wordpad = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white eounded-3xl'>
      <Header category='App' title='Wordpad' />
      <RichTextEditorComponent id='defaultRTE' value={EditorData}>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
      </div>
  )
}

export default Wordpad