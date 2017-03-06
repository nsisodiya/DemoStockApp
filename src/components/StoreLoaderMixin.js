/**
 * Created by narendrasisodiya on 07/03/17.
 */
export default class {
  componentDidMount() {
    if (this.store !== undefined) {
      this.unsub = this.store.onChange(() => {
        const newState = this.store.getState();
        this.setState(newState);
      });
    }
  }

  componentWillMount() {
    if (this.store !== undefined) {
      this.state = this.store.getState();
    }
  }

  componentWillUnmount() {
    if (this.store !== undefined) {
      this.unsub();
    }
  }
}
