# React-H5-ActionSheet
> 仿ios动画，底部弹出式菜单

### 一、前言

使用React来开发H5应用，现成的移动组件库并不能完全满足产品们的需求，只为了用个别组件而引入整个组件库感觉有点得不偿失，所以还是自己写一个想怎么改就怎么改吧。

效果如下:



![ActionSheet效果图](http://papyd60zx.bkt.clouddn.com/ActionSheet.GIF)



### 二、项目预览

> 本Demo使用了[creact-react-app](https://github.com/facebook/create-react-app)来创建工程。

1. 克隆项目到本地

   ```bash
   $ git clone https://github.com/yangzhe1003/React-H5-ActionSheet.git
   ```

2. 项目结构

   ```
   ├── README.md      //本项目文档
   └── action_sheet    //creact-react-app所建工程
       ├── README.md
       ├── package.json
       ├── public
       │   ├── favicon.ico
       │   ├── index.html
       │   └── manifest.json
       ├── src      //源码
       │   ├── ActionSheet   //ActionSheet组件
       │   │   ├── animated.css
       │   │   └── index.jsx
       │   ├── App.css
       │   ├── App.js    //父组件
       │   ├── App.test.js
       │   ├── index.css
       │   ├── index.js
       │   ├── logo.svg
       │   └── serviceWorker.js
       └── yarn.lock
   ```

3. 进入action_sheet工程目录，安装依赖

   ```
   $ yarn //(推荐)
   //or
   $ npm install
   ```

4. 启动项目

   ```
   $ yarn start
   //or
   $ npm start
   ```

5. Localhost:3000预览项目

### 三、结尾

1. 组件写的比较简单，只是实现了动画效果，没有解决底层滑动的问题。

