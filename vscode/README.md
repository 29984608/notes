# vscode 代码格式化工具

vscode 虽然有各种格式化代码的插件，但想更高效的格式化还是需要插件和 npm 扩展依赖以及配置搭配使用

目前支持 js、html、json、vue、markdown 类型文件自动格式化，其中用到的 eslint、prettier、stylelint、markdownlint 插件和 npm 包。

## 使用

- vscode 安装 eslint、prettier、stylelint、markdownlint 插件

- 使用 npm install 命令安装模块依赖

- 打开 vscode setting.json 文件，写入配置

## 问题

- 目前还不支持 react，ts 等类型文件的格式化。可自行使用 eslint 和 prettier 配置支持
- eslint 和 prettier 配置在某些配置上会有冲突，这里我使用的 eslint 为主，prettier 只做格式化，还有其他解决办法
    - 使用 eslint-config-prettier 插件，这个插件会自动禁用 eslint 与 prettier 冲突的配置，以 prettier 为主
    - 手动更改冲突的配置
- 不论是 eslint、prettier、stylelint 等，都支持丰富的插件和配置，具体还有待研究

## 参考链接

- [eslint](https://eslint.bootcss.com/)

- [prettier](https://prettier.io/)：prettier 相当强大，还支持多种类型文件的格式化

- [stylelint](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/get-started.md)
