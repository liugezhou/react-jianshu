#### Git-History

##### 1.styled-components
> 使用styled-components的createGlobalStyle方法，在js文件中写css文件。

##### 2.使用styled-components完成Header组件布局
> 主要是熟悉下styled-componenets的写法，主要看文件src/common/header/style.js以及index.js的写法。  

##### 3.使用iconfont嵌入头部图标
> 首先在iconfont官网新建项目，下载相应的iconfont图标，然后在statics文件下新建文件夹iconfont文件夹，把相应的下载图片放进去，其中iconfont.css文件改为iconfont.js文件，然后引入`styled-components`中的`createGlobalStyle`方法，在App.js中以组件形式写入即可。

##### 4.搜索框动画效果实现
> 动画效果需要安装`react-transition-group`,然后在项目布局完成后，引入`CSSTransition`组件，将要进行动画的组件包裹即可。

##### 5.使用React-Redux进行应用数据的管理
> 首先安装依赖`redux`、`react-redux`。  
> 创建store文件夹，index主文件使用`redux`中的createStore方法，传入reducer。 
> 使用store的时候，需要在App.js中引入`react-redux` 的`Provider`组件,并注入。  
> 最后主要就是在要使用store的组件中，引入`react-redux`的`conenct`方法。 


