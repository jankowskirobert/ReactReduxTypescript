import { connect } from 'react-redux'
import {addIt} from '../index'
import DuppaAdder from './DuppaAdder'

export default connect<any, any, any>(null, {
  handleSubmit: addIt
})(DuppaAdder)