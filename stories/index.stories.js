import React from 'react';
import {storiesOf} from '@storybook/react';
import {
  text,
  boolean,
  number,
  array,
  select,
  radios,
  object
} from '@storybook/addon-knobs';

import Component from '../src'
import notes from '../README.md'

storiesOf('组件|数据输入', module)       // 在 | 号后面修改你的组件所属的类别（数据输入、布局、数据展示、通用）
  .add('igroot-button', ()=>(           // 这里改为你的组件名
    <Component                          // 这里是您的组件引用
      type={select('type',{primary:'primary',default:'default'})}
      title={text('title','按钮示例文字')}
    />
  ), {notes})
