// import React from "react"
import PropTypes from 'prop-types';

export default function Die(props) {
    // const { isHeld, value, holdDice } = props;
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}
Die.propTypes = {
    isHeld: PropTypes.bool,
    holdDice: PropTypes.func,
    value: PropTypes.number
    }