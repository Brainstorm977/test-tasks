//Задание:

class MyComponent extends React.Component {
    state = {
        counter: 1,
    };

    increment = () => this.setState({
        counter: this.state.counter + 1
    });
    doubleIncrement = () => {
        this.increment();
        this.increment();
    }
}

//React может группировать несколько вызовов setState в одно обновление, поэтому нельзя полагаться на их текущее значение, вызывая setState один за другим, особенно в случаях, когда обновление state зависит от предыдущего значения.
// Нужно передать предыдущее состояние, таким образом мы будем точно уверены что получили самое актуальное значение state.

class MyComponent extends React.Component {
        state = {
            counter: 1,
        };

        increment = () =>
            this.setState((prevState) => ({
                counter: prevState.counter + 1,
            }));
        doubleIncrement = () => {
            this.increment();
            this.increment();
        };