import * as React from 'react'
import { FormEvent } from 'react';

interface IProps {
  handleSubmit: (value: string) => void
}
interface IState {
  value: string
}

export default class DuppaAdder extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { value: '' } // Value is empty by default
    this._updateValue = this._updateValue.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  public _updateValue(e: React.ChangeEvent) {
      console.log("UUUSUSSUSU");
    this.setState({ value: 'ffff' })
  }

  public _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.value.trim()) {
      return
    }

    this.props.handleSubmit(this.state.value)
    this.setState({ value: '' })

  }

  public render() {
    const { value } = this.state
    const { _updateValue, _handleSubmit } = this
    return (
      <form onSubmit={_handleSubmit}>
        <input type="text" value={value} onChange={_updateValue} />
        <button type="submit">Add todo !</button>
      </form>
    )
  }
}