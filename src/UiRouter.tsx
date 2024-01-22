import { UIRouter, UIView, pushStateLocationPlugin, useSrefActive } from '@uirouter/react'

const CounterHello = () => <h3>Counter.Hello</h3>
const CounterAbout = () => <h3>Coutner.About</h3>

const View = () => {
  const activeClass = "active";
  const helloSref = useSrefActive("counterHello", {}, activeClass);
  const aboutSref = useSrefActive("counterAbout", {}, activeClass);

  return (
    <div>
      <a {...helloSref}>Link to Counter.Hello</a>
      <a {...aboutSref}>Link to Counter.About</a>
      <UIView></UIView>
    </div>
  )
  
}

const counterHelloState = { name: "counterHello", url: "/counter/hello", component: CounterHello };
const counterAboutState =  { name: "counterAbout", url: "/counter/about", component: CounterAbout };


function UiRouter() {
  return (
    <UIRouter
      plugins={[pushStateLocationPlugin]}
      states={[counterHelloState, counterAboutState]}
      >
      <View></View>
    </UIRouter>
  )
}

export default UiRouter