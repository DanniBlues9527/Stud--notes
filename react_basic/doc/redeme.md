[TOC]
## 

### 组件的生命周期

#### 旧
1. 初始化阶段：由ReactDOM.render()触发---初次渲染
    - constructor()
    - componentWillMount()
    - render()
    - <b>componentDidMount()</b>  `一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息`
2. 更新阶段：由组件内部this.setState()或父组件重新render触发
    - shouldComponentUpdate()
    - componentWillUpdate()
    - <b>render()</b> `必须用`
    - componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
    - <b>componentWillUnmount()</b> `一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息`

#### 新

1. 初始化阶段：由ReactDOM.render()触发---初次渲染
    - constructor()
    - getDerivedStateFromProps
    - render()
    - componentDidMount()
2. 更新阶段：由组件内部this.setState()或父组件重新render触发
    - getDerivedStateFromProps
    - shouldComponentUpdate()
    - <b>render()</b> 
    - getSnapshotBeforeUpdate
    - componentDidUpdate()
3. 卸载组件：由ReactDOM.unmountComponentAtNode()触发
    - <b>componentWillUnmount()</b> 

### diff
#### 经典面试题
1. react/vue中的key有什么作用？(key的内部原理是什么？)
2. 为什么遍历列表时，key最好不要用index？

+ 虚拟DOM中key的作用：
  + 简单的说：key是虚拟DOM对象到标识，在更新显示时key起着及其重要到作用
  + 详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
    + 旧虚拟DOM中找到了与虚拟DOM相同的key：
      + 若虚拟DOM中内容没变，直接使用之前的真实DOM
      + 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中的真实DOM
    + 旧虚拟DOM中未找到与新虚拟DOM相同的key
        + 根据数据创建新的真实DOM，随后渲染到页面
+ 用index作为key可能会引发的问题；
  + 若对数据进行：逆序添加、逆序删除等破坏顺序操作：会产生没有必要的真实DOM更新==> 界面效果没问题，但效率低
  + 如果结构中还包含输入类但DOM：会产生错误DOM更新 ==> 界面有问题
  + 注意：如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。
+ 开发中如何选择key？
  + 最好使用每条数据的唯一标识作为key，如id、手机号、身份证号、学号等唯一值
  + 如果确定只是展示数据，用index也是可以的