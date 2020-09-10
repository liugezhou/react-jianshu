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

##### 6.使用combineReducers完成对数据的拆分管理
> 我们查看之前的代码，store中的reducer--若以后有更多的reducer都写在这个文件中，就显得冗余，于是这节内容就是拆分管理。   
> 在header文件下新建reducer文件，将之前store中的reducer拷贝到此文件，然后在header下新建index文件，将reducer导出。 
> 然后在store中的reducer使用`redux`中的`combineReducers`方法将header下的reducer引入即可。

##### 7.使用Immutable.js来管理store中的数据
> immutable.js是FaceBook历时三年开发的一个第三方库，它可以帮我们生成一个immutable对象(immutable表示不可改变的)。  
> 那么如果reducer中的state数据是immutable对象，那么就能保证我们不会出现修改state数据的现象发生。然后我们就这么干：   
> + 首先 安装：yarn add immutable 
> + 然后 在header文件下的reducer中使用`immutable`的`fromJS`方法，将JS对象(本例为defaultState)修改为一个不可改变的immutable对象。 
> + 接着在header文件下的入口index中间中。我们在读取的时候就不能写成`state.header.focused`来读取focused了，需要改成`state.header.get('focused')`来获取此值。 
> + 最后，在reducer中的我们设置值的时候这么返回：`return state.set('focused',true)`,只是看这行代码的时候，我们感觉貌似去修改了state，其实不然，这是因为：`immutable对象中的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象`。

##### 8.使用redux-immutable统一数据样式
> 这个小节要解决的问题是：我们在header组件中获取focused的值的时候代码是这么写的：`state.header.get('focused')`,这行代码state.header是一个js对象。然后调用get方法获取的又是一个immutable对象，我们要做的就是统一数据样式，让state.header也通过get的写法获得一个immutable对象，即`state.get('header').get('focused')`的这种写法。下面为步骤： 
> + 安装  ` yarn add redux-immutable `  
> + 在store的reducer中我们在引入`combineReducers`方法的时候之前使用的是`redux`中的方法，现在修改为从`redux-immutable`中引。 
> 如此而已。
