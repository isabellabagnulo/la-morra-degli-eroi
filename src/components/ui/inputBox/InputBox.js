import PropTypes from "prop-types"

import './inputBox.css'

function InputBox(props) {
  function change(e) {
    if (!!props.callBackChange) {
      props.callBackChange(e)
    }
  }

  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.classCss}
        style={props.objCss}
        onChange={change}
      />
    </>
  )
}

InputBox.propTypes = {
    type: PropTypes.string,
    cssClass: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    callBackChange: PropTypes.func,
    objCss: PropTypes.object,
}

InputBox.defaultProps = {
    type: "text"
  }  

export default InputBox
