# 组件开发步骤

> 您的贡献对我们的业务组件库的壮大非常重要！

## 组件开发

在[src/Component.jsx](./src/Component.jsx)文件中编写您的组件

## 组件调试

- 在[stories/index.stories.js](./stories/index.stories.js)文件中编写您的组件的 demo
- 使用 `npm run storybook` 命令来调试您的组件

> 如果您的调试命令不起作用，可能是您本地没有安装`@storybook/cli `，您可以尝试安装后再次尝试启动

#### 属性调试

storybook 提供了 text,boolean,number,array,select,radios,object 等多种数据类型，如果您想启用 storybook 的属性调试功能，可以用这些数据类型包裹您的属性参数，您可以参考 demo.js 中的示例用法来快速使用，详细用法可以参考 [storybook 的文档](https://github.com/storybooks/storybook/tree/master/addons/knobs)

> 建议您使用 属性调试 功能，这样可以让您组件的用户直接看到不同属性组合下的组件表现

## 组件文档

在根目录下的 [index.zh-CN.md](./index.zh-CN.md) 文件中编写您的组件文档

至此，您已经完成了一个业务组件编写的所有步骤，可以通过 `sl publish` 命令来发布您的命令了。
