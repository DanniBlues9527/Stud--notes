import React from "react";
import ReactDOM from "react-dom";

// export default class Demo extends React.Component {
//   state = { count: 0 };

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   myRef = React.createRef()

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }

//   show = () => {
//     console.log(this.myRef.current.value)
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     );
//   }
// }

function Demo() {
  // console.log('Demo')
  const [count, setCount] = React.useState(0);
  const myRef = React.useRef();

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer)
    }
  }, []);

  function add() {
    // setCount(count + 1);

    setCount((count) => {
      return count + 1;
    });
  }

  function show(){
    console.log(myRef.current.value)
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  );
}

export default Demo;
